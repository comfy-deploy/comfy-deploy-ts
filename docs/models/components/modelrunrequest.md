# ModelRunRequest

## Example Usage

```typescript
import { ModelRunRequest } from "comfydeploy/models/components";

let value: ModelRunRequest = {
  inputs: {
    "prompt": "A beautiful landscape",
    "seed": 42,
  },
  modelId: "<id>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `inputs`                                                                       | Record<string, *components.ModelRunRequestInputs*>                             | :heavy_minus_sign:                                                             | The inputs to the workflow                                                     | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                  |
| `webhook`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `webhookIntermediateStatus`                                                    | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            | true                                                                           |
| `gpu`                                                                          | [components.ModelRunRequestGpu](../../models/components/modelrunrequestgpu.md) | :heavy_minus_sign:                                                             | The GPU to override the machine's default GPU                                  |                                                                                |
| `modelId`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |                                                                                |