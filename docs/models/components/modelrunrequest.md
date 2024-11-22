# ModelRunRequest

## Example Usage

```typescript
import { ModelRunRequest } from "comfydeploy/models/components";

let value: ModelRunRequest = {
  executionMode: "async",
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
  webhook: "https://example.com/webhook",
  webhookIntermediateStatus: true,
  origin: "manual",
  batchNumber: 5,
  batchInputParams: {
    "input_number": [
      1,
      2,
      3,
    ],
    "input_text": [
      "apple",
      "banana",
      "cherry",
    ],
  },
  isNativeRun: true,
  gpuEventId: "123e4567-e89b-12d3-a456-426614174000",
  modelId: "<id>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `executionMode`                                                                                    | [components.ModelRunRequestExecutionMode](../../models/components/modelrunrequestexecutionmode.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                | async                                                                                              |
| `inputs`                                                                                           | Record<string, *components.ModelRunRequestInputs*>                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                                      |
| `webhook`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | https://example.com/webhook                                                                        |
| `webhookIntermediateStatus`                                                                        | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                | true                                                                                               |
| `origin`                                                                                           | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | manual                                                                                             |
| `batchNumber`                                                                                      | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 5                                                                                                  |
| `batchInputParams`                                                                                 | Record<string, *any*[]>                                                                            | :heavy_minus_sign:                                                                                 | Optional dictionary of batch input parameters. Keys are input names, values are lists of inputs.   | {<br/>"input_number": [<br/>1,<br/>2,<br/>3<br/>],<br/>"input_text": [<br/>"apple",<br/>"banana",<br/>"cherry"<br/>]<br/>} |
| `isNativeRun`                                                                                      | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                | true                                                                                               |
| `gpuEventId`                                                                                       | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 123e4567-e89b-12d3-a456-426614174000                                                               |
| `modelId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |                                                                                                    |