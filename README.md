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

Comfy Deploy API: Interact with Comfy Deploy programmatically to trigger run and retrieve output
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add comfydeploy
```

### PNPM

```bash
pnpm add comfydeploy
```

### Bun

```bash
bun add comfydeploy
```

### Yarn

```bash
yarn add comfydeploy zod

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
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
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


### [comfyui](docs/sdks/comfyui/README.md)

* [getAuthResponseRequestId](docs/sdks/comfyui/README.md#getauthresponserequestid) - Get an API Key with code
* [postWorkflow](docs/sdks/comfyui/README.md#postworkflow) - Upload workflow from ComfyUI
* [getWorkflowVersionVersionId](docs/sdks/comfyui/README.md#getworkflowversionversionid) - Get comfyui workflow
* [getWorkflowId](docs/sdks/comfyui/README.md#getworkflowid) - Get comfyui workflow

### [deployment](docs/sdks/deployment/README.md)

* [getInputDefinition](docs/sdks/deployment/README.md#getinputdefinition) - Get comfyui workflow inputs definition
* [get](docs/sdks/deployment/README.md#get) - Get all deployed workflows

### [files](docs/sdks/files/README.md)

* [getUploadUrl](docs/sdks/files/README.md#getuploadurl) - Upload any files to the storage

### [machine](docs/sdks/machine/README.md)

* [postGpuEvent](docs/sdks/machine/README.md#postgpuevent) - Register a machine event
* [listEvents](docs/sdks/machine/README.md#listevents) - Get recent gpu events
* [postV1Machines](docs/sdks/machine/README.md#postv1machines) - Create a new machine
* [getV1Machines](docs/sdks/machine/README.md#getv1machines) - Retrieve all machines for a user
* [getV1MachinesMachineId](docs/sdks/machine/README.md#getv1machinesmachineid) - Retrieve a specific machine by ID

### [run](docs/sdks/run/README.md)

* [create](docs/sdks/run/README.md#create) - Run a workflow via deployment_id
* [get](docs/sdks/run/README.md#get) - Get workflow run output

### [websocket](docs/sdks/websocket/README.md)

* [get](docs/sdks/websocket/README.md#get) - Get a websocket url for a specific deployment

### [workflows](docs/sdks/workflows/README.md)

* [postMachineEndpoint](docs/sdks/workflows/README.md#postmachineendpoint) - Create an endpoint for a machine
* [create](docs/sdks/workflows/README.md#create) - Create a new workflow
* [getAll](docs/sdks/workflows/README.md#getall) - Retrieve workflows
* [get](docs/sdks/workflows/README.md#get) - Retrieve a specific workflow by ID
* [getOutputs](docs/sdks/workflows/README.md#getoutputs) - Retrieve the most recent outputs for a workflow

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
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
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. By default, an API error will throw a `errors.SDKError`.

If a HTTP request fails, an operation my also throw an error from the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |

In addition, when custom error responses are specified for an operation, the SDK may throw their associated Error type. You can refer to respective *Errors* tables in SDK docs for more details on possible error types for each operation. For example, the `create` method may throw the following errors:

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.PostRunResponseBody | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

```typescript
import { ComfyDeploy } from "comfydeploy";
import {
  PostRunResponseBody,
  SDKValidationError,
} from "comfydeploy/models/errors";

const comfyDeploy = new ComfyDeploy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  let result;
  try {
    result = await comfyDeploy.run.create({
      deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
      workflowApi: {},
      workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
      inputs: {
        "input_text": "value1",
        "input_url": "https://example.png",
      },
      webhook: "https://example.com/webhook",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      case (err instanceof SDKValidationError): {
        // Validation errors can be pretty-printed
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof PostRunResponseBody): {
        // Handle err.data$: PostRunResponseBodyData
        console.error(err);
        return;
      }
      default: {
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://www.comfydeploy.com/api` | None |

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  serverIdx: 0,
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
  });

  // Handle the result
  console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  serverURL: "https://www.comfydeploy.com/api",
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
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

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
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

- [comfyuiGetAuthResponseRequestId](docs/sdks/comfyui/README.md#getauthresponserequestid)
- [comfyuiGetWorkflowId](docs/sdks/comfyui/README.md#getworkflowid)
- [comfyuiGetWorkflowVersionVersionId](docs/sdks/comfyui/README.md#getworkflowversionversionid)
- [comfyuiPostWorkflow](docs/sdks/comfyui/README.md#postworkflow)
- [deploymentGetInputDefinition](docs/sdks/deployment/README.md#getinputdefinition)
- [deploymentGet](docs/sdks/deployment/README.md#get)
- [filesGetUploadUrl](docs/sdks/files/README.md#getuploadurl)
- [machineGetV1MachinesMachineId](docs/sdks/machine/README.md#getv1machinesmachineid)
- [machineGetV1Machines](docs/sdks/machine/README.md#getv1machines)
- [machineListEvents](docs/sdks/machine/README.md#listevents)
- [machinePostGpuEvent](docs/sdks/machine/README.md#postgpuevent)
- [machinePostV1Machines](docs/sdks/machine/README.md#postv1machines)
- [runCreate](docs/sdks/run/README.md#create)
- [runGet](docs/sdks/run/README.md#get)
- [websocketGet](docs/sdks/websocket/README.md#get)
- [workflowsCreate](docs/sdks/workflows/README.md#create)
- [workflowsGetAll](docs/sdks/workflows/README.md#getall)
- [workflowsGetOutputs](docs/sdks/workflows/README.md#getoutputs)
- [workflowsGet](docs/sdks/workflows/README.md#get)
- [workflowsPostMachineEndpoint](docs/sdks/workflows/README.md#postmachineendpoint)


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
