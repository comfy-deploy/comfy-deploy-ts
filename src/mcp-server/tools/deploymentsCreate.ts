/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsCreate } from "../../funcs/deploymentsCreate.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.DeploymentCreate$inboundSchema,
};

export const tool$deploymentsCreate: ToolDefinition<typeof args> = {
  name: "deployments_create",
  description: `Create Deployment`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await deploymentsCreate(
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
