# Run
(*run*)

## Overview

### Available Operations

* [getRunRunRunIdGet](#getrunrunrunidget) - Get Run
* [queue](#queue) - Queue a workflow
* [sync](#sync) - Run a workflow in sync
* [stream](#stream) - Run a workflow in stream

## getRunRunRunIdGet

Get Run

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.getRunRunRunIdGet({
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
import { runGetRunRunRunIdGet } from "comfydeploy/funcs/runGetRunRunRunIdGet.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runGetRunRunRunIdGet(comfyDeploy, {
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
| `request`                                                                                                                                                                      | [operations.GetRunRunRunIdGetRequest](../../models/operations/getrunrunrunidgetrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.WorkflowRunModel](../../models/components/workflowrunmodel.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## queue

Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.queue({
    executionMode: "async",
    inputs: {},
    webhook: "https://example.com/webhook",
    webhookIntermediateStatus: true,
    origin: "manual",
    batchNumber: 5,
    batchInputParams: {
      "input_number": [
        1,
        2,
        3,
      ],
      "input_text": [
        "apple",
        "banana",
        "cherry",
      ],
    },
    isNativeRun: true,
    workflowVersionId: "3ec31b24-d0d3-4298-9ffa-c74003017b70",
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
import { runQueue } from "comfydeploy/funcs/runQueue.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runQueue(comfyDeploy, {
    executionMode: "async",
    inputs: {},
    webhook: "https://example.com/webhook",
    webhookIntermediateStatus: true,
    origin: "manual",
    batchNumber: 5,
    batchInputParams: {
      "input_number": [
        1,
        2,
        3,
      ],
      "input_text": [
        "apple",
        "banana",
        "cherry",
      ],
    },
    isNativeRun: true,
    workflowVersionId: "41c76928-a496-4990-bd93-9d3bc0f64bb4",
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
| `request`                                                                                                                                                                      | [operations.CreateRunQueueRunQueuePostData](../../models/operations/createrunqueuerunqueuepostdata.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## sync

Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.sync({
    executionMode: "async",
    inputs: {},
    webhook: "https://example.com/webhook",
    webhookIntermediateStatus: true,
    origin: "manual",
    batchNumber: 5,
    batchInputParams: {
      "input_number": [
        1,
        2,
        3,
      ],
      "input_text": [
        "apple",
        "banana",
        "cherry",
      ],
    },
    isNativeRun: true,
    deploymentId: "0897be30-8085-4c96-83b5-09c0142ddd3a",
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
import { runSync } from "comfydeploy/funcs/runSync.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runSync(comfyDeploy, {
    executionMode: "async",
    inputs: {},
    webhook: "https://example.com/webhook",
    webhookIntermediateStatus: true,
    origin: "manual",
    batchNumber: 5,
    batchInputParams: {
      "input_number": [
        1,
        2,
        3,
      ],
      "input_text": [
        "apple",
        "banana",
        "cherry",
      ],
    },
    isNativeRun: true,
    workflowVersionId: "537c27c7-7e5f-43db-92d5-1ced44fce80d",
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
| `request`                                                                                                                                                                      | [operations.CreateRunSyncRunSyncPostData](../../models/operations/createrunsyncrunsyncpostdata.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiRoutesTypesWorkflowRunOutputModel2[]](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## stream

Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).

### Example Usage

```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.stream({
    executionMode: "async",
    inputs: {},
    webhook: "https://example.com/webhook",
    webhookIntermediateStatus: true,
    origin: "manual",
    batchNumber: 5,
    batchInputParams: {
      "input_number": [
        1,
        2,
        3,
      ],
      "input_text": [
        "apple",
        "banana",
        "cherry",
      ],
    },
    isNativeRun: true,
    deploymentId: "41f69f97-08c7-43e9-a00c-844065577d45",
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
import { runStream } from "comfydeploy/funcs/runStream.js";

// Use `ComfyDeployCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const comfyDeploy = new ComfyDeployCore({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const res = await runStream(comfyDeploy, {
    executionMode: "async",
    inputs: {},
    webhook: "https://myapp.com/webhook",
    webhookIntermediateStatus: true,
    origin: "manual",
    batchNumber: 5,
    batchInputParams: {
      "input_number": [
        1,
        2,
        3,
      ],
      "input_text": [
        "apple",
        "banana",
        "cherry",
      ],
    },
    isNativeRun: true,
    workflowId: "12345678-1234-5678-1234-567812345678",
    workflowApiJson: {},
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

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateRunStreamRunStreamPostData](../../models/operations/createrunstreamrunstreampostdata.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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