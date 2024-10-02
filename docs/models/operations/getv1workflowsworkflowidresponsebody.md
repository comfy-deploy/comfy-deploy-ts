# GetV1WorkflowsWorkflowIdResponseBody

Specific workflow retrieved successfully

## Example Usage

```typescript
import { GetV1WorkflowsWorkflowIdResponseBody } from "comfydeploy/models/operations";

let value: GetV1WorkflowsWorkflowIdResponseBody = {
  name: "<value>",
  userId: "<id>",
  id: "<id>",
  selectedMachineId: "<id>",
  createdAt: "<value>",
  updatedAt: "<value>",
  versions: [
    {
      workflowId: "<id>",
      id: "<id>",
      comment:
        "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      version: 7997.96,
      snapshot: "<value>",
      dependencies: "<value>",
      createdAt: "<value>",
      updatedAt: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `userId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `orgId`                                                                                                      | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `selectedMachineId`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `updatedAt`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `versions`                                                                                                   | [operations.GetV1WorkflowsWorkflowIdVersions](../../models/operations/getv1workflowsworkflowidversions.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |