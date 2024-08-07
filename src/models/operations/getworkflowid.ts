/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetWorkflowIdRequest = {
    id: string;
};

export type GetWorkflowIdWorkflow = {};

export type GetWorkflowIdWorkflowApi = {};

export type GetWorkflowIdSnapshot = {};

export type GetWorkflowIdDependencies = {};

/**
 * Retrieve the output
 */
export type GetWorkflowIdResponseBody = {
    workflowId: string;
    id: string;
    workflow: GetWorkflowIdWorkflow;
    workflowApi: GetWorkflowIdWorkflowApi;
    userId: string | null;
    comment: string | null;
    version: number;
    snapshot: GetWorkflowIdSnapshot;
    dependencies: GetWorkflowIdDependencies;
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
export const GetWorkflowIdWorkflow$inboundSchema: z.ZodType<
    GetWorkflowIdWorkflow,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetWorkflowIdWorkflow$Outbound = {};

/** @internal */
export const GetWorkflowIdWorkflow$outboundSchema: z.ZodType<
    GetWorkflowIdWorkflow$Outbound,
    z.ZodTypeDef,
    GetWorkflowIdWorkflow
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowIdWorkflow$ {
    /** @deprecated use `GetWorkflowIdWorkflow$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowIdWorkflow$inboundSchema;
    /** @deprecated use `GetWorkflowIdWorkflow$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowIdWorkflow$outboundSchema;
    /** @deprecated use `GetWorkflowIdWorkflow$Outbound` instead. */
    export type Outbound = GetWorkflowIdWorkflow$Outbound;
}

/** @internal */
export const GetWorkflowIdWorkflowApi$inboundSchema: z.ZodType<
    GetWorkflowIdWorkflowApi,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetWorkflowIdWorkflowApi$Outbound = {};

/** @internal */
export const GetWorkflowIdWorkflowApi$outboundSchema: z.ZodType<
    GetWorkflowIdWorkflowApi$Outbound,
    z.ZodTypeDef,
    GetWorkflowIdWorkflowApi
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowIdWorkflowApi$ {
    /** @deprecated use `GetWorkflowIdWorkflowApi$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowIdWorkflowApi$inboundSchema;
    /** @deprecated use `GetWorkflowIdWorkflowApi$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowIdWorkflowApi$outboundSchema;
    /** @deprecated use `GetWorkflowIdWorkflowApi$Outbound` instead. */
    export type Outbound = GetWorkflowIdWorkflowApi$Outbound;
}

/** @internal */
export const GetWorkflowIdSnapshot$inboundSchema: z.ZodType<
    GetWorkflowIdSnapshot,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetWorkflowIdSnapshot$Outbound = {};

/** @internal */
export const GetWorkflowIdSnapshot$outboundSchema: z.ZodType<
    GetWorkflowIdSnapshot$Outbound,
    z.ZodTypeDef,
    GetWorkflowIdSnapshot
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowIdSnapshot$ {
    /** @deprecated use `GetWorkflowIdSnapshot$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowIdSnapshot$inboundSchema;
    /** @deprecated use `GetWorkflowIdSnapshot$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowIdSnapshot$outboundSchema;
    /** @deprecated use `GetWorkflowIdSnapshot$Outbound` instead. */
    export type Outbound = GetWorkflowIdSnapshot$Outbound;
}

/** @internal */
export const GetWorkflowIdDependencies$inboundSchema: z.ZodType<
    GetWorkflowIdDependencies,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetWorkflowIdDependencies$Outbound = {};

/** @internal */
export const GetWorkflowIdDependencies$outboundSchema: z.ZodType<
    GetWorkflowIdDependencies$Outbound,
    z.ZodTypeDef,
    GetWorkflowIdDependencies
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkflowIdDependencies$ {
    /** @deprecated use `GetWorkflowIdDependencies$inboundSchema` instead. */
    export const inboundSchema = GetWorkflowIdDependencies$inboundSchema;
    /** @deprecated use `GetWorkflowIdDependencies$outboundSchema` instead. */
    export const outboundSchema = GetWorkflowIdDependencies$outboundSchema;
    /** @deprecated use `GetWorkflowIdDependencies$Outbound` instead. */
    export type Outbound = GetWorkflowIdDependencies$Outbound;
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
        workflow: z.lazy(() => GetWorkflowIdWorkflow$inboundSchema),
        workflow_api: z.lazy(() => GetWorkflowIdWorkflowApi$inboundSchema),
        user_id: z.nullable(z.string()),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.lazy(() => GetWorkflowIdSnapshot$inboundSchema),
        dependencies: z.lazy(() => GetWorkflowIdDependencies$inboundSchema),
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
    workflow: GetWorkflowIdWorkflow$Outbound;
    workflow_api: GetWorkflowIdWorkflowApi$Outbound;
    user_id: string | null;
    comment: string | null;
    version: number;
    snapshot: GetWorkflowIdSnapshot$Outbound;
    dependencies: GetWorkflowIdDependencies$Outbound;
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
        workflow: z.lazy(() => GetWorkflowIdWorkflow$outboundSchema),
        workflowApi: z.lazy(() => GetWorkflowIdWorkflowApi$outboundSchema),
        userId: z.nullable(z.string()),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.lazy(() => GetWorkflowIdSnapshot$outboundSchema),
        dependencies: z.lazy(() => GetWorkflowIdDependencies$outboundSchema),
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
