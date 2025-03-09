# DeploymentRunRequest

## Example Usage

```typescript
import { DeploymentRunRequest } from "comfydeploy/models/components";

let value: DeploymentRunRequest = {
  inputs: {
    "num_inference_steps": 30,
    "prompt": "A futuristic cityscape",
    "seed": 123456,
  },
  webhook: "https://myapp.com/webhook",
  deploymentId: "12345678-1234-5678-1234-567812345678",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `inputs`                                                                                 | Record<string, *components.DeploymentRunRequestInputs*>                                  | :heavy_minus_sign:                                                                       | The inputs to the workflow                                                               | {<br/>"prompt": "A beautiful landscape",<br/>"seed": 42<br/>}                            |
| `webhook`                                                                                | *string*                                                                                 | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `webhookIntermediateStatus`                                                              | *boolean*                                                                                | :heavy_minus_sign:                                                                       | N/A                                                                                      | true                                                                                     |
| `gpu`                                                                                    | [components.DeploymentRunRequestGpu](../../models/components/deploymentrunrequestgpu.md) | :heavy_minus_sign:                                                                       | The GPU to override the machine's default GPU                                            |                                                                                          |
| `deploymentId`                                                                           | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      | 15e79589-12c9-453c-a41a-348fdd7de957                                                     |