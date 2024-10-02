# GetMachineMachineIdEventsRequest

## Example Usage

```typescript
import { GetMachineMachineIdEventsRequest } from "comfydeploy/models/operations";

let value: GetMachineMachineIdEventsRequest = {
  machineId: "<id>",
  status: "running",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `machineId`                                            | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_check_mark:                                     | N/A                                                    |
| `limit`                                                | *number*                                               | :heavy_minus_sign:                                     | N/A                                                    |