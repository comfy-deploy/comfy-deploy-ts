# CreateRunSyncRunSyncPostData


## Supported Types

### `components.WorkflowRunVersionRequest`

```typescript
const value: components.WorkflowRunVersionRequest = {
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
  workflowVersionId: "b521368c-f119-4bde-8f66-2aad17932d07",
};
```

### `components.WorkflowRunRequest`

```typescript
const value: components.WorkflowRunRequest = {
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
};
```

### `components.DeploymentRunRequest`

```typescript
const value: components.DeploymentRunRequest = {
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
  deploymentId: "7f6d1466-a5ba-4669-b1da-b816650b19ba",
};
```

