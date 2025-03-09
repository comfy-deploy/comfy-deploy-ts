# DeploymentCreate

## Example Usage

```typescript
import { DeploymentCreate } from "comfydeploy/models/components";

let value: DeploymentCreate = {
  workflowVersionId: "<id>",
  workflowId: "<id>",
  environment: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `workflowVersionId` | *string*            | :heavy_check_mark:  | N/A                 |
| `workflowId`        | *string*            | :heavy_check_mark:  | N/A                 |
| `machineId`         | *string*            | :heavy_minus_sign:  | N/A                 |
| `machineVersionId`  | *string*            | :heavy_minus_sign:  | N/A                 |
| `environment`       | *string*            | :heavy_check_mark:  | N/A                 |
| `description`       | *string*            | :heavy_minus_sign:  | N/A                 |