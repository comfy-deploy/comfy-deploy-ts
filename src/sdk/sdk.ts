/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { DeploymentRuns } from "./deploymentruns.js";
import { Deployments } from "./deployments.js";
import { Files } from "./files.js";
import { Models } from "./models.js";
import { Run } from "./run.js";
import { RunDeployment } from "./rundeployment.js";
import { Runs } from "./runs.js";
import { RunWorkflow } from "./runworkflow.js";
import { Search } from "./search.js";
import { Session } from "./session.js";
import { Sessions } from "./sessions.js";
import { WorkflowRuns } from "./workflowruns.js";

export class ComfyDeploy extends ClientSDK {
  private _run?: Run;
  get run(): Run {
    return (this._run ??= new Run(this._options));
  }

  private _runDeployment?: RunDeployment;
  get runDeployment(): RunDeployment {
    return (this._runDeployment ??= new RunDeployment(this._options));
  }

  private _deploymentRuns?: DeploymentRuns;
  get deploymentRuns(): DeploymentRuns {
    return (this._deploymentRuns ??= new DeploymentRuns(this._options));
  }

  private _runWorkflow?: RunWorkflow;
  get runWorkflow(): RunWorkflow {
    return (this._runWorkflow ??= new RunWorkflow(this._options));
  }

  private _workflowRuns?: WorkflowRuns;
  get workflowRuns(): WorkflowRuns {
    return (this._workflowRuns ??= new WorkflowRuns(this._options));
  }

  private _runs?: Runs;
  get runs(): Runs {
    return (this._runs ??= new Runs(this._options));
  }

  private _session?: Session;
  get session(): Session {
    return (this._session ??= new Session(this._options));
  }

  private _sessions?: Sessions;
  get sessions(): Sessions {
    return (this._sessions ??= new Sessions(this._options));
  }

  private _deployments?: Deployments;
  get deployments(): Deployments {
    return (this._deployments ??= new Deployments(this._options));
  }

  private _files?: Files;
  get files(): Files {
    return (this._files ??= new Files(this._options));
  }

  private _models?: Models;
  get models(): Models {
    return (this._models ??= new Models(this._options));
  }

  private _search?: Search;
  get search(): Search {
    return (this._search ??= new Search(this._options));
  }
}
