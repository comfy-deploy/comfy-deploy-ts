/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Gpu = {
    T4: "T4",
    L4: "L4",
    A10G: "A10G",
    A100: "A100",
    H100: "H100",
} as const;
export type Gpu = ClosedEnum<typeof Gpu>;

export const RunOrigin = {
    Manual: "manual",
    Api: "api",
    PublicShare: "public-share",
    PublicTemplate: "public-template",
    Workspace: "workspace",
} as const;
export type RunOrigin = ClosedEnum<typeof RunOrigin>;

export type Inputs = string | number;

/**
 * Run options
 */
export type PostRunRequestBody = {
    /**
     * Deployment ID to run
     */
    deploymentId?: string | undefined;
    /**
     * Workflow API JSON to run
     */
    workflowApi?: any | undefined;
    /**
     * Workflow API JSON to run
     */
    workflowApiJson?: string | undefined;
    /**
     * Workflow ID to run
     */
    workflowId?: string | undefined;
    machineId?: string | undefined;
    gpu?: Gpu | undefined;
    concurrencyLimit?: number | undefined;
    privateVolumeName?: string | undefined;
    timeout?: number | undefined;
    runOrigin?: RunOrigin | undefined;
    /**
     * External inputs to the workflow
     */
    inputs?: { [k: string]: string | number } | undefined;
    /**
     * External inputs to the workflow in JSON format
     */
    inputsJson?: string | undefined;
    /**
     * Webhook URL to receive workflow updates
     */
    webhook?: string | undefined;
    /**
     * Whether to send webhook on intermediate status
     */
    webhookIntermediateStatus?: boolean | undefined;
    /**
     * Whether to return a streaming url
     */
    stream?: boolean | undefined;
    /**
     * Batch number to run
     */
    batchNumber?: number | undefined;
};

/**
 * Workflow queued
 */
export type PostRunResponseBody = {
    runId: string;
};

/** @internal */
export const Gpu$inboundSchema: z.ZodNativeEnum<typeof Gpu> = z.nativeEnum(Gpu);

/** @internal */
export const Gpu$outboundSchema: z.ZodNativeEnum<typeof Gpu> = Gpu$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Gpu$ {
    /** @deprecated use `Gpu$inboundSchema` instead. */
    export const inboundSchema = Gpu$inboundSchema;
    /** @deprecated use `Gpu$outboundSchema` instead. */
    export const outboundSchema = Gpu$outboundSchema;
}

/** @internal */
export const RunOrigin$inboundSchema: z.ZodNativeEnum<typeof RunOrigin> = z.nativeEnum(RunOrigin);

/** @internal */
export const RunOrigin$outboundSchema: z.ZodNativeEnum<typeof RunOrigin> = RunOrigin$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RunOrigin$ {
    /** @deprecated use `RunOrigin$inboundSchema` instead. */
    export const inboundSchema = RunOrigin$inboundSchema;
    /** @deprecated use `RunOrigin$outboundSchema` instead. */
    export const outboundSchema = RunOrigin$outboundSchema;
}

/** @internal */
export const Inputs$inboundSchema: z.ZodType<Inputs, z.ZodTypeDef, unknown> = z.union([
    z.string(),
    z.number(),
]);

/** @internal */
export type Inputs$Outbound = string | number;

/** @internal */
export const Inputs$outboundSchema: z.ZodType<Inputs$Outbound, z.ZodTypeDef, Inputs> = z.union([
    z.string(),
    z.number(),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Inputs$ {
    /** @deprecated use `Inputs$inboundSchema` instead. */
    export const inboundSchema = Inputs$inboundSchema;
    /** @deprecated use `Inputs$outboundSchema` instead. */
    export const outboundSchema = Inputs$outboundSchema;
    /** @deprecated use `Inputs$Outbound` instead. */
    export type Outbound = Inputs$Outbound;
}

/** @internal */
export const PostRunRequestBody$inboundSchema: z.ZodType<
    PostRunRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        deployment_id: z.string().optional(),
        workflow_api: z.any().optional(),
        workflow_api_json: z.string().optional(),
        workflow_id: z.string().optional(),
        machine_id: z.string().optional(),
        gpu: Gpu$inboundSchema.optional(),
        concurrency_limit: z.number().optional(),
        private_volume_name: z.string().optional(),
        timeout: z.number().optional(),
        run_origin: RunOrigin$inboundSchema.optional(),
        inputs: z.record(z.union([z.string(), z.number()])).optional(),
        inputs_json: z.string().optional(),
        webhook: z.string().optional(),
        webhook_intermediate_status: z.boolean().optional(),
        stream: z.boolean().optional(),
        batch_number: z.number().default(1),
    })
    .transform((v) => {
        return remap$(v, {
            deployment_id: "deploymentId",
            workflow_api: "workflowApi",
            workflow_api_json: "workflowApiJson",
            workflow_id: "workflowId",
            machine_id: "machineId",
            concurrency_limit: "concurrencyLimit",
            private_volume_name: "privateVolumeName",
            run_origin: "runOrigin",
            inputs_json: "inputsJson",
            webhook_intermediate_status: "webhookIntermediateStatus",
            batch_number: "batchNumber",
        });
    });

/** @internal */
export type PostRunRequestBody$Outbound = {
    deployment_id?: string | undefined;
    workflow_api?: any | undefined;
    workflow_api_json?: string | undefined;
    workflow_id?: string | undefined;
    machine_id?: string | undefined;
    gpu?: string | undefined;
    concurrency_limit?: number | undefined;
    private_volume_name?: string | undefined;
    timeout?: number | undefined;
    run_origin?: string | undefined;
    inputs?: { [k: string]: string | number } | undefined;
    inputs_json?: string | undefined;
    webhook?: string | undefined;
    webhook_intermediate_status?: boolean | undefined;
    stream?: boolean | undefined;
    batch_number: number;
};

/** @internal */
export const PostRunRequestBody$outboundSchema: z.ZodType<
    PostRunRequestBody$Outbound,
    z.ZodTypeDef,
    PostRunRequestBody
> = z
    .object({
        deploymentId: z.string().optional(),
        workflowApi: z.any().optional(),
        workflowApiJson: z.string().optional(),
        workflowId: z.string().optional(),
        machineId: z.string().optional(),
        gpu: Gpu$outboundSchema.optional(),
        concurrencyLimit: z.number().optional(),
        privateVolumeName: z.string().optional(),
        timeout: z.number().optional(),
        runOrigin: RunOrigin$outboundSchema.optional(),
        inputs: z.record(z.union([z.string(), z.number()])).optional(),
        inputsJson: z.string().optional(),
        webhook: z.string().optional(),
        webhookIntermediateStatus: z.boolean().optional(),
        stream: z.boolean().optional(),
        batchNumber: z.number().default(1),
    })
    .transform((v) => {
        return remap$(v, {
            deploymentId: "deployment_id",
            workflowApi: "workflow_api",
            workflowApiJson: "workflow_api_json",
            workflowId: "workflow_id",
            machineId: "machine_id",
            concurrencyLimit: "concurrency_limit",
            privateVolumeName: "private_volume_name",
            runOrigin: "run_origin",
            inputsJson: "inputs_json",
            webhookIntermediateStatus: "webhook_intermediate_status",
            batchNumber: "batch_number",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostRunRequestBody$ {
    /** @deprecated use `PostRunRequestBody$inboundSchema` instead. */
    export const inboundSchema = PostRunRequestBody$inboundSchema;
    /** @deprecated use `PostRunRequestBody$outboundSchema` instead. */
    export const outboundSchema = PostRunRequestBody$outboundSchema;
    /** @deprecated use `PostRunRequestBody$Outbound` instead. */
    export type Outbound = PostRunRequestBody$Outbound;
}

/** @internal */
export const PostRunResponseBody$inboundSchema: z.ZodType<
    PostRunResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        run_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            run_id: "runId",
        });
    });

/** @internal */
export type PostRunResponseBody$Outbound = {
    run_id: string;
};

/** @internal */
export const PostRunResponseBody$outboundSchema: z.ZodType<
    PostRunResponseBody$Outbound,
    z.ZodTypeDef,
    PostRunResponseBody
> = z
    .object({
        runId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            runId: "run_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostRunResponseBody$ {
    /** @deprecated use `PostRunResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostRunResponseBody$inboundSchema;
    /** @deprecated use `PostRunResponseBody$outboundSchema` instead. */
    export const outboundSchema = PostRunResponseBody$outboundSchema;
    /** @deprecated use `PostRunResponseBody$Outbound` instead. */
    export type Outbound = PostRunResponseBody$Outbound;
}
