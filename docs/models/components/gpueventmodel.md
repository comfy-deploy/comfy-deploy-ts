# GPUEventModel

## Example Usage

```typescript
import { GPUEventModel } from "comfydeploy/models/components";

let value: GPUEventModel = {
  id: "61434201-9ff6-42a7-bf1c-43a3a8684b65",
  userId: "<id>",
  orgId: "<id>",
  machineId: "e035dffe-4f31-4f3b-a0be-465b3274d38f",
  startTime: new Date("2024-08-08T13:10:49.877Z"),
  endTime: new Date("2024-10-27T11:16:32.408Z"),
  gpu: "A100-80GB",
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
| `gpu`                                                                                         | [components.MachineGPU](../../models/components/machinegpu.md)                                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `wsGpu`                                                                                       | [components.WorkspaceGPU](../../models/components/workspacegpu.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `gpuProvider`                                                                                 | [components.GPUProviderType](../../models/components/gpuprovidertype.md)                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sessionTimeout`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sessionId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `modalFunctionId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `tunnelUrl`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |