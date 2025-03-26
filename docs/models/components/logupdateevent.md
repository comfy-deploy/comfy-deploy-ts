# LogUpdateEvent

## Example Usage

```typescript
import { LogUpdateEvent } from "comfydeploy/models/components";

let value: LogUpdateEvent = {
  data: {
    logs: "<value>",
    timestamp: new Date("2024-09-11T16:50:31.874Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `data`                                                                 | [components.LogDataContent](../../models/components/logdatacontent.md) | :heavy_check_mark:                                                     | N/A                                                                    |