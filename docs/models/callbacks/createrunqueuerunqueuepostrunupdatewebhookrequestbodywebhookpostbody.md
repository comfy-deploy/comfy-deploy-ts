# CreateRunQueueRunQueuePostRunUpdateWebhookRequestBodyWebhookPostBody

The updated run information

## Example Usage

```typescript
import { CreateRunQueueRunQueuePostRunUpdateWebhookRequestBodyWebhookPostBody } from "comfydeploy/models/callbacks";

let value:
  CreateRunQueueRunQueuePostRunUpdateWebhookRequestBodyWebhookPostBody = {
    status: "cancelled",
    liveStatus: "<value>",
    progress: 5207.61,
    runId: "<id>",
    outputs: {
      runId: "4e5035d7-75ef-4f6f-8ca3-32e477cd26dd",
      createdAt: new Date("2022-06-21T09:30:27.391Z"),
      updatedAt: new Date("2022-11-30T09:38:32.582Z"),
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