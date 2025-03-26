# ModelWithMetadata

## Example Usage

```typescript
import { ModelWithMetadata } from "comfydeploy/models/components";

let value: ModelWithMetadata = {
  id: "<id>",
  name: "<value>",
  inputs: [
    {
      inputId: "<id>",
      classType: "ComfyUIDeployExternalImageAlpha",
      required: false,
    },
  ],
  outputs: [
    {
      classType: "ComfyDeployStdOutputImage",
      outputId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `isComfyui`                                                        | *boolean*                                                          | :heavy_minus_sign:                                                 | N/A                                                                |
| `previewImage`                                                     | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `inputs`                                                           | [components.ModelInput](../../models/components/modelinput.md)[]   | :heavy_check_mark:                                                 | N/A                                                                |
| `outputs`                                                          | [components.ModelOutput](../../models/components/modeloutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `tags`                                                             | *string*[]                                                         | :heavy_minus_sign:                                                 | N/A                                                                |
| `falId`                                                            | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `costPerMegapixel`                                                 | *number*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |