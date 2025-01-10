# GPUEventModel

## Example Usage

```typescript
import { GPUEventModel } from "comfydeploy/models/components";

let value: GPUEventModel = {
  id: "1dffec51-6320-4b0c-a211-a368db420447",
  userId: "<id>",
  orgId: "<id>",
  machineId: "b462c0bc-c459-4453-870c-1849fa0688a4",
  startTime: new Date("2024-03-06T08:56:27.585Z"),
  endTime: new Date("2025-11-14T05:17:46.077Z"),
  gpu: "T4",
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