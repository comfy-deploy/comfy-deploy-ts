# Machines

## Example Usage

```typescript
import { Machines } from "comfydeploy/models/operations";

let value: Machines = {
  id: "<id>",
  endpoints: [
    "<value>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `name`             | *string*           | :heavy_minus_sign: | N/A                |
| `type`             | *string*           | :heavy_minus_sign: | N/A                |
| `status`           | *string*           | :heavy_minus_sign: | N/A                |
| `createdAt`        | *string*           | :heavy_minus_sign: | N/A                |
| `updatedAt`        | *string*           | :heavy_minus_sign: | N/A                |
| `endpoints`        | *string*[]         | :heavy_check_mark: | N/A                |
| `objectInfo`       | *any*              | :heavy_minus_sign: | N/A                |