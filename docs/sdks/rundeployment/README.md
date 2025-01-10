# RunDeployment
(*runDeployment*)

## Overview

### Available Operations

* [queue](#queue) - Deployment - Queue
* [stream](#stream) - Deployment - Stream

## queue

Create a new deployment run with the given parameters.

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.runDeployment.queue({
    inputs: {
      "prompt": "A beautiful landscape",
      "seed": 42,
    },
    webhook: "https://myapp.com/webhook",
    deploymentId: "15e79589-12c9-453c-a41a-348fdd7de957",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ComfyDeployCore } from "comfydeploy/core.js";
import { runDeploymentQueue } from "comfydeploy/funcs/runDeploymentQueue.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runDeploymentQueue(comfyDeploy, {
    inputs: {
      "prompt": "A beautiful landscape",
      "seed": 42,
    },
    webhook: "https://myapp.com/webhook",
    deploymentId: "15e79589-12c9-453c-a41a-348fdd7de957",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useRunDeploymentQueueMutation
} from "comfydeploy/react-query/runDeploymentQueue.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeploymentRunRequest](../../models/components/deploymentrunrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CreateRunResponse](../../models/components/createrunresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## stream

Create a new deployment run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.runDeployment.stream({
    inputs: {
      "prompt": "A beautiful landscape",
      "seed": 42,
    },
    webhook: "https://myapp.com/webhook",
    deploymentId: "15e79589-12c9-453c-a41a-348fdd7de957",
  });

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ComfyDeployCore } from "comfydeploy/core.js";
import { runDeploymentStream } from "comfydeploy/funcs/runDeploymentStream.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runDeploymentStream(comfyDeploy, {
    inputs: {
      "prompt": "A beautiful landscape",
      "seed": 42,
    },
    webhook: "https://myapp.com/webhook",
    deploymentId: "15e79589-12c9-453c-a41a-348fdd7de957",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  for await (const event of result) {
    // Handle the event
    console.log(event);
  }
}

run();
```

### React hooks and utilities

This method can be used in React components through the following hooks and
associated utilities.

> Check out [this guide][hook-guide] for information about each of the utilities
> below and how to get started using React hooks.

[hook-guide]: ../../../REACT_QUERY.md

```tsx
import {
  // Mutation hook for triggering the API call.
  useRunDeploymentStreamMutation
} from "comfydeploy/react-query/runDeploymentStream.js";
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DeploymentRunRequest](../../models/components/deploymentrunrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[EventStream<components.RunStream>](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |