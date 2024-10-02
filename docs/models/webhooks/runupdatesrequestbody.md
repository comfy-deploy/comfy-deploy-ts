# RunUpdatesRequestBody

## Example Usage

```typescript
import { RunUpdatesRequestBody } from "comfydeploy/models/webhooks";

let value: RunUpdatesRequestBody = {
  status: "success",
  liveStatus: "<value>",
  progress: 6762.42,
  runId: "<id>",
  outputs: [
    {
      data: {},
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [webhooks.Status](../../models/webhooks/status.md)     | :heavy_check_mark:                                     | N/A                                                    |
| `liveStatus`                                           | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `progress`                                             | *number*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `runId`                                                | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `outputs`                                              | [webhooks.Outputs](../../models/webhooks/outputs.md)[] | :heavy_check_mark:                                     | N/A                                                    |