/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { comfyuiGetAuthResponseRequestId } from "../funcs/comfyuiGetAuthResponseRequestId.js";
import { comfyuiGetWorkflowId } from "../funcs/comfyuiGetWorkflowId.js";
import { comfyuiGetWorkflowVersionVersionId } from "../funcs/comfyuiGetWorkflowVersionVersionId.js";
import { comfyuiPostWorkflow } from "../funcs/comfyuiPostWorkflow.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Comfyui extends ClientSDK {
    /**
     * Get an API Key with code
     *
     * @remarks
     * This endpoints is specifically built for ComfyUI workflow upload.
     */
    async getAuthResponseRequestId(
        request: operations.GetAuthResponseRequestIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetAuthResponseRequestIdResponse> {
        return unwrapAsync(comfyuiGetAuthResponseRequestId(this, request, options));
    }

    /**
     * Upload workflow from ComfyUI
     *
     * @remarks
     * This endpoints is specifically built for ComfyUI workflow upload.
     */
    async postWorkflow(
        request?: operations.PostWorkflowRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PostWorkflowResponseBody> {
        return unwrapAsync(comfyuiPostWorkflow(this, request, options));
    }

    /**
     * Get comfyui workflow
     *
     * @remarks
     * Use this to retrieve comfyui workflow by id
     */
    async getWorkflowVersionVersionId(
        request: operations.GetWorkflowVersionVersionIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetWorkflowVersionVersionIdResponseBody> {
        return unwrapAsync(comfyuiGetWorkflowVersionVersionId(this, request, options));
    }

    /**
     * Get comfyui workflow
     *
     * @remarks
     * Use this to retrieve comfyui workflow by id
     */
    async getWorkflowId(
        request: operations.GetWorkflowIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetWorkflowIdResponseBody> {
        return unwrapAsync(comfyuiGetWorkflowId(this, request, options));
    }
}
