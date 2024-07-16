/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetAuthResponseRequestIdRequest = {
    requestId: string;
};

/**
 * The API key is not yet ready
 */
export type GetAuthResponseRequestIdComfyuiResponseBody = {
    message: string;
};

/**
 * The returned API Key
 */
export type GetAuthResponseRequestIdResponseBody = {
    apiKey: string;
    name: string;
};

export type GetAuthResponseRequestIdResponse =
    | GetAuthResponseRequestIdComfyuiResponseBody
    | GetAuthResponseRequestIdResponseBody;

/** @internal */
export const GetAuthResponseRequestIdRequest$inboundSchema: z.ZodType<
    GetAuthResponseRequestIdRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        request_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            request_id: "requestId",
        });
    });

/** @internal */
export type GetAuthResponseRequestIdRequest$Outbound = {
    request_id: string;
};

/** @internal */
export const GetAuthResponseRequestIdRequest$outboundSchema: z.ZodType<
    GetAuthResponseRequestIdRequest$Outbound,
    z.ZodTypeDef,
    GetAuthResponseRequestIdRequest
> = z
    .object({
        requestId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            requestId: "request_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAuthResponseRequestIdRequest$ {
    /** @deprecated use `GetAuthResponseRequestIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetAuthResponseRequestIdRequest$inboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetAuthResponseRequestIdRequest$outboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdRequest$Outbound` instead. */
    export type Outbound = GetAuthResponseRequestIdRequest$Outbound;
}

/** @internal */
export const GetAuthResponseRequestIdComfyuiResponseBody$inboundSchema: z.ZodType<
    GetAuthResponseRequestIdComfyuiResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
});

/** @internal */
export type GetAuthResponseRequestIdComfyuiResponseBody$Outbound = {
    message: string;
};

/** @internal */
export const GetAuthResponseRequestIdComfyuiResponseBody$outboundSchema: z.ZodType<
    GetAuthResponseRequestIdComfyuiResponseBody$Outbound,
    z.ZodTypeDef,
    GetAuthResponseRequestIdComfyuiResponseBody
> = z.object({
    message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAuthResponseRequestIdComfyuiResponseBody$ {
    /** @deprecated use `GetAuthResponseRequestIdComfyuiResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAuthResponseRequestIdComfyuiResponseBody$inboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdComfyuiResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAuthResponseRequestIdComfyuiResponseBody$outboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdComfyuiResponseBody$Outbound` instead. */
    export type Outbound = GetAuthResponseRequestIdComfyuiResponseBody$Outbound;
}

/** @internal */
export const GetAuthResponseRequestIdResponseBody$inboundSchema: z.ZodType<
    GetAuthResponseRequestIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        api_key: z.string(),
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            api_key: "apiKey",
        });
    });

/** @internal */
export type GetAuthResponseRequestIdResponseBody$Outbound = {
    api_key: string;
    name: string;
};

/** @internal */
export const GetAuthResponseRequestIdResponseBody$outboundSchema: z.ZodType<
    GetAuthResponseRequestIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetAuthResponseRequestIdResponseBody
> = z
    .object({
        apiKey: z.string(),
        name: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            apiKey: "api_key",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAuthResponseRequestIdResponseBody$ {
    /** @deprecated use `GetAuthResponseRequestIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetAuthResponseRequestIdResponseBody$inboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetAuthResponseRequestIdResponseBody$outboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdResponseBody$Outbound` instead. */
    export type Outbound = GetAuthResponseRequestIdResponseBody$Outbound;
}

/** @internal */
export const GetAuthResponseRequestIdResponse$inboundSchema: z.ZodType<
    GetAuthResponseRequestIdResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetAuthResponseRequestIdComfyuiResponseBody$inboundSchema),
    z.lazy(() => GetAuthResponseRequestIdResponseBody$inboundSchema),
]);

/** @internal */
export type GetAuthResponseRequestIdResponse$Outbound =
    | GetAuthResponseRequestIdComfyuiResponseBody$Outbound
    | GetAuthResponseRequestIdResponseBody$Outbound;

/** @internal */
export const GetAuthResponseRequestIdResponse$outboundSchema: z.ZodType<
    GetAuthResponseRequestIdResponse$Outbound,
    z.ZodTypeDef,
    GetAuthResponseRequestIdResponse
> = z.union([
    z.lazy(() => GetAuthResponseRequestIdComfyuiResponseBody$outboundSchema),
    z.lazy(() => GetAuthResponseRequestIdResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAuthResponseRequestIdResponse$ {
    /** @deprecated use `GetAuthResponseRequestIdResponse$inboundSchema` instead. */
    export const inboundSchema = GetAuthResponseRequestIdResponse$inboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdResponse$outboundSchema` instead. */
    export const outboundSchema = GetAuthResponseRequestIdResponse$outboundSchema;
    /** @deprecated use `GetAuthResponseRequestIdResponse$Outbound` instead. */
    export type Outbound = GetAuthResponseRequestIdResponse$Outbound;
}
