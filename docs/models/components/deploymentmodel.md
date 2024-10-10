# DeploymentModel

## Example Usage

```typescript
import { DeploymentModel } from "comfydeploy/models/components";

let value: DeploymentModel = {
  id: "ae840b05-8e16-4059-a431-9baf0a99f0bd",
  userId: "<id>",
  orgId: "<id>",
  workflowVersionId: "5c178b13-69e9-42fd-b8e8-edfe026f42e7",
  workflowId: "2a71b300-0ebe-4a84-9f57-6f25a1974385",
  machineId: "5f2159a6-f5ba-4dfe-bcb5-21368cf119bd",
  shareSlug: "<value>",
  description:
    "brace instruction ew impish loyalty cake although misfire breastplate whenever",
  shareOptions: {},
  showcaseMedia: {},
  environment: "production",
  createdAt: new Date("2022-06-18T02:12:53.867Z"),
  updatedAt: new Date("2022-08-07T18:10:36.920Z"),
  workflow: {
    id: "685cce0e-6ebf-4c58-b654-7a48120f0291",
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