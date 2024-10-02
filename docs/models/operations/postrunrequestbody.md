# PostRunRequestBody

Run options

## Example Usage

```typescript
import { PostRunRequestBody } from "comfydeploy/models/operations";

let value: PostRunRequestBody = {
  workflowApi: {},
  workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
  inputs: {
    "input_text": "value1",
    "input_url": "https://example.png",
  },
  webhook: "https://example.com/webhook",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `deploymentId`                                               | *string*                                                     | :heavy_minus_sign:                                           | Deployment ID to run                                         |
| `workflowApi`                                                | *any*                                                        | :heavy_minus_sign:                                           | Workflow API JSON to run                                     |
| `workflowApiJson`                                            | *string*                                                     | :heavy_minus_sign:                                           | Workflow API JSON to run                                     |
| `workflowId`                                                 | *string*                                                     | :heavy_minus_sign:                                           | Workflow ID to run                                           |
| `machineId`                                                  | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `gpu`                                                        | [operations.Gpu](../../models/operations/gpu.md)             | :heavy_minus_sign:                                           | N/A                                                          |
| `concurrencyLimit`                                           | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `privateVolumeName`                                          | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `timeout`                                                    | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `runOrigin`                                                  | [operations.RunOrigin](../../models/operations/runorigin.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `inputs`                                                     | Record<string, *operations.Inputs*>                          | :heavy_minus_sign:                                           | External inputs to the workflow                              |
| `inputsJson`                                                 | *string*                                                     | :heavy_minus_sign:                                           | External inputs to the workflow in JSON format               |
| `webhook`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Webhook URL to receive workflow updates                      |
| `webhookIntermediateStatus`                                  | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to send webhook on intermediate status               |
| `stream`                                                     | *boolean*                                                    | :heavy_minus_sign:                                           | Whether to return a streaming url                            |
| `batchNumber`                                                | *number*                                                     | :heavy_minus_sign:                                           | Batch number to run                                          |