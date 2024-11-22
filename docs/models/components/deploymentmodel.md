# DeploymentModel

## Example Usage

```typescript
import { DeploymentModel } from "comfydeploy/models/components";

let value: DeploymentModel = {
  id: "ff62a7f1-c43a-43a8-9684-b65de035dffe",
  userId: "<id>",
  orgId: "<id>",
  workflowVersionId: "f31f3b0b-e465-4b32-974d-38fadfcbff71",
  workflowId: "26296ef8-49e6-4847-a638-458c5ed04715",
  machineId: "a9b35ae8-40b0-458e-a160-594319baf0a9",
  shareSlug: "<value>",
  description:
    "bus questioningly topsail diligently thigh arraign into defenseless geez burgeon",
  shareOptions: {},
  showcaseMedia: {},
  environment: "production",
  createdAt: new Date("2023-10-10T18:22:17.762Z"),
  updatedAt: new Date("2023-12-24T10:58:40.496Z"),
  workflow: {
    id: "6f5badfe-cb52-4136-b8cf-119bdef662aa",
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