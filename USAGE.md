<!-- Start SDK Example Usage [usage] -->
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
  bearer: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await comfyDeploy.run.get({
    runId: "faf49b3a-7b64-4687-95c8-58ca8a41dd73",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->