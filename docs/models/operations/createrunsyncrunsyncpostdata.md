# CreateRunSyncRunSyncPostData


## Supported Types

### `components.WorkflowRunVersionRequest`

```typescript
const value: components.WorkflowRunVersionRequest = {
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
  workflowVersionId: "391fe634-70a6-46cb-8f5e-c594d1326b87",
};
```

### `components.WorkflowRunRequest`

```typescript
const value: components.WorkflowRunRequest = {
  inputs: {
    "num_inference_steps": 30,
    "prompt": "A futuristic cityscape",
    "seed": 123456,
  },
  webhook: "https://myapp.com/webhook",
  workflowId: "12345678-1234-5678-1234-567812345678",
  workflowApiJson: {},
};
```

### `components.DeploymentRunRequest`

```typescript
const value: components.DeploymentRunRequest = {
  inputs: {
    "num_inference_steps": 30,
    "prompt": "A futuristic cityscape",
    "seed": 123456,
  },
  webhook: "https://myapp.com/webhook",
  deploymentId: "12345678-1234-5678-1234-567812345678",
};
```

### `components.ModelRunRequest`

```typescript
const value: components.ModelRunRequest = {
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
  modelId: "<id>",
};
```

