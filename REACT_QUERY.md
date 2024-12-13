# React hooks

This SDK provides React hooks and utilies for making queries and mutations that
can take the pain out of building front-end applications for the web or React
Native.

They are built as a thin wrapper around [TanStack Query for React v5][rq], a
powerful, asynchronous state management library. A good understanding of that
library will be very helpful while using them. In addition to hooks, there are
several helper functions that can be used for cache management and data fetching
during server-rendering and in React Server Components.

## Getting started

To get started using React hooks, you will need to inject TanStack query and an
SDK instance into your application. Typically, this will be done high up in
your React app at the root or layout component. For example:

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ComfyDeployCore } from "comfydeploy";
import { ComfyDeployProvider } from "comfydeploy/react-query";

const queryClient = new QueryClient();
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

// Retries are handled by the underlying SDK.
queryClient.setQueryDefaults(["comfydeploy"], { retry: false });
queryClient.setMutationDefaults(["comfydeploy"], { retry: false });

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ComfyDeployProvider client={comfyDeploy}> 
        {/* Your app logic starts here */}
      </ComfyDeployProvider>
    </QueryClientProvider>
  );
}
```

## Queries

Query hooks are the basic building block for fetching data. In addition to
request data, they take the same options as the [`useQuery` hook][use-query]
from TanStack Query.

[use-query]: https://tanstack.com/query/v5/docs/framework/react/reference/useQuery

```tsx
import { useRunGet } from "comfydeploy/react-query/runGet.js";

export function Example() {
  const { data, error, status } = useRunGet({
    runId: "<id>",
  });

  // Render the UI here...
}
``` 

### Query timeouts and retries

Since the underlying SDK handles request timeouts and retries, there are a few
more options provided by the query hooks to control these behaviors.

```tsx
import { useState } from "react";
import { useRunGet } from "comfydeploy/react-query/runGet.js";

export function ExampleWithOptions() {
  const [enabled, setEnabled] = useState(true);
  const { data, error, status } = useRunGet(
    {
      runId: "<id>",
    },
    {
      // TanStack Query options:
      enabled,
      staleTime: 60 * 1000, // 1 minute
      gcTime: 5 * 60 * 1000, // 5 minutes

      // Request options for the underlying API call:
      timeoutMs: 1000,
      retryCodes: ["5XX"],
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 10 * 1000, // 10 seconds
          exponent: 1.5,
          maxElapsedTime: 60 * 1000, // 1 minute
        },
      },
    }
  );

  // Render the UI here...
}
```


## Mutations

Operations that can have side-effects in this SDK are exposed as mutation hooks.
These can be integrated into HTML forms to submit data to the API. They also
take the same options as the [`useMutation` hook][use-mutation] from TanStack
Query.

[use-mutation]: https://tanstack.com/query/v5/docs/framework/react/reference/useMutation

```tsx
import { useRunDeploymentQueueMutation } from "comfydeploy/react-query/runDeploymentQueue.js";

export function Example() {
  const { mutate, status } = useRunDeploymentQueueMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        // Read form data here...

        mutate({
          inputs: {
            "num_inference_steps": 30,
            "prompt": "A beautiful landscape",
            "seed": 42,
          },
          webhook: "https://myapp.com/webhook",
          deploymentId: "15e79589-12c9-453c-a41a-348fdd7de957",
        });
      }}
    >
      {/* Form fields go here... */} 
      <button type="submit" disabled={status === "pending"}>Submit</button>
    </form>
  );
}
``` 

### Mutation timeouts and retries

Since the underlying SDK handles request timeouts and retries, there are a few
more options provided by the mutation hooks to control these behaviors.

```tsx
import { useRunDeploymentQueueMutation } from "comfydeploy/react-query/runDeploymentQueue.js";

export function ExampleWithOptions() {
  const { mutate, status } = useRunDeploymentQueueMutation({
    // TanStack Query options:
    networkMode: "online",
    gcTime: 5 * 60 * 1000, // 5 minutes

    // Request options for the underlying API call:
    timeoutMs: 1000,
    retryCodes: ["5XX"],
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 500,
        maxInterval: 10 * 1000, // 10 seconds
        exponent: 1.5,
        maxElapsedTime: 60 * 1000, // 1 minute
      },
    },
  });

  // Render the UI here...
}
```


## Cache invalidation

In many instances, triggering a mutation hook requires invalidating specific
query data currently residing in the TanStack Query's cache. Alongside every
query hook there are two functions that help invalidate cached data:

```tsx
import { useQueryClient } from "@tanstack/react-query";
import { invalidateRunGet, invalidateAllRunGet } from "comfydeploy/react-query/runGet.js";
// Replace this with a real mutation
import { useExampleMutation } from "comfydeploy/react-query/example.js";

export function Example() {
  const { queryClient } = useQueryClient();
  const { mutate, status } = useExampleMutation();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        mutate(formData, {
          onSuccess: () => {
            // Invalidate a single cache entry:
            invalidateRunGet(queryClient, /* ... arguments ... */);
            // OR, invalidate all cache entries for the query targets:
            invalidateAllRunGet(queryClient);
          },
        });
      }}
    >
      {/* Form fields go here... */} 

      <button type="submit" disabled={status === "pending"}>Submit</button>
    </form>
  );
}
```


## Integration with React Suspense

TanStack Query predates React Suspense and out of the box it does a great job at
exposing the lifecycle of asynchronous tasks. However, if you are already using
Suspense in your app, the default hooks will not trigger suspense boundaries.
This is why the library and, by extension, this SDK also provide equivalent
hooks that integrate neatly with React Suspense.

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import { ComfyDeployCore } from "comfydeploy";
import { ComfyDeployProvider } from "comfydeploy/react-query";
import { useRunGetSuspense } from "comfydeploy/react-query/runGet.js";

const queryClient = new QueryClient();
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ComfyDeployProvider client={comfyDeploy}> 
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary
              fallbackRender={({ error, resetErrorBoundary }) => (
                <div>
                  There was an error!{' '}
                  <Button onClick={() => resetErrorBoundary()}>Try again</Button>
                  <pre>{error.message}</pre>
                </div>
              )}
              onReset={reset}
            >
              <React.Suspense fallback={<h1>Loading...</h1>}>
                <Example />
              </React.Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </ComfyDeployProvider>
    </QueryClientProvider>
  );
}

function Example() {
  const { data } = useRunGetSuspense({
    runId: "<id>",
  });

  // Render the UI here...
}
```


## Server-rendering and React Server Components

Query hooks are also side-loaded with prefetch helper functions. These functions
can be used to fetch data from the API during server-rendering and in React
Server Components so that it can be available immediately on page load to any
components that use the corresponding hooks:
```tsx
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ComfyDeployCore } from "comfydeploy";
import { prefetchRunGet } from "comfydeploy/react-query/runGet.js";

export default async function Page() {
  const queryClient = new QueryClient();
  const comfyDeploy = new ComfyDeployCore({
    bearer: "<YOUR_BEARER_TOKEN_HERE>",
  });

  await prefetchRunGet(queryClient, comfyDeploy, {
    runId: "<id>",
  });

  return (
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* Client components under this point will also have data on page load. */}
    </HydrationBoundary>
  );
}
```


[rq]: https://tanstack.com/query/v5/docs/framework/react/overview