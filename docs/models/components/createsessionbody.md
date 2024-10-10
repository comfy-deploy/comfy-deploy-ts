# CreateSessionBody

## Example Usage

```typescript
import { CreateSessionBody } from "comfydeploy/models/components";

let value: CreateSessionBody = {
  machineId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `machineId`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `gpu`                                                          | [components.MachineGPU](../../models/components/machinegpu.md) | :heavy_minus_sign:                                             | The GPU to use                                                 |
| `timeout`                                                      | *number*                                                       | :heavy_minus_sign:                                             | The timeout in minutes                                         |
| `waitForServer`                                                | *boolean*                                                      | :heavy_minus_sign:                                             | Whether to create the session asynchronously                   |