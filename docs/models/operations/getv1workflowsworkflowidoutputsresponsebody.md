# GetV1WorkflowsWorkflowIdOutputsResponseBody

Specific workflow retrieved successfully

## Example Usage

```typescript
import { GetV1WorkflowsWorkflowIdOutputsResponseBody } from "comfydeploy/models/operations";

let value: GetV1WorkflowsWorkflowIdOutputsResponseBody = {
  outputs: [
    {
      fileURLs: [
        "<value>",
      ],
      runID: "<id>",
      duration: 3068.10,
    },
  ],
  total: 5775.43,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `outputs`                                                                                                                | [operations.GetV1WorkflowsWorkflowIdOutputsOutputs](../../models/operations/getv1workflowsworkflowidoutputsoutputs.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `total`                                                                                                                  | *number*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |