/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetV1MachinesMachineIdRequest = {
    machineId: string;
    extUrls?: string | undefined;
};

/**
 * Specific machine retrieved successfully
 */
export type GetV1MachinesMachineIdResponseBody = {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    status?: string | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    message?: string | undefined;
};

/** @internal */
export const GetV1MachinesMachineIdRequest$inboundSchema: z.ZodType<
    GetV1MachinesMachineIdRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        machine_id: z.string(),
        extUrls: z.string().default("false"),
    })
    .transform((v) => {
        return remap$(v, {
            machine_id: "machineId",
        });
    });

/** @internal */
export type GetV1MachinesMachineIdRequest$Outbound = {
    machine_id: string;
    extUrls: string;
};

/** @internal */
export const GetV1MachinesMachineIdRequest$outboundSchema: z.ZodType<
    GetV1MachinesMachineIdRequest$Outbound,
    z.ZodTypeDef,
    GetV1MachinesMachineIdRequest
> = z
    .object({
        machineId: z.string(),
        extUrls: z.string().default("false"),
    })
    .transform((v) => {
        return remap$(v, {
            machineId: "machine_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1MachinesMachineIdRequest$ {
    /** @deprecated use `GetV1MachinesMachineIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetV1MachinesMachineIdRequest$inboundSchema;
    /** @deprecated use `GetV1MachinesMachineIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetV1MachinesMachineIdRequest$outboundSchema;
    /** @deprecated use `GetV1MachinesMachineIdRequest$Outbound` instead. */
    export type Outbound = GetV1MachinesMachineIdRequest$Outbound;
}

/** @internal */
export const GetV1MachinesMachineIdResponseBody$inboundSchema: z.ZodType<
    GetV1MachinesMachineIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        type: z.string().optional(),
        status: z.string().optional(),
        created_at: z.string().optional(),
        updated_at: z.string().optional(),
        message: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            created_at: "createdAt",
            updated_at: "updatedAt",
        });
    });

/** @internal */
export type GetV1MachinesMachineIdResponseBody$Outbound = {
    id?: string | undefined;
    name?: string | undefined;
    type?: string | undefined;
    status?: string | undefined;
    created_at?: string | undefined;
    updated_at?: string | undefined;
    message?: string | undefined;
};

/** @internal */
export const GetV1MachinesMachineIdResponseBody$outboundSchema: z.ZodType<
    GetV1MachinesMachineIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetV1MachinesMachineIdResponseBody
> = z
    .object({
        id: z.string().optional(),
        name: z.string().optional(),
        type: z.string().optional(),
        status: z.string().optional(),
        createdAt: z.string().optional(),
        updatedAt: z.string().optional(),
        message: z.string().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            updatedAt: "updated_at",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetV1MachinesMachineIdResponseBody$ {
    /** @deprecated use `GetV1MachinesMachineIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetV1MachinesMachineIdResponseBody$inboundSchema;
    /** @deprecated use `GetV1MachinesMachineIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetV1MachinesMachineIdResponseBody$outboundSchema;
    /** @deprecated use `GetV1MachinesMachineIdResponseBody$Outbound` instead. */
    export type Outbound = GetV1MachinesMachineIdResponseBody$Outbound;
}