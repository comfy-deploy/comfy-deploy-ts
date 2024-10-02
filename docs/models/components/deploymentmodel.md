# DeploymentModel

## Example Usage

```typescript
import { DeploymentModel } from "comfydeploy/models/components";

let value: DeploymentModel = {
  id: "e1fd7539-0061-4434-a201-9ff62a7f1c43",
  userId: "<id>",
  orgId: "<id>",
  workflowVersionId: "3a8684b6-5de0-435d-9ffe-4f31f3b0be46",
  workflowId: "b3274d38-fadf-4cbf-9f71-426296ef849e",
  machineId: "84763845-8c5e-4d04-8715-ba9b35ae840b",
  shareSlug: "<value>",
  description: "ponder unibody scarcely legging of",
  shareOptions: {},
  showcaseMedia: {},
  environment: "staging",
  createdAt: new Date("2024-12-10T17:10:47.327Z"),
  updatedAt: new Date("2024-08-13T11:27:07.082Z"),
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