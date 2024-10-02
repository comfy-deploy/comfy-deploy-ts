# Run
(*run*)

## Overview

### Available Operations

* [create](#create) - Run a workflow via deployment_id
* [get](#get) - Get workflow run output

## create

Run a workflow via deployment_id

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {

    },
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

### Standalone function

The standalone function version of this method:

```typescript
import { ComfyDeployCore } from "comfydeploy/core.js";
import { runCreate } from "comfydeploy/funcs/runCreate.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runCreate(comfyDeploy, {
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {
  
    },
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostRunRequestBody](../../models/operations/postrunrequestbody.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostRunResponseBody](../../models/operations/postrunresponsebody.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.PostRunResponseBody | 500                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Call this to get a run's output, usually in conjunction with polling method

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
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

### Standalone function

The standalone function version of this method:

```typescript
import { ComfyDeployCore } from "comfydeploy/core.js";
import { runGet } from "comfydeploy/funcs/runGet.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runGet(comfyDeploy, {
    runId: "<id>",
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRunRequest](../../models/operations/getrunrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetRunResponseBody](../../models/operations/getrunresponsebody.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.GetRunResponseBody    | 400                          | application/json             |
| errors.GetRunRunResponseBody | 500                          | application/json             |
| errors.SDKError              | 4XX, 5XX                     | \*/\*                        |