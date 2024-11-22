# InputModel

## Example Usage

```typescript
import { InputModel } from "comfydeploy/models/components";

let value: InputModel = {
  type: "<value>",
  classType: "<value>",
  inputId: "<id>",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `type`                             | *string*                           | :heavy_check_mark:                 | N/A                                |
| `classType`                        | *string*                           | :heavy_check_mark:                 | N/A                                |
| `inputId`                          | *string*                           | :heavy_check_mark:                 | N/A                                |
| `defaultValue`                     | *components.DefaultValue*          | :heavy_minus_sign:                 | N/A                                |
| `minValue`                         | *components.MinValue*              | :heavy_minus_sign:                 | N/A                                |
| `maxValue`                         | *components.MaxValue*              | :heavy_minus_sign:                 | N/A                                |
| `displayName`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `description`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `enumOptions`                      | *string*[]                         | :heavy_minus_sign:                 | Options for enum input type        |
| `step`                             | *components.Step*                  | :heavy_minus_sign:                 | Step for number slider input types |