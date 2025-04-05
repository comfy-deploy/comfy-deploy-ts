# MediaItem

## Example Usage

```typescript
import { MediaItem } from "comfydeploy/models/components";

let value: MediaItem = {
  url: "https://taut-violin.net",
  type: "<value>",
  filename: "example.file",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `url`              | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `filename`         | *string*           | :heavy_check_mark: | N/A                |
| `isPublic`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `subfolder`        | *string*           | :heavy_minus_sign: | N/A                |
| `uploadDuration`   | *number*           | :heavy_minus_sign: | N/A                |