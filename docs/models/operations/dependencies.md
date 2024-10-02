# Dependencies

## Example Usage

```typescript
import { Dependencies } from "comfydeploy/models/operations";

let value: Dependencies = {
  comfyui: "<value>",
  missingNodes: [
    "<value>",
  ],
  customNodes: {
    "key": {
      name: "<value>",
      url: "https://delectable-airmail.com/",
    },
  },
  models: {
    "key": [
      {
        name: "<value>",
      },
    ],
  },
  files: {
    "key": [
      {
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `comfyui`                                                                        | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `missingNodes`                                                                   | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `customNodes`                                                                    | Record<string, [operations.CustomNodes](../../models/operations/customnodes.md)> | :heavy_check_mark:                                                               | N/A                                                                              |
| `models`                                                                         | Record<string, [operations.Models](../../models/operations/models.md)[]>         | :heavy_check_mark:                                                               | N/A                                                                              |
| `files`                                                                          | Record<string, [operations.Files](../../models/operations/files.md)[]>           | :heavy_check_mark:                                                               | N/A                                                                              |