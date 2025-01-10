import { ComfyDeploy } from "comfy-deploy";
import { workflowRunWebhookBodyToJSON } from "../../models/components/workflowrunwebhookbody.js";

const sdk = new ComfyDeploy();

// This is a fake request, it's not actually valid because it's not signed but it's just for example purposes
const exampleFakeRequest = new Request(
  "https://example.com/my-webhook-handler",
  {
    body: workflowRunWebhookBodyToJSON({
      runId: "123",
      status: "success",
      liveStatus: "success",
    }),
    method: "POST",
  }
);

const data = await sdk.validateWebhook({
  request: exampleFakeRequest,
});

console.log(data);
