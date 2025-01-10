/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { runGet } from "../funcs/runGet.js";
import { runQueue } from "../funcs/runQueue.js";
import { runSync } from "../funcs/runSync.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Run extends ClientSDK {
  /**
   * Get Run
   */
  async get(
    request: operations.GetRunRunRunIdGetRequest,
    options?: RequestOptions,
  ): Promise<components.WorkflowRunModel> {
    return unwrapAsync(runGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Queue a workflow
   *
   * @remarks
   * Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async queue(
    request: operations.CreateRunQueueRunQueuePostData,
    options?: RequestOptions,
  ): Promise<components.CreateRunResponse> {
    return unwrapAsync(runQueue(
      this,
      request,
      options,
    ));
  }

  /**
   * Run a workflow in sync
   *
   * @remarks
   * Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).
   *
   * @deprecated method: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  async sync(
    request: operations.CreateRunSyncRunSyncPostData,
    options?: RequestOptions,
  ): Promise<Array<components.WorkflowRunOutputModel>> {
    return unwrapAsync(runSync(
      this,
      request,
      options,
    ));
  }
}
