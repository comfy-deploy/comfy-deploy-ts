# LogUpdateEvent

## Example Usage

```typescript
import { LogUpdateEvent } from "comfydeploy/models/components";

let value: LogUpdateEvent = {
  data: {
    logs: "<value>",
    timestamp: new Date("2024-06-29T03:22:56.921Z"),
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `event`                                                                | [components.Event](../../models/components/event.md)                   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `data`                                                                 | [components.LogDataContent](../../models/components/logdatacontent.md) | :heavy_check_mark:                                                     | N/A                                                                    |