# WorkflowRunRequest

## Example Usage

```typescript
import { WorkflowRunRequest } from "comfydeploy/models/components";

let value: WorkflowRunRequest = {
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

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `inputs`                                                                             | Record<string, *components.WorkflowRunRequestInputs*>                                | :heavy_minus_sign:                                                                   | The inputs to the workflow                                                           | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                        |
| `webhook`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `webhookIntermediateStatus`                                                          | *boolean*                                                                            | :heavy_minus_sign:                                                                   | N/A                                                                                  | true                                                                                 |
| `gpu`                                                                                | [components.WorkflowRunRequestGpu](../../models/components/workflowrunrequestgpu.md) | :heavy_minus_sign:                                                                   | The GPU to override the machine's default GPU                                        |                                                                                      |
| `workflowId`                                                                         | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `workflowApiJson`                                                                    | [components.WorkflowApiJson](../../models/components/workflowapijson.md)             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `workflow`                                                                           | [components.Workflow](../../models/components/workflow.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `machineId`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |