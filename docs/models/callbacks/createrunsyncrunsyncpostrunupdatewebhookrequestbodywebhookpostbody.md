# CreateRunSyncRunSyncPostRunUpdateWebhookRequestBodyWebhookPostBody

The updated run information

## Example Usage

```typescript
import { CreateRunSyncRunSyncPostRunUpdateWebhookRequestBodyWebhookPostBody } from "comfydeploy/models/callbacks";

let value: CreateRunSyncRunSyncPostRunUpdateWebhookRequestBodyWebhookPostBody =
  {
    status: "uploading",
    liveStatus: "<value>",
    progress: 9536.76,
    runId: "<id>",
    outputs: {
      runId: "91470673-9c39-4afc-8d72-f271ffb54428",
      createdAt: new Date("2022-12-14T03:17:00.431Z"),
      updatedAt: new Date("2023-11-18T20:53:13.717Z"),
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