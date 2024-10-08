/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { runGetRunRunRunIdGet } from "../funcs/runGetRunRunRunIdGet.js";
import { runQueue } from "../funcs/runQueue.js";
import { runStream } from "../funcs/runStream.js";
import { runSync } from "../funcs/runSync.js";
import { EventStream } from "../lib/event-streams.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Run extends ClientSDK {
  /**
   * Get Run
   */
  async getRunRunRunIdGet(
    request: operations.GetRunRunRunIdGetRequest,
    options?: RequestOptions,
  ): Promise<components.WorkflowRunModel> {
    return unwrapAsync(runGetRunRunRunIdGet(
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
   */
  async sync(
    request: operations.CreateRunSyncRunSyncPostData,
    options?: RequestOptions,
  ): Promise<Array<components.ApiRoutesTypesWorkflowRunOutputModel2>> {
    return unwrapAsync(runSync(
      this,
      request,
      options,
    ));
  }

  /**
   * Run a workflow in stream
   *
   * @remarks
   * Create a new workflow run with the given parameters. This function sets up the run and initiates the execution process. For callback information, see [Callbacks](#tag/callbacks/POST/\{callback_url\}).
   */
  async stream(
    request: operations.CreateRunStreamRunStreamPostData,
    options?: RequestOptions,
  ): Promise<EventStream<components.RunStream>> {
    return unwrapAsync(runStream(
      this,
      request,
      options,
    ));
  }
}
