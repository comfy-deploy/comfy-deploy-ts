# CustomNodes

## Example Usage

```typescript
import { CustomNodes } from "comfydeploy/models/operations";

let value: CustomNodes = {
  name: "<value>",
  url: "https://jagged-exploration.net/",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `node`                                               | [operations.Node](../../models/operations/node.md)[] | :heavy_minus_sign:                                   | N/A                                                  |
| `hash`                                               | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `url`                                                | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `files`                                              | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |
| `installType`                                        | *operations.InstallType*                             | :heavy_minus_sign:                                   | N/A                                                  |
| `warning`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  |
| `pip`                                                | *string*[]                                           | :heavy_minus_sign:                                   | N/A                                                  |