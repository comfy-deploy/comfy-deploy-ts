/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { validateWebhook } from "../funcs/validateWebhook.js";
import { ClientSDK } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Callbacks } from "./callbacks.js";
import { Deployments } from "./deployments.js";
import { FileT } from "./file.js";
import { Models } from "./models.js";
import { Run } from "./run.js";
import { Search } from "./search.js";
import { Session } from "./session.js";

export class ComfyDeploy extends ClientSDK {
  private _run?: Run;
  get run(): Run {
    return (this._run ??= new Run(this._options));
  }

  private _session?: Session;
  get session(): Session {
    return (this._session ??= new Session(this._options));
  }

  private _deployments?: Deployments;
  get deployments(): Deployments {
    return (this._deployments ??= new Deployments(this._options));
  }

  private _file?: FileT;
  get file(): FileT {
    return (this._file ??= new FileT(this._options));
  }

  private _models?: Models;
  get models(): Models {
    return (this._models ??= new Models(this._options));
  }

  private _search?: Search;
  get search(): Search {
    return (this._search ??= new Search(this._options));
  }

  private _callbacks?: Callbacks;
  get callbacks(): Callbacks {
    return (this._callbacks ??= new Callbacks(this._options));
  }

  async validateWebhook({
    request,
  }: {
    request: {
      body: string;
      headers: Record<string, string> | Headers;
      url: string;
      method: string;
    } | Request;
  }): Promise<components.WorkflowRunWebhookBody> {
    return unwrapAsync(validateWebhook(
      this,
      { request },
    ));
  }
}
