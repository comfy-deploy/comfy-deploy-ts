/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  /**
   * Production server
   */
  "https://api.comfydeploy.com/api",
  /**
   * Staging server
   */
  "https://staging.api.comfydeploy.com/api",
  /**
   * Local development server
   */
  "http://localhost:3011/api",
] as const;

export type SDKOptions = {
  bearer?: string | (() => Promise<string>) | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number | undefined;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string | undefined;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const serverIdx = options.serverIdx ?? 0;
    if (serverIdx < 0 || serverIdx >= ServerList.length) {
      throw new Error(`Invalid server index ${serverIdx}`);
    }
    serverURL = ServerList[serverIdx] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "V2",
  sdkVersion: "2.1.0",
  genVersion: "2.560.1",
  userAgent: "speakeasy-sdk/typescript 2.1.0 2.560.1 V2 comfydeploy",
} as const;
