# CreateRunQueueRunQueuePostData


## Supported Types

### `components.WorkflowRunVersionRequest`

```typescript
const value: components.WorkflowRunVersionRequest = {
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
  webhookIntermediateStatus: true,
  workflowVersionId: "50b19baf-1d08-4685-a308-d531131411d2",
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
  webhookIntermediateStatus: true,
  modelId: "<id>",
};
```

