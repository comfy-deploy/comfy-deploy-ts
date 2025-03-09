/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { sessionList } from "../../funcs/sessionList.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetMachineSessionsSessionsGetRequest$inboundSchema,
};

export const tool$sessionList: ToolDefinition<typeof args> = {
  name: "session_list",
  description: `Get Machine Sessions`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await sessionList(
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
