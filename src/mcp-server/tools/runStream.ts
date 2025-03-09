/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { runStream } from "../../funcs/runStream.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.CreateRunStreamRunStreamPostData$inboundSchema,
};

export const tool$runStream: ToolDefinition<typeof args> = {
  name: "run_stream",
  description: `Run a workflow in stream

Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/{callback_url}).`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await runStream(
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
