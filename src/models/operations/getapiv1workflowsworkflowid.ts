/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetApiV1WorkflowsWorkflowIdRequest = {
    workflowId: string;
};

export type GetApiV1WorkflowsWorkflowIdVersions = {
    workflowId: string;
    id: string;
    workflow?: any | null | undefined;
    workflowApi?: any | null | undefined;
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
export type GetApiV1WorkflowsWorkflowIdResponseBody = {
    name: string;
    userId: string;
    orgId?: string | undefined;
    id: string;
    selectedMachineId: string | null;
    createdAt: string;
    updatedAt: string;
    versions: Array<GetApiV1WorkflowsWorkflowIdVersions>;
};

/** @internal */
export const GetApiV1WorkflowsWorkflowIdRequest$inboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdRequest,
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
export type GetApiV1WorkflowsWorkflowIdRequest$Outbound = {
    workflow_id: string;
};

/** @internal */
export const GetApiV1WorkflowsWorkflowIdRequest$outboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdRequest$Outbound,
    z.ZodTypeDef,
    GetApiV1WorkflowsWorkflowIdRequest
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
export namespace GetApiV1WorkflowsWorkflowIdRequest$ {
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetApiV1WorkflowsWorkflowIdRequest$inboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetApiV1WorkflowsWorkflowIdRequest$outboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdRequest$Outbound` instead. */
    export type Outbound = GetApiV1WorkflowsWorkflowIdRequest$Outbound;
}

/** @internal */
export const GetApiV1WorkflowsWorkflowIdVersions$inboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdVersions,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        workflow_id: z.string(),
        id: z.string(),
        workflow: z.nullable(z.any()).optional(),
        workflow_api: z.nullable(z.any()).optional(),
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
export type GetApiV1WorkflowsWorkflowIdVersions$Outbound = {
    workflow_id: string;
    id: string;
    workflow?: any | null | undefined;
    workflow_api?: any | null | undefined;
    comment: string | null;
    version: number;
    snapshot: string | null;
    dependencies: string | null;
    created_at: string;
    updated_at: string;
};

/** @internal */
export const GetApiV1WorkflowsWorkflowIdVersions$outboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdVersions$Outbound,
    z.ZodTypeDef,
    GetApiV1WorkflowsWorkflowIdVersions
> = z
    .object({
        workflowId: z.string(),
        id: z.string(),
        workflow: z.nullable(z.any()).optional(),
        workflowApi: z.nullable(z.any()).optional(),
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
export namespace GetApiV1WorkflowsWorkflowIdVersions$ {
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdVersions$inboundSchema` instead. */
    export const inboundSchema = GetApiV1WorkflowsWorkflowIdVersions$inboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdVersions$outboundSchema` instead. */
    export const outboundSchema = GetApiV1WorkflowsWorkflowIdVersions$outboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdVersions$Outbound` instead. */
    export type Outbound = GetApiV1WorkflowsWorkflowIdVersions$Outbound;
}

/** @internal */
export const GetApiV1WorkflowsWorkflowIdResponseBody$inboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdResponseBody,
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
        versions: z.array(z.lazy(() => GetApiV1WorkflowsWorkflowIdVersions$inboundSchema)),
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
export type GetApiV1WorkflowsWorkflowIdResponseBody$Outbound = {
    name: string;
    user_id: string;
    org_id?: string | undefined;
    id: string;
    selected_machine_id: string | null;
    created_at: string;
    updated_at: string;
    versions: Array<GetApiV1WorkflowsWorkflowIdVersions$Outbound>;
};

/** @internal */
export const GetApiV1WorkflowsWorkflowIdResponseBody$outboundSchema: z.ZodType<
    GetApiV1WorkflowsWorkflowIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiV1WorkflowsWorkflowIdResponseBody
> = z
    .object({
        name: z.string(),
        userId: z.string(),
        orgId: z.string().optional(),
        id: z.string(),
        selectedMachineId: z.nullable(z.string()),
        createdAt: z.string(),
        updatedAt: z.string(),
        versions: z.array(z.lazy(() => GetApiV1WorkflowsWorkflowIdVersions$outboundSchema)),
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
export namespace GetApiV1WorkflowsWorkflowIdResponseBody$ {
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiV1WorkflowsWorkflowIdResponseBody$inboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiV1WorkflowsWorkflowIdResponseBody$outboundSchema;
    /** @deprecated use `GetApiV1WorkflowsWorkflowIdResponseBody$Outbound` instead. */
    export type Outbound = GetApiV1WorkflowsWorkflowIdResponseBody$Outbound;
}
