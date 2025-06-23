# WorkflowRunOutputModel

## Example Usage

```typescript
import { WorkflowRunOutputModel } from "comfydeploy/models/components";

let value: WorkflowRunOutputModel = {
  id: "d685a922-64fc-4533-8ab0-45edd9f3f044",
  runId: "97a2d7bd-0587-4fea-b7cf-2b8ed4facc34",
  data: {
    "key": [],
    "key1": [],
    "key2": [
      {
        url: "https://colorless-mixture.biz/",
        type: "<value>",
        filename: "example.file",
      },
    ],
  },
  nodeMeta: "<value>",
  createdAt: new Date("2023-09-12T15:30:10.801Z"),
  updatedAt: new Date("2023-05-25T15:12:05.752Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `outputId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `runId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | Record<string, *components.Data*[]>                                                           | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `nodeMeta`                                                                                    | *any*                                                                                         | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `nodeId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |