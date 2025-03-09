/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { modelsPublicModelsModelsGet } from "../../funcs/modelsPublicModelsModelsGet.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$modelsPublicModelsModelsGet: ToolDefinition = {
  name: "models_public-models-models-get",
  description: `Public Models

Return a list of available public models with their input/output specifications`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await modelsPublicModelsModelsGet(
      client,
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
