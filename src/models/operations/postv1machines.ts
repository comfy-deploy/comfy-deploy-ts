/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type PostV1MachinesRequestBody = {
    defaultMachine?: boolean | undefined;
};

export const PostV1MachinesType = {
    ComfyDeployServerless: "comfy-deploy-serverless",
} as const;
export type PostV1MachinesType = ClosedEnum<typeof PostV1MachinesType>;

export const PostV1MachinesStatus = {
    Building: "building",
} as const;
export type PostV1MachinesStatus = ClosedEnum<typeof PostV1MachinesStatus>;

export const PostV1MachinesGpu = {
    A10G: "A10G",
} as const;
export type PostV1MachinesGpu = ClosedEnum<typeof PostV1MachinesGpu>;

/**
 * Machine created successfully
 */
export type PostV1MachinesResponseBody = {
    id: string;
    userId: string;
    name: string;
    orgId: string | null;
    endpoint: string;
    createdAt: string;
    updatedAt: string;
    disabled: boolean;
    type: PostV1MachinesType;
    status: PostV1MachinesStatus;
    machineVersion: string | null;
    machineBuilderVersion: string;
    snapshot?: any | null | undefined;
    models: Array<any>;
    gpu: PostV1MachinesGpu;
    wsGpu?: any | null | undefined;
    podId: string | null;
    baseDockerImage: string | null;
    allowConcurrentInputs: number;
    concurrencyLimit: number;
    legacyMode: boolean;
    wsTimeout: number;
    runTimeout: number;
    idleTimeout: number;
    buildMachineInstanceId: string | null;
    buildLog: string | null;
    modalAppId: string | null;
    objectInfo?: any | null | undefined;
    targetWorkflowId: string | null;
    dependencies?: any | null | undefined;
    extraDockerCommands?: any | null | undefined;
    installCustomNodeWithGpu: boolean;
    deleted: boolean;
    keepWarm: number;
    allowBackgroundVolumeCommits: boolean;
    gpuWorkspace: boolean;
    dockerCommandSteps?: any | null | undefined;
};

/** @internal */
export const PostV1MachinesRequestBody$inboundSchema: z.ZodType<
    PostV1MachinesRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        default_machine: z.boolean().default(true),
    })
    .transform((v) => {
        return remap$(v, {
            default_machine: "defaultMachine",
        });
    });

/** @internal */
export type PostV1MachinesRequestBody$Outbound = {
    default_machine: boolean;
};

/** @internal */
export const PostV1MachinesRequestBody$outboundSchema: z.ZodType<
    PostV1MachinesRequestBody$Outbound,
    z.ZodTypeDef,
    PostV1MachinesRequestBody
> = z
    .object({
        defaultMachine: z.boolean().default(true),
    })
    .transform((v) => {
        return remap$(v, {
            defaultMachine: "default_machine",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1MachinesRequestBody$ {
    /** @deprecated use `PostV1MachinesRequestBody$inboundSchema` instead. */
    export const inboundSchema = PostV1MachinesRequestBody$inboundSchema;
    /** @deprecated use `PostV1MachinesRequestBody$outboundSchema` instead. */
    export const outboundSchema = PostV1MachinesRequestBody$outboundSchema;
    /** @deprecated use `PostV1MachinesRequestBody$Outbound` instead. */
    export type Outbound = PostV1MachinesRequestBody$Outbound;
}

/** @internal */
export const PostV1MachinesType$inboundSchema: z.ZodNativeEnum<typeof PostV1MachinesType> =
    z.nativeEnum(PostV1MachinesType);

/** @internal */
export const PostV1MachinesType$outboundSchema: z.ZodNativeEnum<typeof PostV1MachinesType> =
    PostV1MachinesType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1MachinesType$ {
    /** @deprecated use `PostV1MachinesType$inboundSchema` instead. */
    export const inboundSchema = PostV1MachinesType$inboundSchema;
    /** @deprecated use `PostV1MachinesType$outboundSchema` instead. */
    export const outboundSchema = PostV1MachinesType$outboundSchema;
}

/** @internal */
export const PostV1MachinesStatus$inboundSchema: z.ZodNativeEnum<typeof PostV1MachinesStatus> =
    z.nativeEnum(PostV1MachinesStatus);

/** @internal */
export const PostV1MachinesStatus$outboundSchema: z.ZodNativeEnum<typeof PostV1MachinesStatus> =
    PostV1MachinesStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1MachinesStatus$ {
    /** @deprecated use `PostV1MachinesStatus$inboundSchema` instead. */
    export const inboundSchema = PostV1MachinesStatus$inboundSchema;
    /** @deprecated use `PostV1MachinesStatus$outboundSchema` instead. */
    export const outboundSchema = PostV1MachinesStatus$outboundSchema;
}

/** @internal */
export const PostV1MachinesGpu$inboundSchema: z.ZodNativeEnum<typeof PostV1MachinesGpu> =
    z.nativeEnum(PostV1MachinesGpu);

/** @internal */
export const PostV1MachinesGpu$outboundSchema: z.ZodNativeEnum<typeof PostV1MachinesGpu> =
    PostV1MachinesGpu$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1MachinesGpu$ {
    /** @deprecated use `PostV1MachinesGpu$inboundSchema` instead. */
    export const inboundSchema = PostV1MachinesGpu$inboundSchema;
    /** @deprecated use `PostV1MachinesGpu$outboundSchema` instead. */
    export const outboundSchema = PostV1MachinesGpu$outboundSchema;
}

/** @internal */
export const PostV1MachinesResponseBody$inboundSchema: z.ZodType<
    PostV1MachinesResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        user_id: z.string(),
        name: z.string(),
        org_id: z.nullable(z.string()),
        endpoint: z.string(),
        created_at: z.string(),
        updated_at: z.string(),
        disabled: z.boolean(),
        type: PostV1MachinesType$inboundSchema,
        status: PostV1MachinesStatus$inboundSchema,
        machine_version: z.nullable(z.string()),
        machine_builder_version: z.string(),
        snapshot: z.nullable(z.any()).optional(),
        models: z.array(z.any()),
        gpu: PostV1MachinesGpu$inboundSchema,
        ws_gpu: z.nullable(z.any()).optional(),
        pod_id: z.nullable(z.string()),
        base_docker_image: z.nullable(z.string()),
        allow_concurrent_inputs: z.number(),
        concurrency_limit: z.number(),
        legacy_mode: z.boolean(),
        ws_timeout: z.number(),
        run_timeout: z.number(),
        idle_timeout: z.number(),
        build_machine_instance_id: z.nullable(z.string()),
        build_log: z.nullable(z.string()),
        modal_app_id: z.nullable(z.string()),
        object_info: z.nullable(z.any()).optional(),
        target_workflow_id: z.nullable(z.string()),
        dependencies: z.nullable(z.any()).optional(),
        extra_docker_commands: z.nullable(z.any()).optional(),
        install_custom_node_with_gpu: z.boolean(),
        deleted: z.boolean(),
        keep_warm: z.number(),
        allow_background_volume_commits: z.boolean(),
        gpu_workspace: z.boolean(),
        docker_command_steps: z.nullable(z.any()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            user_id: "userId",
            org_id: "orgId",
            created_at: "createdAt",
            updated_at: "updatedAt",
            machine_version: "machineVersion",
            machine_builder_version: "machineBuilderVersion",
            ws_gpu: "wsGpu",
            pod_id: "podId",
            base_docker_image: "baseDockerImage",
            allow_concurrent_inputs: "allowConcurrentInputs",
            concurrency_limit: "concurrencyLimit",
            legacy_mode: "legacyMode",
            ws_timeout: "wsTimeout",
            run_timeout: "runTimeout",
            idle_timeout: "idleTimeout",
            build_machine_instance_id: "buildMachineInstanceId",
            build_log: "buildLog",
            modal_app_id: "modalAppId",
            object_info: "objectInfo",
            target_workflow_id: "targetWorkflowId",
            extra_docker_commands: "extraDockerCommands",
            install_custom_node_with_gpu: "installCustomNodeWithGpu",
            keep_warm: "keepWarm",
            allow_background_volume_commits: "allowBackgroundVolumeCommits",
            gpu_workspace: "gpuWorkspace",
            docker_command_steps: "dockerCommandSteps",
        });
    });

/** @internal */
export type PostV1MachinesResponseBody$Outbound = {
    id: string;
    user_id: string;
    name: string;
    org_id: string | null;
    endpoint: string;
    created_at: string;
    updated_at: string;
    disabled: boolean;
    type: string;
    status: string;
    machine_version: string | null;
    machine_builder_version: string;
    snapshot?: any | null | undefined;
    models: Array<any>;
    gpu: string;
    ws_gpu?: any | null | undefined;
    pod_id: string | null;
    base_docker_image: string | null;
    allow_concurrent_inputs: number;
    concurrency_limit: number;
    legacy_mode: boolean;
    ws_timeout: number;
    run_timeout: number;
    idle_timeout: number;
    build_machine_instance_id: string | null;
    build_log: string | null;
    modal_app_id: string | null;
    object_info?: any | null | undefined;
    target_workflow_id: string | null;
    dependencies?: any | null | undefined;
    extra_docker_commands?: any | null | undefined;
    install_custom_node_with_gpu: boolean;
    deleted: boolean;
    keep_warm: number;
    allow_background_volume_commits: boolean;
    gpu_workspace: boolean;
    docker_command_steps?: any | null | undefined;
};

/** @internal */
export const PostV1MachinesResponseBody$outboundSchema: z.ZodType<
    PostV1MachinesResponseBody$Outbound,
    z.ZodTypeDef,
    PostV1MachinesResponseBody
> = z
    .object({
        id: z.string(),
        userId: z.string(),
        name: z.string(),
        orgId: z.nullable(z.string()),
        endpoint: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
        disabled: z.boolean(),
        type: PostV1MachinesType$outboundSchema,
        status: PostV1MachinesStatus$outboundSchema,
        machineVersion: z.nullable(z.string()),
        machineBuilderVersion: z.string(),
        snapshot: z.nullable(z.any()).optional(),
        models: z.array(z.any()),
        gpu: PostV1MachinesGpu$outboundSchema,
        wsGpu: z.nullable(z.any()).optional(),
        podId: z.nullable(z.string()),
        baseDockerImage: z.nullable(z.string()),
        allowConcurrentInputs: z.number(),
        concurrencyLimit: z.number(),
        legacyMode: z.boolean(),
        wsTimeout: z.number(),
        runTimeout: z.number(),
        idleTimeout: z.number(),
        buildMachineInstanceId: z.nullable(z.string()),
        buildLog: z.nullable(z.string()),
        modalAppId: z.nullable(z.string()),
        objectInfo: z.nullable(z.any()).optional(),
        targetWorkflowId: z.nullable(z.string()),
        dependencies: z.nullable(z.any()).optional(),
        extraDockerCommands: z.nullable(z.any()).optional(),
        installCustomNodeWithGpu: z.boolean(),
        deleted: z.boolean(),
        keepWarm: z.number(),
        allowBackgroundVolumeCommits: z.boolean(),
        gpuWorkspace: z.boolean(),
        dockerCommandSteps: z.nullable(z.any()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            userId: "user_id",
            orgId: "org_id",
            createdAt: "created_at",
            updatedAt: "updated_at",
            machineVersion: "machine_version",
            machineBuilderVersion: "machine_builder_version",
            wsGpu: "ws_gpu",
            podId: "pod_id",
            baseDockerImage: "base_docker_image",
            allowConcurrentInputs: "allow_concurrent_inputs",
            concurrencyLimit: "concurrency_limit",
            legacyMode: "legacy_mode",
            wsTimeout: "ws_timeout",
            runTimeout: "run_timeout",
            idleTimeout: "idle_timeout",
            buildMachineInstanceId: "build_machine_instance_id",
            buildLog: "build_log",
            modalAppId: "modal_app_id",
            objectInfo: "object_info",
            targetWorkflowId: "target_workflow_id",
            extraDockerCommands: "extra_docker_commands",
            installCustomNodeWithGpu: "install_custom_node_with_gpu",
            keepWarm: "keep_warm",
            allowBackgroundVolumeCommits: "allow_background_volume_commits",
            gpuWorkspace: "gpu_workspace",
            dockerCommandSteps: "docker_command_steps",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostV1MachinesResponseBody$ {
    /** @deprecated use `PostV1MachinesResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostV1MachinesResponseBody$inboundSchema;
    /** @deprecated use `PostV1MachinesResponseBody$outboundSchema` instead. */
    export const outboundSchema = PostV1MachinesResponseBody$outboundSchema;
    /** @deprecated use `PostV1MachinesResponseBody$Outbound` instead. */
    export type Outbound = PostV1MachinesResponseBody$Outbound;
}
