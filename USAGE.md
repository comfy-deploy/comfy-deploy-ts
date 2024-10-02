<!-- Start SDK Example Usage [usage] -->
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.create({
    deploymentId: "d290f1ee-6c54-4b01-90e6-d701748f0851",
    workflowApi: {},
    workflowId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    machineId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    inputs: {
      "input_text": "value1",
      "input_url": "https://example.png",
    },
    webhook: "https://example.com/webhook",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->