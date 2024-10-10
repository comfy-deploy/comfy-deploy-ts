# WorkflowRunOutput

## Example Usage

```typescript
import { WorkflowRunOutput } from "comfydeploy/models/components";

let value: WorkflowRunOutput = {
  runId: "1dffec51-6320-4b0c-a211-a368db420447",
  createdAt: new Date("2024-02-02T09:43:54.200Z"),
  updatedAt: new Date("2022-11-07T17:40:47.066Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `runId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `data`                                                                                        | [components.WorkflowRunOutputData](../../models/components/workflowrunoutputdata.md)          | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `nodeMeta`                                                                                    | [components.WorkflowRunOutputNodeMeta](../../models/components/workflowrunoutputnodemeta.md)  | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |