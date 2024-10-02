# PostV1MachinesResponseBody

Machine created successfully

## Example Usage

```typescript
import { PostV1MachinesResponseBody } from "comfydeploy/models/operations";

let value: PostV1MachinesResponseBody = {
  id: "8684b65d-e035-4dff-8e4f-31f3b0be465b",
  userId: "<id>",
  name: "<value>",
  orgId: "<id>",
  endpoint: "<value>",
  createdAt: "<value>",
  updatedAt: "<value>",
  disabled: false,
  type: "comfy-deploy-serverless",
  status: "building",
  machineVersion: "<value>",
  machineBuilderVersion: "<value>",
  models: [
    "<value>",
  ],
  gpu: "A10G",
  podId: "<id>",
  baseDockerImage: "<value>",
  allowConcurrentInputs: 1718.53,
  concurrencyLimit: 4492.92,
  legacyMode: false,
  wsTimeout: 3044.68,
  runTimeout: 8391.89,
  idleTimeout: 2377.42,
  buildMachineInstanceId: "<id>",
  buildLog: "<value>",
  modalAppId: "<id>",
  targetWorkflowId: "8fadfcbf-f714-4262-996e-f849e6847638",
  installCustomNodeWithGpu: false,
  deleted: false,
  keepWarm: 3730.35,
  allowBackgroundVolumeCommits: false,
  gpuWorkspace: false,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `userId`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `orgId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `endpoint`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `createdAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `updatedAt`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `disabled`                                                                         | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `type`                                                                             | [operations.PostV1MachinesType](../../models/operations/postv1machinestype.md)     | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [operations.PostV1MachinesStatus](../../models/operations/postv1machinesstatus.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `machineVersion`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `machineBuilderVersion`                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `snapshot`                                                                         | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `models`                                                                           | *any*[]                                                                            | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gpu`                                                                              | [operations.PostV1MachinesGpu](../../models/operations/postv1machinesgpu.md)       | :heavy_check_mark:                                                                 | N/A                                                                                |
| `wsGpu`                                                                            | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `podId`                                                                            | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `baseDockerImage`                                                                  | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `allowConcurrentInputs`                                                            | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `concurrencyLimit`                                                                 | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `legacyMode`                                                                       | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `wsTimeout`                                                                        | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `runTimeout`                                                                       | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `idleTimeout`                                                                      | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `buildMachineInstanceId`                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `buildLog`                                                                         | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `modalAppId`                                                                       | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `objectInfo`                                                                       | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `targetWorkflowId`                                                                 | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `dependencies`                                                                     | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `extraDockerCommands`                                                              | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `installCustomNodeWithGpu`                                                         | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `deleted`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `keepWarm`                                                                         | *number*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `allowBackgroundVolumeCommits`                                                     | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `gpuWorkspace`                                                                     | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                |
| `dockerCommandSteps`                                                               | *any*                                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |