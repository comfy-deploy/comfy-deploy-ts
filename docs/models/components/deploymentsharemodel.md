# DeploymentShareModel

## Example Usage

```typescript
import { DeploymentShareModel } from "comfydeploy/models/components";

let value: DeploymentShareModel = {
  id: "0a99f0bd-85c1-478b-b136-9e92fd8e8edf",
  userId: "<id>",
  orgId: "<id>",
  shareSlug: "<value>",
  workflow: {
    "key": "<value>",
  },
  inputTypes: [
    {},
  ],
  outputTypes: [
    {},
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `userId`                                                           | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `orgId`                                                            | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `shareSlug`                                                        | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `description`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `workflow`                                                         | Record<string, *string*>                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `inputTypes`                                                       | [components.InputTypes](../../models/components/inputtypes.md)[]   | :heavy_check_mark:                                                 | N/A                                                                |
| `outputTypes`                                                      | [components.OutputTypes](../../models/components/outputtypes.md)[] | :heavy_check_mark:                                                 | N/A                                                                |