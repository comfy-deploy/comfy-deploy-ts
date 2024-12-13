# comfy-deploy

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/advanced-setup/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start Summary [summary] -->
## Summary

ComfyDeploy API: 
### Overview

Welcome to the ComfyDeploy API!

To create a run thru the API, use the [queue run endpoint](#tag/run/POST/run/deployment/queue).

Check out the [get run endpoint](#tag/run/GET/run/{run_id}), for getting the status and output of a run.

### Authentication

To authenticate your requests, include your API key in the `Authorization` header as a bearer token. Make sure to generate an API key in the [API Keys section of your ComfyDeploy account](https://www.comfydeploy.com/api-keys).

###
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [comfy-deploy](#comfy-deploy)
  * [🏗 **Welcome to your new SDK!** 🏗](#welcome-to-your-new-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [React hooks with TanStack Query](#react-hooks-with-tanstack-query)
  * [Server-sent event streaming](#server-sent-event-streaming)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Standalone functions](#standalone-functions)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add comfydeploy
# Install optional peer dependencies if you plan to use React hooks
npm add @tanstack/react-query react react-dom
```

### PNPM

```bash
pnpm add comfydeploy
# Install optional peer dependencies if you plan to use React hooks
pnpm add @tanstack/react-query react react-dom
```

### Bun

```bash
bun add comfydeploy
# Install optional peer dependencies if you plan to use React hooks
bun add @tanstack/react-query react react-dom
```

### Yarn

```bash
yarn add comfydeploy zod
# Install optional peer dependencies if you plan to use React hooks
yarn add @tanstack/react-query react react-dom

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [callbacks](docs/sdks/callbacks/README.md)

* [runUpdateRequestBodyWebhookPost](docs/sdks/callbacks/README.md#runupdaterequestbodywebhookpost) - Receive run status updates via webhook


### [deployments](docs/sdks/deployments/README.md)

* [list](docs/sdks/deployments/README.md#list) - Get Deployments

### [file](docs/sdks/file/README.md)

* [upload](docs/sdks/file/README.md#upload) - Upload File

### [models](docs/sdks/models/README.md)

* [publicModelsModelsGet](docs/sdks/models/README.md#publicmodelsmodelsget) - Public Models

### [run](docs/sdks/run/README.md)

* [get](docs/sdks/run/README.md#get) - Get Run
* [~~queue~~](docs/sdks/run/README.md#queue) - Queue a workflow :warning: **Deprecated**
* [~~sync~~](docs/sdks/run/README.md#sync) - Run a workflow in sync :warning: **Deprecated**
* [~~stream~~](docs/sdks/run/README.md#stream) - Run a workflow in stream :warning: **Deprecated**

#### [run.deployment](docs/sdks/deployment/README.md)

* [queue](docs/sdks/deployment/README.md#queue) - Deployment - Queue
* [sync](docs/sdks/deployment/README.md#sync) - Deployment - Sync
* [stream](docs/sdks/deployment/README.md#stream) - Deployment - Stream

#### [run.workflow](docs/sdks/workflow/README.md)

* [queue](docs/sdks/workflow/README.md#queue) - Workflow - Queue
* [sync](docs/sdks/workflow/README.md#sync) - Workflow - Sync
* [stream](docs/sdks/workflow/README.md#stream) - Workflow - Stream

### [search](docs/sdks/search/README.md)

* [searchSearchModelGet](docs/sdks/search/README.md#searchsearchmodelget) - Search

### [session](docs/sdks/session/README.md)

* [get](docs/sdks/session/README.md#get) - Get Session
* [cancel](docs/sdks/session/README.md#cancel) - Delete Session
* [list](docs/sdks/session/README.md#list) - Get Machine Sessions
* [create](docs/sdks/session/README.md#create) - Create Session

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start React hooks with TanStack Query [react-query] -->
## React hooks with TanStack Query

React hooks built on [TanStack Query][tanstack-query] are included in this SDK.
These hooks and the utility functions provided alongside them can be used to
build rich applications that pull data from the API using one of the most
popular asynchronous state management library.

[tanstack-query]: https://tanstack.com/query/v5/docs/framework/react/overview

To learn about this feature and how to get started, check
[REACT_QUERY.md](./REACT_QUERY.md).

> [!WARNING]
>
> This feature is currently in **preview** and is subject to breaking changes
> within the current major version of the SDK as we gather user feedback on it.

<details>

<summary>Available React hooks</summary>

- [`useCallbacksRunUpdateRequestBodyWebhookPostMutation`](docs/sdks/callbacks/README.md#runupdaterequestbodywebhookpost) - Receive run status updates via webhook
- [`useDeploymentsList`](docs/sdks/deployments/README.md#list) - Get Deployments
- [`useFileUploadMutation`](docs/sdks/file/README.md#upload) - Upload File
- [`useModelsPublicModelsModelsGet`](docs/sdks/models/README.md#publicmodelsmodelsget) - Public Models
- [`useRunDeploymentQueueMutation`](docs/sdks/deployment/README.md#queue) - Deployment - Queue
- [`useRunDeploymentStreamMutation`](docs/sdks/deployment/README.md#stream) - Deployment - Stream
- [`useRunDeploymentSyncMutation`](docs/sdks/deployment/README.md#sync) - Deployment - Sync
- [`useRunGet`](docs/sdks/run/README.md#get) - Get Run
- [`useRunWorkflowQueueMutation`](docs/sdks/workflow/README.md#queue) - Workflow - Queue
- [`useRunWorkflowStreamMutation`](docs/sdks/workflow/README.md#stream) - Workflow - Stream
- [`useRunWorkflowSyncMutation`](docs/sdks/workflow/README.md#sync) - Workflow - Sync
- [`useSearchSearchSearchModelGet`](docs/sdks/search/README.md#searchsearchmodelget) - Search
- [`useSessionCancelMutation`](docs/sdks/session/README.md#cancel) - Delete Session
- [`useSessionCreateMutation`](docs/sdks/session/README.md#create) - Create Session
- [`useSessionGet`](docs/sdks/session/README.md#get) - Get Session
- [`useSessionList`](docs/sdks/session/README.md#list) - Get Machine Sessions
- ~~[`useRunQueueMutation`](docs/sdks/run/README.md#queue)~~ - Queue a workflow :warning: **Deprecated**
- ~~[`useRunStreamMutation`](docs/sdks/run/README.md#stream)~~ - Run a workflow in stream :warning: **Deprecated**
- ~~[`useRunSyncMutation`](docs/sdks/run/README.md#sync)~~ - Run a workflow in sync :warning: **Deprecated**

</details>
<!-- End React hooks with TanStack Query [react-query] -->

<!-- Start Server-sent event streaming [eventstream] -->
## Server-sent event streaming

[Server-sent events][mdn-sse] are used to stream content from certain
operations. These operations will expose the stream as an async iterable that
can be consumed using a [`for await...of`][mdn-for-await-of] loop. The loop will
terminate when the server no longer has any events to send and closes the
underlying connection.

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.deployment.stream({
    inputs: {
      "num_inference_steps": 30,
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

[mdn-sse]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[mdn-for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
<!-- End Server-sent event streaming [eventstream] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { ComfyDeploy } from "comfydeploy";
import { openAsBlob } from "node:fs";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.file.upload({
    file: await openAsBlob("example.file"),
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `get` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.HTTPValidationError | 422         | application/json |
| errors.SDKError            | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { ComfyDeploy } from "comfydeploy";
import {
  HTTPValidationError,
  SDKValidationError,
} from "comfydeploy/models/errors";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  let result;
  try {
    result = await comfyDeploy.run.get({
      runId: "<id>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof HTTPValidationError): {
        // Handle err.data$: HTTPValidationErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                                    |
| --- | ----------------------------------------- |
| 0   | `https://api.comfydeploy.com/api`         |
| 1   | `https://staging.api.comfydeploy.com/api` |
| 2   | `http://localhost:3011/api`               |

#### Example

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  serverIdx: 2,
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  serverURL: "https://api.comfydeploy.com/api",
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ComfyDeploy } from "comfydeploy";
import { HTTPClient } from "comfydeploy/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ComfyDeploy({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type | Scheme      |
| -------- | ---- | ----------- |
| `bearer` | http | HTTP Bearer |

To authenticate with the API the `bearer` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "<id>",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`callbacksRunUpdateRequestBodyWebhookPost`](docs/sdks/callbacks/README.md#runupdaterequestbodywebhookpost) - Receive run status updates via webhook
- [`deploymentsList`](docs/sdks/deployments/README.md#list) - Get Deployments
- [`fileUpload`](docs/sdks/file/README.md#upload) - Upload File
- [`modelsPublicModelsModelsGet`](docs/sdks/models/README.md#publicmodelsmodelsget) - Public Models
- [`runDeploymentQueue`](docs/sdks/deployment/README.md#queue) - Deployment - Queue
- [`runDeploymentStream`](docs/sdks/deployment/README.md#stream) - Deployment - Stream
- [`runDeploymentSync`](docs/sdks/deployment/README.md#sync) - Deployment - Sync
- [`runGet`](docs/sdks/run/README.md#get) - Get Run
- [`runWorkflowQueue`](docs/sdks/workflow/README.md#queue) - Workflow - Queue
- [`runWorkflowStream`](docs/sdks/workflow/README.md#stream) - Workflow - Stream
- [`runWorkflowSync`](docs/sdks/workflow/README.md#sync) - Workflow - Sync
- [`searchSearchSearchModelGet`](docs/sdks/search/README.md#searchsearchmodelget) - Search
- [`sessionCancel`](docs/sdks/session/README.md#cancel) - Delete Session
- [`sessionCreate`](docs/sdks/session/README.md#create) - Create Session
- [`sessionGet`](docs/sdks/session/README.md#get) - Get Session
- [`sessionList`](docs/sdks/session/README.md#list) - Get Machine Sessions
- ~~[`runQueue`](docs/sdks/run/README.md#queue)~~ - Queue a workflow :warning: **Deprecated**
- ~~[`runStream`](docs/sdks/run/README.md#stream)~~ - Run a workflow in stream :warning: **Deprecated**
- ~~[`runSync`](docs/sdks/run/README.md#sync)~~ - Run a workflow in sync :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ComfyDeploy } from "comfydeploy";

const sdk = new ComfyDeploy({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
