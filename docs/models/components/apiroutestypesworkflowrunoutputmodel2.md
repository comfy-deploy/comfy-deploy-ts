# ApiRoutesTypesWorkflowRunOutputModel2

## Example Usage

```typescript
import { ApiRoutesTypesWorkflowRunOutputModel2 } from "comfydeploy/models/components";

let value: ApiRoutesTypesWorkflowRunOutputModel2 = {
  id: "47ab462c-0bcc-4459-a453-70c1849fa068",
  runId: "a426f2e8-7e7b-46eb-bb5c-a32cf79d7f9d",
  data: {
    "key": [
      {
        url: "https://curly-ostrich.info",
        type: "<value>",
        filename: "example.file",
        isPublic: false,
        subfolder: "<value>",
        uploadDuration: 627.13,
      },
    ],
  },
  createdAt: new Date("2023-04-10T17:44:39.673Z"),
  updatedAt: new Date("2022-10-11T12:25:32.503Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | Record<string, [components.MediaItem](../../models/components/mediaitem.md)[]>                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `nodeId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |