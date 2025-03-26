/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ComfyDeployCore } from "../core.js";
import { SDKOptions } from "../lib/config.js";
import type { ConsoleLogger } from "./console-logger.js";
import { createRegisterPrompt } from "./prompts.js";
import {
  createRegisterResource,
  createRegisterResourceTemplate,
} from "./resources.js";
import { MCPScope, mcpScopes } from "./scopes.js";
import { createRegisterTool } from "./tools.js";
import { tool$deploymentsCreate } from "./tools/deploymentsCreate.js";
import { tool$deploymentsDeactivate } from "./tools/deploymentsDeactivate.js";
import { tool$deploymentsGet } from "./tools/deploymentsGet.js";
import { tool$deploymentsGetFeaturedDeploymentsDeploymentsFeaturedGet } from "./tools/deploymentsGetFeaturedDeploymentsDeploymentsFeaturedGet.js";
import { tool$deploymentsGetShareDeploymentShareUsernameSlugGet } from "./tools/deploymentsGetShareDeploymentShareUsernameSlugGet.js";
import { tool$deploymentsList } from "./tools/deploymentsList.js";
import { tool$deploymentsUpdate } from "./tools/deploymentsUpdate.js";
import { tool$fileCreateFolderAssetsFolderPost } from "./tools/fileCreateFolderAssetsFolderPost.js";
import { tool$fileDeleteAssetAssetsAssetIdDelete } from "./tools/fileDeleteAssetAssetsAssetIdDelete.js";
import { tool$fileGetAssetAssetsAssetIdGet } from "./tools/fileGetAssetAssetsAssetIdGet.js";
import { tool$fileListAssetsAssetsGet } from "./tools/fileListAssetsAssetsGet.js";
import { tool$fileUpload } from "./tools/fileUpload.js";
import { tool$fileUploadAssetFileAssetsUploadPost } from "./tools/fileUploadAssetFileAssetsUploadPost.js";
import { tool$modelsPublicModelsModelsGet } from "./tools/modelsPublicModelsModelsGet.js";
import { tool$runCancelRunRunRunIdCancelPost } from "./tools/runCancelRunRunRunIdCancelPost.js";
import { tool$runDeploymentQueue } from "./tools/runDeploymentQueue.js";
import { tool$runDeploymentStream } from "./tools/runDeploymentStream.js";
import { tool$runDeploymentSync } from "./tools/runDeploymentSync.js";
import { tool$runGet } from "./tools/runGet.js";
import { tool$runWorkflowQueue } from "./tools/runWorkflowQueue.js";
import { tool$runWorkflowStream } from "./tools/runWorkflowStream.js";
import { tool$runWorkflowSync } from "./tools/runWorkflowSync.js";
import { tool$searchSearchSearchModelGet } from "./tools/searchSearchSearchModelGet.js";
import { tool$sessionCancel } from "./tools/sessionCancel.js";
import { tool$sessionCreate } from "./tools/sessionCreate.js";
import { tool$sessionGet } from "./tools/sessionGet.js";
import { tool$sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost } from "./tools/sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost.js";
import { tool$sessionIncreaseTimeoutSessionIncreaseTimeoutPost } from "./tools/sessionIncreaseTimeoutSessionIncreaseTimeoutPost.js";
import { tool$sessionList } from "./tools/sessionList.js";
import { tool$sessionSnapshotSessionSessionSessionIdSnapshotPost } from "./tools/sessionSnapshotSessionSessionSessionIdSnapshotPost.js";

export function createMCPServer(deps: {
  logger: ConsoleLogger;
  allowedTools?: string[] | undefined;
  scopes?: MCPScope[] | undefined;
  serverURL?: string | undefined;
  bearer?: SDKOptions["bearer"] | undefined;
  serverIdx?: SDKOptions["serverIdx"] | undefined;
}) {
  const server = new McpServer({
    name: "ComfyDeploy",
    version: "2.1.0",
  });

  const client = new ComfyDeployCore({
    bearer: deps.bearer,
    serverURL: deps.serverURL,
    serverIdx: deps.serverIdx,
  });

  const scopes = new Set(deps.scopes ?? mcpScopes);

  const allowedTools = deps.allowedTools && new Set(deps.allowedTools);
  const tool = createRegisterTool(
    deps.logger,
    server,
    client,
    scopes,
    allowedTools,
  );
  const resource = createRegisterResource(deps.logger, server, client, scopes);
  const resourceTemplate = createRegisterResourceTemplate(
    deps.logger,
    server,
    client,
    scopes,
  );
  const prompt = createRegisterPrompt(deps.logger, server, client, scopes);
  const register = { tool, resource, resourceTemplate, prompt };
  void register; // suppress unused warnings

  tool(tool$runGet);
  tool(tool$runCancelRunRunRunIdCancelPost);
  tool(tool$sessionGet);
  tool(tool$sessionCancel);
  tool(tool$sessionList);
  tool(tool$sessionIncreaseTimeoutSessionIncreaseTimeoutPost);
  tool(tool$sessionIncreaseTimeout2SessionSessionIdIncreaseTimeoutPost);
  tool(tool$sessionCreate);
  tool(tool$sessionSnapshotSessionSessionSessionIdSnapshotPost);
  tool(tool$deploymentsCreate);
  tool(tool$deploymentsUpdate);
  tool(tool$deploymentsGet);
  tool(tool$deploymentsList);
  tool(tool$deploymentsGetShareDeploymentShareUsernameSlugGet);
  tool(tool$deploymentsGetFeaturedDeploymentsDeploymentsFeaturedGet);
  tool(tool$deploymentsDeactivate);
  tool(tool$fileUpload);
  tool(tool$fileCreateFolderAssetsFolderPost);
  tool(tool$fileListAssetsAssetsGet);
  tool(tool$fileDeleteAssetAssetsAssetIdDelete);
  tool(tool$fileGetAssetAssetsAssetIdGet);
  tool(tool$fileUploadAssetFileAssetsUploadPost);
  tool(tool$modelsPublicModelsModelsGet);
  tool(tool$searchSearchSearchModelGet);
  tool(tool$runDeploymentQueue);
  tool(tool$runDeploymentSync);
  tool(tool$runDeploymentStream);
  tool(tool$runWorkflowQueue);
  tool(tool$runWorkflowSync);
  tool(tool$runWorkflowStream);

  return server;
}
