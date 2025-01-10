import { ComfyDeploy } from "comfy-deploy";
import dotenv from "dotenv";

dotenv.config();

const sdk = new ComfyDeploy();

const jwkPrivateString = process.env["JWK_PRIVATE_KEY"];

if (!jwkPrivateString) {
  throw new Error("JWK_PRIVATE_KEY is not set");
}

const data = await sdk.callbacks.runUpdateRequestBodyWebhookPost(
  {
    url: "https://example.com/my-webhook-handler",
    secret: jwkPrivateString,
  },
  {
    runId: "123",
    status: "success",
    liveStatus: "success",
  }
);

console.log(data);
