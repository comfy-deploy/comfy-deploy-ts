/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { deploymentGet } from "../funcs/deploymentGet.js";
import { deploymentGetInputDefinition } from "../funcs/deploymentGetInputDefinition.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Deployment extends ClientSDK {
    /**
     * Get comfyui workflow inputs definition
     *
     * @remarks
     * Use this to retrieve comfyui workflow inputs definition by id
     */
    async getInputDefinition(
        request: operations.GetDeploymentIdInputsRequest,
        options?: RequestOptions
    ): Promise<Array<operations.ResponseBody>> {
        return unwrapAsync(deploymentGetInputDefinition(this, request, options));
    }

    /**
     * Get all deployed workflows
     *
     * @remarks
     * Get all deployed workflows
     */
    async get(
        request: operations.GetDeploymentRequest,
        options?: RequestOptions
    ): Promise<Array<operations.GetDeploymentResponseBody>> {
        return unwrapAsync(deploymentGet(this, request, options));
    }
}