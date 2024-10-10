# DeploymentRunRequest

## Example Usage

```typescript
import { DeploymentRunRequest } from "comfydeploy/models/components";

let value: DeploymentRunRequest = {
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
  deploymentId: "c4917fe5-f3ff-4cad-84d9-052f77a52d38",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `executionMode`                                                                                              | [components.DeploymentRunRequestExecutionMode](../../models/components/deploymentrunrequestexecutionmode.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | async                                                                                                        |
| `inputs`                                                                                                     | Record<string, *components.DeploymentRunRequestInputs*>                                                      | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                                                |
| `webhook`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | https://example.com/webhook                                                                                  |
| `webhookIntermediateStatus`                                                                                  | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | true                                                                                                         |
| `origin`                                                                                                     | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | manual                                                                                                       |
| `batchNumber`                                                                                                | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | 5                                                                                                            |
| `batchInputParams`                                                                                           | Record<string, *any*[]>                                                                                      | :heavy_minus_sign:                                                                                           | Optional dictionary of batch input parameters. Keys are input names, values are lists of inputs.             | {<br/>"input_number": [<br/>1,<br/>2,<br/>3<br/>],<br/>"input_text": [<br/>"apple",<br/>"banana",<br/>"cherry"<br/>]<br/>} |
| `isNativeRun`                                                                                                | *boolean*                                                                                                    | :heavy_minus_sign:                                                                                           | N/A                                                                                                          | true                                                                                                         |
| `deploymentId`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |                                                                                                              |