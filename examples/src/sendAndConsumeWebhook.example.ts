import { SDKError } from "comfy-deploy/models/errors/sdkerror.js";
import { ComfyDeploy } from "comfy-deploy";
import { HTTPClient } from "comfy-deploy/lib/http.js";
import dotenv from "dotenv";

dotenv.config();

// You can generate your own here https://gist.github.com/mfbx9da4/9fb911e9b24dfba00445ff128b59493f
const jwkPrivateString = process.env["JWK_PRIVATE_KEY"];

if (!jwkPrivateString) {
  throw new Error("JWK_PRIVATE_KEY is not set");
}

const httpClient = new HTTPClient();
let lastRequest: Request | undefined;
httpClient.addHook("beforeRequest", (request) => {
  lastRequest = request.clone();
  return request;
});

const sdk = new ComfyDeploy({ httpClient });

await sdk.callbacks
  .runUpdateRequestBodyWebhookPost(
    {
      url: "https://example.com/my-webhook-handler",
      secret: jwkPrivateString,
    },
    {
      runId: "123",
      status: "success",
      liveStatus: "success",
    }
  )
  .catch((e) => {
    if (!(e instanceof SDKError)) throw e;
  });

if (!lastRequest) {
  throw new Error("No request was made");
}

const data = await sdk.validateWebhook({ request: lastRequest });

console.log(data);
