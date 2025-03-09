/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { fileListAssetsAssetsGet } from "../../funcs/fileListAssetsAssetsGet.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.ListAssetsAssetsGetRequest$inboundSchema,
};

export const tool$fileListAssetsAssetsGet: ToolDefinition<typeof args> = {
  name: "file_list-assets-assets-get",
  description: `List Assets`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await fileListAssetsAssetsGet(
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
