# WorkflowRunOutput

## Example Usage

```typescript
import { WorkflowRunOutput } from "comfydeploy/models/components";

let value: WorkflowRunOutput = {
  runId: "52d3831d-ffec-4516-9320-b0c211a368db",
  createdAt: new Date("2022-05-25T02:31:24.789Z"),
  updatedAt: new Date("2022-03-02T16:33:58.047Z"),
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