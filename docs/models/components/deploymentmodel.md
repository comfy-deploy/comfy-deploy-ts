# DeploymentModel

## Example Usage

```typescript
import { DeploymentModel } from "comfydeploy/models/components";

let value: DeploymentModel = {
  id: "0f55026e-1fd7-4539-a006-14342019ff62",
  userId: "<id>",
  orgId: "<id>",
  workflowVersionId: "7f1c43a3-a868-44b6-85de-035dffe4f31f",
  workflowId: "b0be465b-3274-4d38-9fad-fcbff7142629",
  machineId: "ef849e68-4763-4845-98c5-ed04715ba9b3",
  shareSlug: "<value>",
  description: "gastropod ponder unibody scarcely legging of tough well",
  shareOptions: {},
  showcaseMedia: {},
  environment: "production",
  createdAt: new Date("2022-06-25T20:56:27.257Z"),
  updatedAt: new Date("2024-08-29T09:21:28.573Z"),
  workflow: {
    id: "7e2a71b3-000e-4bea-a84f-576f25a19743",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orgId`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowVersionId`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflowId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `machineId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `shareSlug`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `shareOptions`                                                                                | [components.ShareOptions](../../models/components/shareoptions.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `showcaseMedia`                                                                               | [components.ShowcaseMedia](../../models/components/showcasemedia.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `environment`                                                                                 | [components.DeploymentEnvironment](../../models/components/deploymentenvironment.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflow`                                                                                    | [components.WorkflowWithName](../../models/components/workflowwithname.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `inputTypes`                                                                                  | [components.InputModel](../../models/components/inputmodel.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputTypes`                                                                                 | [components.OutputModel](../../models/components/outputmodel.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |