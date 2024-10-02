# GetMachineMachineIdEventsResponseBody

## Example Usage

```typescript
import { GetMachineMachineIdEventsResponseBody } from "comfydeploy/models/operations";

let value: GetMachineMachineIdEventsResponseBody = {
  id: "b5ca32cf-79d7-4f9d-9ed2-a6164d0f5502",
  userId: "<id>",
  orgId: "<id>",
  machineId: "e1fd7539-0061-4434-a201-9ff62a7f1c43",
  startTime: "<value>",
  endTime: "<value>",
  gpu: "L4",
  wsGpu: "4090",
  providerType: "runpod",
  createdAt: "<value>",
  updatedAt: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `userId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `orgId`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `machineId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `startTime`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `endTime`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `gpu`                                                                                              | [operations.GetMachineMachineIdEventsGpu](../../models/operations/getmachinemachineideventsgpu.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `wsGpu`                                                                                            | [operations.WsGpu](../../models/operations/wsgpu.md)                                               | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `providerType`                                                                                     | [operations.ProviderType](../../models/operations/providertype.md)                                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |