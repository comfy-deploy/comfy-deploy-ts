# ModelInput

## Example Usage

```typescript
import { ModelInput } from "comfydeploy/models/components";

let value: ModelInput = {
  inputId: "<id>",
  classType: "ComfyUIDeployExternalBoolean",
  required: false,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `inputId`              | *string*               | :heavy_check_mark:     | N/A                    |
| `classType`            | *components.ClassType* | :heavy_check_mark:     | N/A                    |
| `required`             | *boolean*              | :heavy_check_mark:     | N/A                    |
| `defaultValue`         | *any*                  | :heavy_minus_sign:     | N/A                    |
| `minValue`             | *any*                  | :heavy_minus_sign:     | N/A                    |
| `maxValue`             | *any*                  | :heavy_minus_sign:     | N/A                    |
| `displayName`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `description`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `enumValues`           | *string*[]             | :heavy_minus_sign:     | N/A                    |