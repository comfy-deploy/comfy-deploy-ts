# WorkflowRunRequest

## Example Usage

```typescript
import { WorkflowRunRequest } from "comfydeploy/models/components";

let value: WorkflowRunRequest = {
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

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `executionMode`                                                                                          | [components.WorkflowRunRequestExecutionMode](../../models/components/workflowrunrequestexecutionmode.md) | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | async                                                                                                    |
| `inputs`                                                                                                 | [components.WorkflowRunRequestInputs](../../models/components/workflowrunrequestinputs.md)               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                                            |
| `webhook`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | https://example.com/webhook                                                                              |
| `webhookIntermediateStatus`                                                                              | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | true                                                                                                     |
| `origin`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | manual                                                                                                   |
| `batchNumber`                                                                                            | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | 5                                                                                                        |
| `batchInputParams`                                                                                       | Record<string, *any*[]>                                                                                  | :heavy_minus_sign:                                                                                       | Optional dictionary of batch input parameters. Keys are input names, values are lists of inputs.         | {<br/>"input_number": [<br/>1,<br/>2,<br/>3<br/>],<br/>"input_text": [<br/>"apple",<br/>"banana",<br/>"cherry"<br/>]<br/>} |
| `isNativeRun`                                                                                            | *boolean*                                                                                                | :heavy_minus_sign:                                                                                       | N/A                                                                                                      | true                                                                                                     |
| `workflowId`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `workflowApiJson`                                                                                        | [components.WorkflowApiJson](../../models/components/workflowapijson.md)                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `workflow`                                                                                               | [components.Workflow](../../models/components/workflow.md)                                               | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |
| `machineId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |