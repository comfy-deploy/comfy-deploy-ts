/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetDeploymentIdInputsRequest = {
    id: string;
};

export type ResponseBody = {
    classType: string;
    inputId: string;
    defaultValue: string;
    minValue: number;
    maxValue: number;
};

/** @internal */
export const GetDeploymentIdInputsRequest$inboundSchema: z.ZodType<
    GetDeploymentIdInputsRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type GetDeploymentIdInputsRequest$Outbound = {
    id: string;
};

/** @internal */
export const GetDeploymentIdInputsRequest$outboundSchema: z.ZodType<
    GetDeploymentIdInputsRequest$Outbound,
    z.ZodTypeDef,
    GetDeploymentIdInputsRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDeploymentIdInputsRequest$ {
    /** @deprecated use `GetDeploymentIdInputsRequest$inboundSchema` instead. */
    export const inboundSchema = GetDeploymentIdInputsRequest$inboundSchema;
    /** @deprecated use `GetDeploymentIdInputsRequest$outboundSchema` instead. */
    export const outboundSchema = GetDeploymentIdInputsRequest$outboundSchema;
    /** @deprecated use `GetDeploymentIdInputsRequest$Outbound` instead. */
    export type Outbound = GetDeploymentIdInputsRequest$Outbound;
}

/** @internal */
export const ResponseBody$inboundSchema: z.ZodType<ResponseBody, z.ZodTypeDef, unknown> = z
    .object({
        class_type: z.string(),
        input_id: z.string(),
        default_value: z.string(),
        min_value: z.number(),
        max_value: z.number(),
    })
    .transform((v) => {
        return remap$(v, {
            class_type: "classType",
            input_id: "inputId",
            default_value: "defaultValue",
            min_value: "minValue",
            max_value: "maxValue",
        });
    });

/** @internal */
export type ResponseBody$Outbound = {
    class_type: string;
    input_id: string;
    default_value: string;
    min_value: number;
    max_value: number;
};

/** @internal */
export const ResponseBody$outboundSchema: z.ZodType<
    ResponseBody$Outbound,
    z.ZodTypeDef,
    ResponseBody
> = z
    .object({
        classType: z.string(),
        inputId: z.string(),
        defaultValue: z.string(),
        minValue: z.number(),
        maxValue: z.number(),
    })
    .transform((v) => {
        return remap$(v, {
            classType: "class_type",
            inputId: "input_id",
            defaultValue: "default_value",
            minValue: "min_value",
            maxValue: "max_value",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResponseBody$ {
    /** @deprecated use `ResponseBody$inboundSchema` instead. */
    export const inboundSchema = ResponseBody$inboundSchema;
    /** @deprecated use `ResponseBody$outboundSchema` instead. */
    export const outboundSchema = ResponseBody$outboundSchema;
    /** @deprecated use `ResponseBody$Outbound` instead. */
    export type Outbound = ResponseBody$Outbound;
}