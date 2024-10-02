# GetV1WorkflowsResponseBody

## Example Usage

```typescript
import { GetV1WorkflowsResponseBody } from "comfydeploy/models/operations";

let value: GetV1WorkflowsResponseBody = {
  id: "<id>",
  updatedAt: "<value>",
  name: "<value>",
  selectedMachineId: "<id>",
  count: "<value>",
  user: {
    name: "<value>",
  },
  versions: [
    {
      id: "<id>",
      version: 3708.53,
    },
  ],
  deployments: [
    "<value>",
  ],
  runs: [
    "<value>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `updatedAt`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `selectedMachineId`                                          | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `count`                                                      | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `user`                                                       | [operations.User](../../models/operations/user.md)           | :heavy_check_mark:                                           | N/A                                                          |
| `versions`                                                   | [operations.Versions](../../models/operations/versions.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `deployments`                                                | *any*[]                                                      | :heavy_check_mark:                                           | N/A                                                          |
| `runs`                                                       | *any*[]                                                      | :heavy_check_mark:                                           | N/A                                                          |