/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const Environment = {
    Production: "production",
    Staging: "staging",
} as const;
export type Environment = ClosedEnum<typeof Environment>;

export type GetApiDeploymentRequest = {
    environment?: Environment | undefined;
};

export type GetApiDeploymentResponseBody = {};

/** @internal */
export const Environment$inboundSchema: z.ZodNativeEnum<typeof Environment> =
    z.nativeEnum(Environment);

/** @internal */
export const Environment$outboundSchema: z.ZodNativeEnum<typeof Environment> =
    Environment$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Environment$ {
    /** @deprecated use `Environment$inboundSchema` instead. */
    export const inboundSchema = Environment$inboundSchema;
    /** @deprecated use `Environment$outboundSchema` instead. */
    export const outboundSchema = Environment$outboundSchema;
}

/** @internal */
export const GetApiDeploymentRequest$inboundSchema: z.ZodType<
    GetApiDeploymentRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    environment: Environment$inboundSchema.optional(),
});

/** @internal */
export type GetApiDeploymentRequest$Outbound = {
    environment?: string | undefined;
};

/** @internal */
export const GetApiDeploymentRequest$outboundSchema: z.ZodType<
    GetApiDeploymentRequest$Outbound,
    z.ZodTypeDef,
    GetApiDeploymentRequest
> = z.object({
    environment: Environment$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiDeploymentRequest$ {
    /** @deprecated use `GetApiDeploymentRequest$inboundSchema` instead. */
    export const inboundSchema = GetApiDeploymentRequest$inboundSchema;
    /** @deprecated use `GetApiDeploymentRequest$outboundSchema` instead. */
    export const outboundSchema = GetApiDeploymentRequest$outboundSchema;
    /** @deprecated use `GetApiDeploymentRequest$Outbound` instead. */
    export type Outbound = GetApiDeploymentRequest$Outbound;
}

/** @internal */
export const GetApiDeploymentResponseBody$inboundSchema: z.ZodType<
    GetApiDeploymentResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({});

/** @internal */
export type GetApiDeploymentResponseBody$Outbound = {};

/** @internal */
export const GetApiDeploymentResponseBody$outboundSchema: z.ZodType<
    GetApiDeploymentResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiDeploymentResponseBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiDeploymentResponseBody$ {
    /** @deprecated use `GetApiDeploymentResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiDeploymentResponseBody$inboundSchema;
    /** @deprecated use `GetApiDeploymentResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiDeploymentResponseBody$outboundSchema;
    /** @deprecated use `GetApiDeploymentResponseBody$Outbound` instead. */
    export type Outbound = GetApiDeploymentResponseBody$Outbound;
}
