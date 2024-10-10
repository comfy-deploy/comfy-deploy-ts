# DependencyGraph

## Example Usage

```typescript
import { DependencyGraph } from "comfydeploy/models/components";

let value: DependencyGraph = {
  comfyui: "<value>",
  models: {
    "key": "<value>",
  },
  missingNodes: [
    "<value>",
  ],
  customNodes: {
    "key": {
      url: "https://guilty-relative.net/",
      installType: "<value>",
    },
  },
  files: {
    "key": "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `comfyui`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `models`                                                                       | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `missingNodes`                                                                 | *string*[]                                                                     | :heavy_check_mark:                                                             | N/A                                                                            |
| `customNodes`                                                                  | Record<string, [components.CustomNode](../../models/components/customnode.md)> | :heavy_check_mark:                                                             | N/A                                                                            |
| `files`                                                                        | Record<string, *string*>                                                       | :heavy_check_mark:                                                             | N/A                                                                            |