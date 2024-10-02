# Snapshot

## Example Usage

```typescript
import { Snapshot } from "comfydeploy/models/operations";

let value: Snapshot = {
  comfyui: "<value>",
  gitCustomNodes: {
    "key": {
      hash: "<value>",
      disabled: false,
    },
  },
  fileCustomNodes: [
    "<value>",
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `comfyui`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `gitCustomNodes`                                                                       | Record<string, [operations.GitCustomNodes](../../models/operations/gitcustomnodes.md)> | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `fileCustomNodes`                                                                      | *any*[]                                                                                | :heavy_check_mark:                                                                     | N/A                                                                                    |