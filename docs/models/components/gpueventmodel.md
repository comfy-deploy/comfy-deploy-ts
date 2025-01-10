# GPUEventModel

## Example Usage

```typescript
import { GPUEventModel } from "comfydeploy/models/components";

let value: GPUEventModel = {
  id: "462c0bcc-4594-4537-90c1-849fa0688a42",
  userId: "<id>",
  orgId: "<id>",
  machineId: "f2e87e7b-6ebb-45ca-932c-f79d7f9ded2a",
  startTime: new Date("2023-03-10T17:36:05.364Z"),
  endTime: new Date("2024-04-09T17:44:39.673Z"),
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