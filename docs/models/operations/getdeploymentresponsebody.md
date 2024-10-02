# GetDeploymentResponseBody

## Example Usage

```typescript
import { GetDeploymentResponseBody } from "comfydeploy/models/operations";

let value: GetDeploymentResponseBody = {
  deploymentId: "<id>",
  name: "<value>",
  inputsDefinition: [
    {
      classType: "ComfyUIDeployExternalNumberInt",
      inputId: "<id>",
      defaultValue: 1871.31,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `deploymentId`                                                               | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `inputsDefinition`                                                           | [operations.InputsDefinition](../../models/operations/inputsdefinition.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |