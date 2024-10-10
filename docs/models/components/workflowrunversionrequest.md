# WorkflowRunVersionRequest

## Example Usage

```typescript
import { WorkflowRunVersionRequest } from "comfydeploy/models/components";

let value: WorkflowRunVersionRequest = {
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
  workflowVersionId: "43803657-49d1-482b-8692-275fcbe189f4",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      | Example                                                                                          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `executionMode`                                                                                  | [components.ExecutionMode](../../models/components/executionmode.md)                             | :heavy_minus_sign:                                                                               | N/A                                                                                              | async                                                                                            |
| `inputs`                                                                                         | Record<string, *components.Inputs*>                                                              | :heavy_minus_sign:                                                                               | N/A                                                                                              | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                                    |
| `webhook`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | https://example.com/webhook                                                                      |
| `webhookIntermediateStatus`                                                                      | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              | true                                                                                             |
| `origin`                                                                                         | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | manual                                                                                           |
| `batchNumber`                                                                                    | *number*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              | 5                                                                                                |
| `batchInputParams`                                                                               | Record<string, *any*[]>                                                                          | :heavy_minus_sign:                                                                               | Optional dictionary of batch input parameters. Keys are input names, values are lists of inputs. | {<br/>"input_number": [<br/>1,<br/>2,<br/>3<br/>],<br/>"input_text": [<br/>"apple",<br/>"banana",<br/>"cherry"<br/>]<br/>} |
| `isNativeRun`                                                                                    | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              | true                                                                                             |
| `workflowVersionId`                                                                              | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |                                                                                                  |
| `machineId`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |                                                                                                  |