# CreateRunStreamRunStreamPostRunUpdateWebhookRequestBodyWebhookPostBody

The updated run information

## Example Usage

```typescript
import { CreateRunStreamRunStreamPostRunUpdateWebhookRequestBodyWebhookPostBody } from "comfydeploy/models/callbacks";

let value:
  CreateRunStreamRunStreamPostRunUpdateWebhookRequestBodyWebhookPostBody = {
    status: "queued",
    liveStatus: "<value>",
    progress: 242.73,
    runId: "<id>",
    outputs: {
      runId: "6ad7f407-4d34-4cb8-8b60-0810fd20f42b",
      createdAt: new Date("2022-10-18T01:20:34.893Z"),
      updatedAt: new Date("2024-12-04T16:53:25.686Z"),
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