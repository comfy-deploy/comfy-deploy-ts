<!-- Start SDK Example Usage [usage] -->
```typescript
import { ComfyDeploy } from "comfy-deploy";

const comfyDeploy = new ComfyDeploy({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await comfyDeploy.workflows.getApiRun({
        runId: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->