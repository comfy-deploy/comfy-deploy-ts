# CreateRunQueueRunQueuePostRunUpdateWebhookRequestBodyWebhookPostBody

The updated run information

## Example Usage

```typescript
import { CreateRunQueueRunQueuePostRunUpdateWebhookRequestBodyWebhookPostBody } from "comfydeploy/models/callbacks";

let value:
  CreateRunQueueRunQueuePostRunUpdateWebhookRequestBodyWebhookPostBody = {
    status: "failed",
    liveStatus: "<value>",
    progress: 9998.09,
    runId: "<id>",
    outputs: {
      runId: "38449ecb-8e7d-4d3c-b053-8b18f3a907b0",
      createdAt: new Date("2023-07-25T00:13:17.699Z"),
      updatedAt: new Date("2022-02-03T14:30:29.574Z"),
    },
  };
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `status`                                                                     | [components.WorkflowRunStatus](../../models/components/workflowrunstatus.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `liveStatus`                                                                 | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `progress`                                                                   | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `runId`                                                                      | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `outputs`                                                                    | [components.WorkflowRunOutput](../../models/components/workflowrunoutput.md) | :heavy_check_mark:                                                           | N/A                                                                          |