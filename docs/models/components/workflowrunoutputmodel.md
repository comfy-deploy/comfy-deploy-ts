# WorkflowRunOutputModel

## Example Usage

```typescript
import { WorkflowRunOutputModel } from "comfydeploy/models/components";

let value: WorkflowRunOutputModel = {
  id: "d685a922-64fc-4533-8ab0-45edd9f3f044",
  runId: "97a2d7bd-0587-4fea-b7cf-2b8ed4facc34",
  data: {
    "key": [
      false,
    ],
  },
  nodeMeta: "<value>",
  createdAt: new Date("2023-11-29T19:43:35.871Z"),
  updatedAt: new Date("2024-02-26T11:34:27.144Z"),
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