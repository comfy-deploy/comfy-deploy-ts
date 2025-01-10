# WorkflowRunModel

## Example Usage

```typescript
import { WorkflowRunModel } from "comfydeploy/models/components";

let value: WorkflowRunModel = {
  id: "8b986a7e-f6c8-49e1-910d-cdfc7c1a2f86",
  workflowVersionId: "c790999f-a56b-40aa-8325-597f132a4732",
  workflowInputs: "<value>",
  workflowId: "a235d1d1-f7f9-4b04-8141-561b94819e5a",
  workflowApi: "<value>",
  machineId: "b4290d0a-4bf3-4999-a3f7-db4d6e9ebb8f",
  origin: "<value>",
  status: "<value>",
  createdAt: new Date("2024-04-09T13:04:59.510Z"),
  updatedAt: new Date("2024-10-26T14:34:01.576Z"),
  gpuEventId: "<id>",
  gpu: "<value>",
  machineVersion: "<value>",
  machineType: "<value>",
  modalFunctionCallId: "<id>",
  userId: "<id>",
  orgId: "<id>",
  liveStatus: "<value>",
  webhook: "<value>",
  webhookStatus: "<value>",
  number: 19193,
  duration: 3015.75,
  coldStartDuration: 6601.74,
  coldStartDurationTotal: 2900.78,
  runDuration: 6180.15,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowVersionId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowInputs`                                                                              | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowApi`                                                                                 | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `machineId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `origin`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `queuedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `gpuEventId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `gpu`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `machineVersion`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `machineType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modalFunctionCallId`                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `liveStatus`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `progress`                                                                                    | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `isRealtime`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `webhook`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `webhookStatus`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `webhookIntermediateStatus`                                                                   | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputs`                                                                                     | [components.WorkflowRunOutputModel](../../models/components/workflowrunoutputmodel.md)[]      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `duration`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `coldStartDuration`                                                                           | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `coldStartDurationTotal`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runDuration`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |