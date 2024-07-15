/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetApiWorkflowIdRequest = {
    id: string;
};

export type GetApiWorkflowIdWorkflow = {};

export type GetApiWorkflowIdWorkflowApi = {};

export type GetApiWorkflowIdSnapshot = {};

export type GetApiWorkflowIdDependencies = {};

/**
 * Retrieve the output
 */
export type GetApiWorkflowIdResponseBody = {
    workflowId: string;
    id: string;
    workflow: GetApiWorkflowIdWorkflow;
    workflowApi: GetApiWorkflowIdWorkflowApi;
    userId: string | null;
    comment: string | null;
    version: number;
    snapshot: GetApiWorkflowIdSnapshot;
    dependencies: GetApiWorkflowIdDependencies;
    createdAt: string;
    updatedAt: string;
};

/** @internal */
export const GetApiWorkflowIdRequest$inboundSchema: z.ZodType<
    GetApiWorkflowIdRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type GetApiWorkflowIdRequest$Outbound = {
    id: string;
};

/** @internal */
export const GetApiWorkflowIdRequest$outboundSchema: z.ZodType<
    GetApiWorkflowIdRequest$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowIdRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiWorkflowIdRequest$ {
    /** @deprecated use `GetApiWorkflowIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowIdRequest$inboundSchema;
    /** @deprecated use `GetApiWorkflowIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowIdRequest$outboundSchema;
    /** @deprecated use `GetApiWorkflowIdRequest$Outbound` instead. */
    export type Outbound = GetApiWorkflowIdRequest$Outbound;
}

/** @internal */
export const GetApiWorkflowIdWorkflow$inboundSchema: z.ZodType<
    GetApiWorkflowIdWorkflow,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetApiWorkflowIdWorkflow$Outbound = {};

/** @internal */
export const GetApiWorkflowIdWorkflow$outboundSchema: z.ZodType<
    GetApiWorkflowIdWorkflow$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowIdWorkflow
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiWorkflowIdWorkflow$ {
    /** @deprecated use `GetApiWorkflowIdWorkflow$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowIdWorkflow$inboundSchema;
    /** @deprecated use `GetApiWorkflowIdWorkflow$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowIdWorkflow$outboundSchema;
    /** @deprecated use `GetApiWorkflowIdWorkflow$Outbound` instead. */
    export type Outbound = GetApiWorkflowIdWorkflow$Outbound;
}

/** @internal */
export const GetApiWorkflowIdWorkflowApi$inboundSchema: z.ZodType<
    GetApiWorkflowIdWorkflowApi,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetApiWorkflowIdWorkflowApi$Outbound = {};

/** @internal */
export const GetApiWorkflowIdWorkflowApi$outboundSchema: z.ZodType<
    GetApiWorkflowIdWorkflowApi$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowIdWorkflowApi
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiWorkflowIdWorkflowApi$ {
    /** @deprecated use `GetApiWorkflowIdWorkflowApi$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowIdWorkflowApi$inboundSchema;
    /** @deprecated use `GetApiWorkflowIdWorkflowApi$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowIdWorkflowApi$outboundSchema;
    /** @deprecated use `GetApiWorkflowIdWorkflowApi$Outbound` instead. */
    export type Outbound = GetApiWorkflowIdWorkflowApi$Outbound;
}

/** @internal */
export const GetApiWorkflowIdSnapshot$inboundSchema: z.ZodType<
    GetApiWorkflowIdSnapshot,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetApiWorkflowIdSnapshot$Outbound = {};

/** @internal */
export const GetApiWorkflowIdSnapshot$outboundSchema: z.ZodType<
    GetApiWorkflowIdSnapshot$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowIdSnapshot
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiWorkflowIdSnapshot$ {
    /** @deprecated use `GetApiWorkflowIdSnapshot$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowIdSnapshot$inboundSchema;
    /** @deprecated use `GetApiWorkflowIdSnapshot$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowIdSnapshot$outboundSchema;
    /** @deprecated use `GetApiWorkflowIdSnapshot$Outbound` instead. */
    export type Outbound = GetApiWorkflowIdSnapshot$Outbound;
}

/** @internal */
export const GetApiWorkflowIdDependencies$inboundSchema: z.ZodType<
    GetApiWorkflowIdDependencies,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetApiWorkflowIdDependencies$Outbound = {};

/** @internal */
export const GetApiWorkflowIdDependencies$outboundSchema: z.ZodType<
    GetApiWorkflowIdDependencies$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowIdDependencies
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiWorkflowIdDependencies$ {
    /** @deprecated use `GetApiWorkflowIdDependencies$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowIdDependencies$inboundSchema;
    /** @deprecated use `GetApiWorkflowIdDependencies$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowIdDependencies$outboundSchema;
    /** @deprecated use `GetApiWorkflowIdDependencies$Outbound` instead. */
    export type Outbound = GetApiWorkflowIdDependencies$Outbound;
}

/** @internal */
export const GetApiWorkflowIdResponseBody$inboundSchema: z.ZodType<
    GetApiWorkflowIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        workflow_id: z.string(),
        id: z.string(),
        workflow: z.lazy(() => GetApiWorkflowIdWorkflow$inboundSchema),
        workflow_api: z.lazy(() => GetApiWorkflowIdWorkflowApi$inboundSchema),
        user_id: z.nullable(z.string()),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.lazy(() => GetApiWorkflowIdSnapshot$inboundSchema),
        dependencies: z.lazy(() => GetApiWorkflowIdDependencies$inboundSchema),
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
export type GetApiWorkflowIdResponseBody$Outbound = {
    workflow_id: string;
    id: string;
    workflow: GetApiWorkflowIdWorkflow$Outbound;
    workflow_api: GetApiWorkflowIdWorkflowApi$Outbound;
    user_id: string | null;
    comment: string | null;
    version: number;
    snapshot: GetApiWorkflowIdSnapshot$Outbound;
    dependencies: GetApiWorkflowIdDependencies$Outbound;
    created_at: string;
    updated_at: string;
};

/** @internal */
export const GetApiWorkflowIdResponseBody$outboundSchema: z.ZodType<
    GetApiWorkflowIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiWorkflowIdResponseBody
> = z
    .object({
        workflowId: z.string(),
        id: z.string(),
        workflow: z.lazy(() => GetApiWorkflowIdWorkflow$outboundSchema),
        workflowApi: z.lazy(() => GetApiWorkflowIdWorkflowApi$outboundSchema),
        userId: z.nullable(z.string()),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.lazy(() => GetApiWorkflowIdSnapshot$outboundSchema),
        dependencies: z.lazy(() => GetApiWorkflowIdDependencies$outboundSchema),
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
export namespace GetApiWorkflowIdResponseBody$ {
    /** @deprecated use `GetApiWorkflowIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiWorkflowIdResponseBody$inboundSchema;
    /** @deprecated use `GetApiWorkflowIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiWorkflowIdResponseBody$outboundSchema;
    /** @deprecated use `GetApiWorkflowIdResponseBody$Outbound` instead. */
    export type Outbound = GetApiWorkflowIdResponseBody$Outbound;
}