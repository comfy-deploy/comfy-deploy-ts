# DeploymentUpdate

## Example Usage

```typescript
import { DeploymentUpdate } from "comfydeploy/models/components";

let value: DeploymentUpdate = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `workflowVersionId`                                      | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `machineId`                                              | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `machineVersionId`                                       | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `concurrencyLimit`                                       | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `gpu`                                                    | [components.GPUType](../../models/components/gputype.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `runTimeout`                                             | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `idleTimeout`                                            | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `keepWarm`                                               | *number*                                                 | :heavy_minus_sign:                                       | N/A                                                      |