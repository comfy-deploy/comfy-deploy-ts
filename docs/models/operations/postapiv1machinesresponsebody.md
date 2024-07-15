# PostApiV1MachinesResponseBody

Machine created successfully


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `userId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `orgId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `endpoint`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `createdAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `updatedAt`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `disabled`                                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `type`                                                                                   | [operations.PostApiV1MachinesType](../../models/operations/postapiv1machinestype.md)     | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [operations.PostApiV1MachinesStatus](../../models/operations/postapiv1machinesstatus.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `machineVersion`                                                                         | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `machineBuilderVersion`                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `snapshot`                                                                               | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `models`                                                                                 | *any*[]                                                                                  | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `gpu`                                                                                    | [operations.PostApiV1MachinesGpu](../../models/operations/postapiv1machinesgpu.md)       | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `wsGpu`                                                                                  | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `podId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `baseDockerImage`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `allowConcurrentInputs`                                                                  | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `concurrencyLimit`                                                                       | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `legacyMode`                                                                             | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `wsTimeout`                                                                              | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `runTimeout`                                                                             | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `idleTimeout`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `buildMachineInstanceId`                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `buildLog`                                                                               | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `modalAppId`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `objectInfo`                                                                             | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `targetWorkflowId`                                                                       | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `dependencies`                                                                           | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `extraDockerCommands`                                                                    | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `installCustomNodeWithGpu`                                                               | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `deleted`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `keepWarm`                                                                               | *number*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `allowBackgroundVolumeCommits`                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `gpuWorkspace`                                                                           | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `dockerCommandSteps`                                                                     | *any*                                                                                    | :heavy_minus_sign:                                                                       | N/A                                                                                      |