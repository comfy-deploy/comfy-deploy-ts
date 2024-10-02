# ResponseBody

## Example Usage

```typescript
import { ResponseBody } from "comfydeploy/models/operations";

let value: ResponseBody = {
  classType: "ComfyUIDeployExternalText",
  inputId: "<id>",
  defaultValue: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `classType`                                                  | [operations.ClassType](../../models/operations/classtype.md) | :heavy_check_mark:                                           | N/A                                                          |
| `inputId`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `defaultValue`                                               | *operations.DefaultValue*                                    | :heavy_check_mark:                                           | N/A                                                          |
| `minValue`                                                   | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `maxValue`                                                   | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `displayName`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `description`                                                | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `enumValues`                                                 | *string*[]                                                   | :heavy_minus_sign:                                           | N/A                                                          |