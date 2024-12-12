# WorkflowRunWebhookBody

## Example Usage

```typescript
import { WorkflowRunWebhookBody } from "comfydeploy/models/components";

let value: WorkflowRunWebhookBody = {
  runId: "<id>",
  status: "running",
  liveStatus: "<value>",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `runId`                                                                                  | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `status`                                                                                 | [components.WorkflowRunStatus](../../models/components/workflowrunstatus.md)             | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `liveStatus`                                                                             | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `progress`                                                                               | *number*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `outputs`                                                                                | [components.WorkflowRunOutputModel](../../models/components/workflowrunoutputmodel.md)[] | :heavy_minus_sign:                                                                       | N/A                                                                                      |