# DepsBody

## Example Usage

```typescript
import { DepsBody } from "comfydeploy/models/components";

let value: DepsBody = {
  dockerCommandSteps: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `dockerCommandSteps`                                                     | *any*                                                                    | :heavy_check_mark:                                                       | N/A                                                                      |
| `dependencies`                                                           | [components.DependencyGraph](../../models/components/dependencygraph.md) | :heavy_minus_sign:                                                       | N/A                                                                      |
| `snapshot`                                                               | [components.Snapshot](../../models/components/snapshot.md)               | :heavy_minus_sign:                                                       | N/A                                                                      |
| `comfyuiVersion`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `extraDockerCommands`                                                    | Record<string, *string*>[]                                               | :heavy_minus_sign:                                                       | N/A                                                                      |