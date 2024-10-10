# FileUploadResponse

## Example Usage

```typescript
import { FileUploadResponse } from "comfydeploy/models/components";

let value: FileUploadResponse = {
  message: "File uploaded successfully",
  fileId: "img_1a2b3c4d5e6f7g8h",
  fileName: "example_image.jpg",
  fileUrl:
    "https://your-bucket.s3.your-region.amazonaws.com/inputs/img_1a2b3c4d5e6f7g8h.jpg",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `message`                                          | *string*                                           | :heavy_check_mark:                                 | A message indicating the result of the file upload |
| `fileId`                                           | *string*                                           | :heavy_check_mark:                                 | The unique identifier for the uploaded file        |
| `fileName`                                         | *string*                                           | :heavy_check_mark:                                 | The original name of the uploaded file             |
| `fileUrl`                                          | *string*                                           | :heavy_check_mark:                                 | The URL where the uploaded file can be accessed    |