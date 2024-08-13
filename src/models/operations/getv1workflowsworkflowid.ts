/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetV1WorkflowsWorkflowIdRequest = {
    workflowId: string;
};

export type GetV1WorkflowsWorkflowIdVersions = {
    workflowId: string;
    id: string;
    workflow?: any | undefined;
    workflowApi?: any | undefined;
    comment: string | null;
    version: number;
    snapshot: string | null;
    dependencies: string | null;
    createdAt: string;
    updatedAt: string;
};

/**
 * Specific workflow retrieved successfully
 */
export type GetV1WorkflowsWorkflowIdResponseBody = {
    name: string;
    userId: string;
    orgId?: string | undefined;
    id: string;
    selectedMachineId: string | null;
    createdAt: string;
    updatedAt: string;
    versions: Array<GetV1WorkflowsWorkflowIdVersions>;
};

/** @internal */
export const GetV1WorkflowsWorkflowIdRequest$inboundSchema: z.ZodType<
    GetV1WorkflowsWorkflowIdRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        workflow_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            workflow_id: "workflowId",
        });
    });

/** @internal */
export type GetV1WorkflowsWorkflowIdRequest$Outbound = {
    workflow_id: string;
};

/** @internal */
export const GetV1WorkflowsWorkflowIdRequest$outboundSchema: z.ZodType<
    GetV1WorkflowsWorkflowIdRequest$Outbound,
    z.ZodTypeDef,
    GetV1WorkflowsWorkflowIdRequest
> = z
    .object({
        workflowId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            workflowId: "workflow_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WorkflowsWorkflowIdRequest$ {
    /** @deprecated use `GetV1WorkflowsWorkflowIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetV1WorkflowsWorkflowIdRequest$inboundSchema;
    /** @deprecated use `GetV1WorkflowsWorkflowIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetV1WorkflowsWorkflowIdRequest$outboundSchema;
    /** @deprecated use `GetV1WorkflowsWorkflowIdRequest$Outbound` instead. */
    export type Outbound = GetV1WorkflowsWorkflowIdRequest$Outbound;
}

/** @internal */
export const GetV1WorkflowsWorkflowIdVersions$inboundSchema: z.ZodType<
    GetV1WorkflowsWorkflowIdVersions,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        workflow_id: z.string(),
        id: z.string(),
        workflow: z.any().optional(),
        workflow_api: z.any().optional(),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.nullable(z.string()),
        dependencies: z.nullable(z.string()),
        created_at: z.string(),
        updated_at: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            workflow_id: "workflowId",
            workflow_api: "workflowApi",
            created_at: "createdAt",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type GetV1WorkflowsWorkflowIdVersions$Outbound = {
    workflow_id: string;
    id: string;
    workflow?: any | undefined;
    workflow_api?: any | undefined;
    comment: string | null;
    version: number;
    snapshot: string | null;
    dependencies: string | null;
    created_at: string;
    updated_at: string;
};

/** @internal */
export const GetV1WorkflowsWorkflowIdVersions$outboundSchema: z.ZodType<
    GetV1WorkflowsWorkflowIdVersions$Outbound,
    z.ZodTypeDef,
    GetV1WorkflowsWorkflowIdVersions
> = z
    .object({
        workflowId: z.string(),
        id: z.string(),
        workflow: z.any().optional(),
        workflowApi: z.any().optional(),
        comment: z.nullable(z.string()),
        version: z.number(),
        snapshot: z.nullable(z.string()),
        dependencies: z.nullable(z.string()),
        createdAt: z.string(),
        updatedAt: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            workflowId: "workflow_id",
            workflowApi: "workflow_api",
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WorkflowsWorkflowIdVersions$ {
    /** @deprecated use `GetV1WorkflowsWorkflowIdVersions$inboundSchema` instead. */
    export const inboundSchema = GetV1WorkflowsWorkflowIdVersions$inboundSchema;
    /** @deprecated use `GetV1WorkflowsWorkflowIdVersions$outboundSchema` instead. */
    export const outboundSchema = GetV1WorkflowsWorkflowIdVersions$outboundSchema;
    /** @deprecated use `GetV1WorkflowsWorkflowIdVersions$Outbound` instead. */
    export type Outbound = GetV1WorkflowsWorkflowIdVersions$Outbound;
}

/** @internal */
export const GetV1WorkflowsWorkflowIdResponseBody$inboundSchema: z.ZodType<
    GetV1WorkflowsWorkflowIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        name: z.string(),
        user_id: z.string(),
        org_id: z.string().optional(),
        id: z.string(),
        selected_machine_id: z.nullable(z.string()),
        created_at: z.string(),
        updated_at: z.string(),
        versions: z.array(z.lazy(() => GetV1WorkflowsWorkflowIdVersions$inboundSchema)),
    })
    .transform((v) => {
        return remap$(v, {
            user_id: "userId",
            org_id: "orgId",
            selected_machine_id: "selectedMachineId",
            created_at: "createdAt",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type GetV1WorkflowsWorkflowIdResponseBody$Outbound = {
    name: string;
    user_id: string;
    org_id?: string | undefined;
    id: string;
    selected_machine_id: string | null;
    created_at: string;
    updated_at: string;
    versions: Array<GetV1WorkflowsWorkflowIdVersions$Outbound>;
};

/** @internal */
export const GetV1WorkflowsWorkflowIdResponseBody$outboundSchema: z.ZodType<
    GetV1WorkflowsWorkflowIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetV1WorkflowsWorkflowIdResponseBody
> = z
    .object({
        name: z.string(),
        userId: z.string(),
        orgId: z.string().optional(),
        id: z.string(),
        selectedMachineId: z.nullable(z.string()),
        createdAt: z.string(),
        updatedAt: z.string(),
        versions: z.array(z.lazy(() => GetV1WorkflowsWorkflowIdVersions$outboundSchema)),
    })
    .transform((v) => {
        return remap$(v, {
            userId: "user_id",
            orgId: "org_id",
            selectedMachineId: "selected_machine_id",
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1WorkflowsWorkflowIdResponseBody$ {
    /** @deprecated use `GetV1WorkflowsWorkflowIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetV1WorkflowsWorkflowIdResponseBody$inboundSchema;
    /** @deprecated use `GetV1WorkflowsWorkflowIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetV1WorkflowsWorkflowIdResponseBody$outboundSchema;
    /** @deprecated use `GetV1WorkflowsWorkflowIdResponseBody$Outbound` instead. */
    export type Outbound = GetV1WorkflowsWorkflowIdResponseBody$Outbound;
}
