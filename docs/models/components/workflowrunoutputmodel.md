# WorkflowRunOutputModel

## Example Usage

```typescript
import { WorkflowRunOutputModel } from "comfydeploy/models/components";

let value: WorkflowRunOutputModel = {
  id: "99aa6e56-ecb1-4ebf-b2d2-91dc961b7bdf",
  runId: "05b28030-c35e-4b02-8993-e989b4632fb7",
  data: {
    "key": [
      {
        url: "https://jagged-exploration.net/",
        type: "<value>",
        filename: "example.file",
      },
    ],
  },
  nodeMeta: "<value>",
  createdAt: new Date("2024-02-19T00:23:03.771Z"),
  updatedAt: new Date("2023-07-16T20:17:42.484Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | Record<string, *components.Data*[]>                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nodeMeta`                                                                                    | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `nodeId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |