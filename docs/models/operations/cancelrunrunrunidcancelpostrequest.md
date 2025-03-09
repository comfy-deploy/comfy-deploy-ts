# CancelRunRunRunIdCancelPostRequest

## Example Usage

```typescript
import { CancelRunRunRunIdCancelPostRequest } from "comfydeploy/models/operations";

let value: CancelRunRunRunIdCancelPostRequest = {
  runId: "<id>",
  cancelFunctionBody: {
    functionId: "<id>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `runId`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `cancelFunctionBody`                                                           | [components.CancelFunctionBody](../../models/components/cancelfunctionbody.md) | :heavy_check_mark:                                                             | N/A                                                                            |