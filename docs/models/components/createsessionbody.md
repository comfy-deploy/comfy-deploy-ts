# CreateSessionBody

## Example Usage

```typescript
import { CreateSessionBody } from "comfydeploy/models/components";

let value: CreateSessionBody = {};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `gpu`                                        | *string*                                     | :heavy_minus_sign:                           | The GPU to use                               |
| `timeout`                                    | *number*                                     | :heavy_minus_sign:                           | The timeout in minutes                       |
| `asyncCreation`                              | *boolean*                                    | :heavy_minus_sign:                           | Whether to create the session asynchronously |