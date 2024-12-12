# WorkflowRunVersionRequest

## Example Usage

```typescript
import { WorkflowRunVersionRequest } from "comfydeploy/models/components";

let value: WorkflowRunVersionRequest = {
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
  webhookIntermediateStatus: true,
  workflowVersionId: "692275fc-be18-49f4-b310-eac4917fe5f3",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `inputs`                                                                                           | Record<string, *components.WorkflowRunVersionRequestInputs*>                                       | :heavy_minus_sign:                                                                                 | The inputs to the workflow                                                                         | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                                      |
| `webhook`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
| `webhookIntermediateStatus`                                                                        | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                | true                                                                                               |
| `gpu`                                                                                              | [components.WorkflowRunVersionRequestGpu](../../models/components/workflowrunversionrequestgpu.md) | :heavy_minus_sign:                                                                                 | The GPU to override the machine's default GPU                                                      |                                                                                                    |
| `workflowVersionId`                                                                                | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |
| `machineId`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |