# InputsDefinition

## Example Usage

```typescript
import { InputsDefinition } from "comfydeploy/models/operations";

let value: InputsDefinition = {
  classType: "ComfyUIDeployExternalImageAlpha",
  inputId: "<id>",
  defaultValue: "<value>",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `classType`                                                                            | [operations.GetDeploymentClassType](../../models/operations/getdeploymentclasstype.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `inputId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `defaultValue`                                                                         | *operations.GetDeploymentDefaultValue*                                                 | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `minValue`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `maxValue`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `displayName`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `enumValues`                                                                           | *string*[]                                                                             | :heavy_minus_sign:                                                                     | N/A                                                                                    |