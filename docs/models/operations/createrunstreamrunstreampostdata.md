# CreateRunStreamRunStreamPostData


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
  workflowVersionId: "0f1d955c-5a87-4e8d-8b0c-3e0517d425d2",
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
  deploymentId: "1b64b5bd-3f24-4257-b8de-3917557b1eb2",
};
```

