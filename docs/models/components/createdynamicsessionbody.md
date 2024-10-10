# CreateDynamicSessionBody

## Example Usage

```typescript
import { CreateDynamicSessionBody } from "comfydeploy/models/components";

let value: CreateDynamicSessionBody = {
  machineId: "<id>",
  dependencies: [
    "Stability-AI/ComfyUI-SAI_API@1793086",
    "cubiq/ComfyUI_IPAdapter_plus@b188a6c",
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `machineId`                                                                        | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `gpu`                                                                              | [components.MachineGPU](../../models/components/machinegpu.md)                     | :heavy_minus_sign:                                                                 | The GPU to use                                                                     |                                                                                    |
| `timeout`                                                                          | *number*                                                                           | :heavy_minus_sign:                                                                 | The timeout in minutes                                                             |                                                                                    |
| `dependencies`                                                                     | *components.Dependencies*                                                          | :heavy_minus_sign:                                                                 | The dependencies to use, either as a DepsBody or a list of shorthand strings       | [<br/>"Stability-AI/ComfyUI-SAI_API@1793086",<br/>"cubiq/ComfyUI_IPAdapter_plus@b188a6c"<br/>] |
| `waitForServer`                                                                    | *boolean*                                                                          | :heavy_minus_sign:                                                                 | Whether to create the session asynchronously                                       |                                                                                    |