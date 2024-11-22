# CreateRunSyncRunSyncPostData


## Supported Types

### `components.WorkflowRunVersionRequest`

```typescript
const value: components.WorkflowRunVersionRequest = {
  executionMode: "async",
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
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
  gpuEventId: "123e4567-e89b-12d3-a456-426614174000",
  workflowVersionId: "35d775ef-f6fc-4a33-92e4-77cd26dd1241",
};
```

### `components.WorkflowRunRequest`

```typescript
const value: components.WorkflowRunRequest = {
  executionMode: "async",
  inputs: {
    "num_inference_steps": 30,
    "prompt": "A futuristic cityscape",
    "seed": 123456,
  },
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
  gpuEventId: "123e4567-e89b-12d3-a456-426614174000",
  workflowId: "12345678-1234-5678-1234-567812345678",
  workflowApiJson: {},
};
```

### `components.DeploymentRunRequest`

```typescript
const value: components.DeploymentRunRequest = {
  executionMode: "async",
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
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
  gpuEventId: "123e4567-e89b-12d3-a456-426614174000",
  deploymentId: "19391fe6-3470-4a66-acbf-5ec594d1326b",
};
```

### `components.ModelRunRequest`

```typescript
const value: components.ModelRunRequest = {
  executionMode: "async",
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
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
  gpuEventId: "123e4567-e89b-12d3-a456-426614174000",
  modelId: "<id>",
};
```

