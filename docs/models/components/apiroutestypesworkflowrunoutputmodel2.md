# ApiRoutesTypesWorkflowRunOutputModel2

## Example Usage

```typescript
import { ApiRoutesTypesWorkflowRunOutputModel2 } from "comfydeploy/models/components";

let value: ApiRoutesTypesWorkflowRunOutputModel2 = {
  id: "2c0bcc45-9453-470c-8184-9fa0688a426f",
  runId: "e87e7b6e-bb5c-4a32-9cf7-9d7f9ded2a61",
  data: {
    "key": [
      {
        url: "https://thin-almighty.org/",
        type: "<value>",
        filename: "example.file",
        isPublic: false,
        subfolder: "<value>",
        uploadDuration: 3553.69,
      },
    ],
  },
  createdAt: new Date("2023-01-26T22:49:04.962Z"),
  updatedAt: new Date("2022-01-18T21:30:17.764Z"),
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