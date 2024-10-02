# CreateRunSyncRunSyncPostRunUpdateWebhookRequestBodyWebhookPostBody

The updated run information

## Example Usage

```typescript
import { CreateRunSyncRunSyncPostRunUpdateWebhookRequestBodyWebhookPostBody } from "comfydeploy/models/callbacks";

let value: CreateRunSyncRunSyncPostRunUpdateWebhookRequestBodyWebhookPostBody =
  {
    status: "not-started",
    liveStatus: "<value>",
    progress: 4246.63,
    runId: "<id>",
    outputs: {
      runId: "19391fe6-3470-4a66-acbf-5ec594d1326b",
      createdAt: new Date("2023-06-19T11:50:16.852Z"),
      updatedAt: new Date("2022-01-01T14:21:39.818Z"),
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