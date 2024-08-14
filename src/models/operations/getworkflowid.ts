/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetWorkflowIdRequest = {
    id: string;
};

/**
 * Retrieve the output
 */
export type GetWorkflowIdResponseBody = {
    workflowId: string;
    id: string;
    workflow?: any | undefined;
    workflowApi?: any | undefined;
    userId: string | null;
    comment: string | null;
    version: number;
    snapshot?: any | undefined;
    dependencies?: any | undefined;
    createdAt: string;
    updatedAt: string;
};

/** @internal */
export const GetWorkflowIdRequest$inboundSchema: z.ZodType<
    GetWorkflowIdRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type GetWorkflowIdRequest$Outbound = {
    id: string;
};

/** @internal */
export const GetWorkflowIdRequest$outboundSchema: z.ZodType<
    GetWorkflowIdRequest$Outbound,
    z.ZodTypeDef,
    GetWorkflowIdRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowIdRequest$ {
    /** @deprecated use `GetWorkflowIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowIdRequest$inboundSchema;
    /** @deprecated use `GetWorkflowIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowIdRequest$outboundSchema;
    /** @deprecated use `GetWorkflowIdRequest$Outbound` instead. */
    export type Outbound = GetWorkflowIdRequest$Outbound;
}

/** @internal */
export const GetWorkflowIdResponseBody$inboundSchema: z.ZodType<
    GetWorkflowIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        workflow_id: z.string(),
        id: z.string(),
        workflow: z.any().optional(),
        workflow_api: z.any().optional(),
        user_id: z.nullable(z.string()),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.any().optional(),
        dependencies: z.any().optional(),
        created_at: z.string(),
        updated_at: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            workflow_id: "workflowId",
            workflow_api: "workflowApi",
            user_id: "userId",
            created_at: "createdAt",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type GetWorkflowIdResponseBody$Outbound = {
    workflow_id: string;
    id: string;
    workflow?: any | undefined;
    workflow_api?: any | undefined;
    user_id: string | null;
    comment: string | null;
    version: number;
    snapshot?: any | undefined;
    dependencies?: any | undefined;
    created_at: string;
    updated_at: string;
};

/** @internal */
export const GetWorkflowIdResponseBody$outboundSchema: z.ZodType<
    GetWorkflowIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetWorkflowIdResponseBody
> = z
    .object({
        workflowId: z.string(),
        id: z.string(),
        workflow: z.any().optional(),
        workflowApi: z.any().optional(),
        userId: z.nullable(z.string()),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.any().optional(),
        dependencies: z.any().optional(),
        createdAt: z.string(),
        updatedAt: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            workflowId: "workflow_id",
            workflowApi: "workflow_api",
            userId: "user_id",
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowIdResponseBody$ {
    /** @deprecated use `GetWorkflowIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowIdResponseBody$inboundSchema;
    /** @deprecated use `GetWorkflowIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowIdResponseBody$outboundSchema;
    /** @deprecated use `GetWorkflowIdResponseBody$Outbound` instead. */
    export type Outbound = GetWorkflowIdResponseBody$Outbound;
}
