/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost } from "../../funcs/sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request:
    operations
      .IncreaseTimeout2SessionSessionIdIncreaseTimeoutPostRequest$inboundSchema,
};

export const tool$sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost:
  ToolDefinition<typeof args> = {
    name: "session-increase-timeout-2-session-session-id-increase-timeout-post",
    description: `Increase Timeout 2`,
    args,
    tool: async (client, args, ctx) => {
      const [result, apiCall] =
        await sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost(
          client,
          args.request,
          { fetchOptions: { signal: ctx.signal } },
        ).$inspect();

      if (!result.ok) {
        return {
          content: [{ type: "text", text: result.error.message }],
          isError: true,
        };
      }

      const value = result.value;

      return formatResult(value, apiCall);
    },
  };
