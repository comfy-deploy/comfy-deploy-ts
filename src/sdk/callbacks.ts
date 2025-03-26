/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { callbacksRunUpdateRequestBodyWebhookPost } from "../funcs/callbacksRunUpdateRequestBodyWebhookPost.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { WebhookRecipient } from "../types/webhooks.js";

export class Callbacks extends ClientSDK {
  /**
   * Run Update Webhook
   *
   * @remarks
   * This endpoint is called by the workflow runner to update the status of a run.
   */
  async runUpdateRequestBodyWebhookPost(
    recipient: WebhookRecipient,
    request: components.WorkflowRunWebhookBody,
    options?: RequestOptions,
  ): Promise<components.WorkflowRunWebhookResponse> {
    return unwrapAsync(callbacksRunUpdateRequestBodyWebhookPost(
      this,
      recipient,
      request,
      options,
    ));
  }
}
