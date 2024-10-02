# GetV1MachinesResponseBody

Machines retrieved successfully

## Example Usage

```typescript
import { GetV1MachinesResponseBody } from "comfydeploy/models/operations";

let value: GetV1MachinesResponseBody = {
  machines: [
    {
      id: "<id>",
      endpoints: [
        "<value>",
      ],
    },
  ],
  total: 7505.95,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `machines`                                                   | [operations.Machines](../../models/operations/machines.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `total`                                                      | *number*                                                     | :heavy_check_mark:                                           | N/A                                                          |