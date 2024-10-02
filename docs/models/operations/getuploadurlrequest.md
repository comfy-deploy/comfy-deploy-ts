# GetUploadUrlRequest

## Example Usage

```typescript
import { GetUploadUrlRequest } from "comfydeploy/models/operations";

let value: GetUploadUrlRequest = {
  type: "image/jpg",
  fileSize: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `type`                                             | [operations.Type](../../models/operations/type.md) | :heavy_check_mark:                                 | N/A                                                |
| `fileExtension`                                    | *string*                                           | :heavy_minus_sign:                                 | N/A                                                |
| `fileSize`                                         | *string*                                           | :heavy_check_mark:                                 | N/A                                                |