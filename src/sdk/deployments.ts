/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentsCreate } from "../funcs/deploymentsCreate.js";
import { deploymentsDeactivate } from "../funcs/deploymentsDeactivate.js";
import { deploymentsGet } from "../funcs/deploymentsGet.js";
import { deploymentsGetFeaturedDeploymentsDeploymentsFeaturedGet } from "../funcs/deploymentsGetFeaturedDeploymentsDeploymentsFeaturedGet.js";
import { deploymentsGetShareDeploymentShareUsernameSlugGet } from "../funcs/deploymentsGetShareDeploymentShareUsernameSlugGet.js";
import { deploymentsList } from "../funcs/deploymentsList.js";
import { deploymentsUpdate } from "../funcs/deploymentsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Deployments extends ClientSDK {
  /**
   * Create Deployment
   */
  async create(
    request: components.DeploymentCreate,
    options?: RequestOptions,
  ): Promise<components.DeploymentModel> {
    return unwrapAsync(deploymentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Deployment
   */
  async update(
    request: operations.UpdateDeploymentDeploymentDeploymentIdPatchRequest,
    options?: RequestOptions,
  ): Promise<components.DeploymentModel> {
    return unwrapAsync(deploymentsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Deployment
   */
  async get(
    request: operations.GetDeploymentDeploymentDeploymentIdGetRequest,
    options?: RequestOptions,
  ): Promise<components.DeploymentModel> {
    return unwrapAsync(deploymentsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Deployments
   */
  async list(
    request: operations.GetDeploymentsDeploymentsGetRequest,
    options?: RequestOptions,
  ): Promise<Array<components.DeploymentModel>> {
    return unwrapAsync(deploymentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Share Deployment
   */
  async getShareDeploymentShareUsernameSlugGet(
    request: operations.GetShareDeploymentShareUsernameSlugGetRequest,
    options?: RequestOptions,
  ): Promise<components.DeploymentShareModel> {
    return unwrapAsync(deploymentsGetShareDeploymentShareUsernameSlugGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Featured Deployments
   */
  async getFeaturedDeploymentsDeploymentsFeaturedGet(
    options?: RequestOptions,
  ): Promise<Array<components.DeploymentFeaturedModel>> {
    return unwrapAsync(deploymentsGetFeaturedDeploymentsDeploymentsFeaturedGet(
      this,
      options,
    ));
  }

  /**
   * Deactivate Deployment
   */
  async deactivate(
    request:
      operations.DeactivateDeploymentDeploymentDeploymentIdDeactivatePostRequest,
    options?: RequestOptions,
  ): Promise<components.DeploymentModel> {
    return unwrapAsync(deploymentsDeactivate(
      this,
      request,
      options,
    ));
  }
}
