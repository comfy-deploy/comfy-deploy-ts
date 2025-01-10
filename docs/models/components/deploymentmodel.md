# DeploymentModel

## Example Usage

```typescript
import { DeploymentModel } from "comfydeploy/models/components";

let value: DeploymentModel = {
  id: "c43a3a86-84b6-45de-a035-dffe4f31f3b0",
  userId: "<id>",
  orgId: "<id>",
  workflowVersionId: "e465b327-4d38-4fad-afcb-ff71426296ef",
  workflowId: "49e68476-3845-48c5-aed0-4715ba9b35ae",
  machineId: "40b058e1-6059-4431-89ba-f0a99f0bd85c",
  shareSlug: "<value>",
  description: "sunbathe like joyously coast blindly evince",
  shareOptions: {},
  showcaseMedia: [
    {},
  ],
  environment: "private-share",
  createdAt: new Date("2024-02-01T23:01:15.623Z"),
  updatedAt: new Date("2024-05-30T19:56:59.856Z"),
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
| `showcaseMedia`                                                                               | [components.ShowcaseMedia](../../models/components/showcasemedia.md)[]                        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `environment`                                                                                 | [components.DeploymentEnvironment](../../models/components/deploymentenvironment.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `workflow`                                                                                    | [components.WorkflowWithName](../../models/components/workflowwithname.md)                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `inputTypes`                                                                                  | [components.InputModel](../../models/components/inputmodel.md)[]                              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outputTypes`                                                                                 | [components.OutputModel](../../models/components/outputmodel.md)[]                            | :heavy_minus_sign:                                                                            | N/A                                                                                           |