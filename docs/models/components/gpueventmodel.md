# GPUEventModel

## Example Usage

```typescript
import { GPUEventModel } from "comfydeploy/models/components";

let value: GPUEventModel = {
  id: "831dffec-5163-420b-90c2-11a368db4204",
  userId: "<id>",
  orgId: "<id>",
  machineId: "7ab462c0-bcc4-4594-a537-0c1849fa0688",
  startTime: new Date("2022-11-01T05:53:15.917Z"),
  endTime: new Date("2022-05-22T05:32:53.930Z"),
  gpu: "L4",
  gpuProvider: "comfy-deploy",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `machineId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startTime`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endTime`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `gpu`                                                                                         | [components.MachineGPUOutput](../../models/components/machinegpuoutput.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `wsGpu`                                                                                       | [components.WorkspaceGPU](../../models/components/workspacegpu.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `gpuProvider`                                                                                 | [components.GPUProviderType](../../models/components/gpuprovidertype.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sessionTimeout`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `modalFunctionId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tunnelUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `costItemTitle`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cost`                                                                                        | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |