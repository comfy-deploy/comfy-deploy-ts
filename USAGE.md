<!-- Start SDK Example Usage [usage] -->
```typescript
import { ComfyDeploy } from "comfydeploy";

const comfyDeploy = new ComfyDeploy({
    bearerAuth: process.env.BEARER_AUTH,
});

async function run() {
    const result = await comfyDeploy.run.get({
        runId: "<value>",
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->