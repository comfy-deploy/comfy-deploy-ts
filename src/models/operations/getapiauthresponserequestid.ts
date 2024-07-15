/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type GetApiAuthResponseRequestIdRequest = {
    requestId: string;
};

/**
 * The API key is not yet ready
 */
export type GetApiAuthResponseRequestIdComfyuiResponseBody = {
    message: string;
};

/**
 * The returned API Key
 */
export type GetApiAuthResponseRequestIdResponseBody = {
    apiKey: string;
    name: string;
};

export type GetApiAuthResponseRequestIdResponse =
    | GetApiAuthResponseRequestIdComfyuiResponseBody
    | GetApiAuthResponseRequestIdResponseBody;

/** @internal */
export const GetApiAuthResponseRequestIdRequest$inboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdRequest,
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
export type GetApiAuthResponseRequestIdRequest$Outbound = {
    request_id: string;
};

/** @internal */
export const GetApiAuthResponseRequestIdRequest$outboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdRequest$Outbound,
    z.ZodTypeDef,
    GetApiAuthResponseRequestIdRequest
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
export namespace GetApiAuthResponseRequestIdRequest$ {
    /** @deprecated use `GetApiAuthResponseRequestIdRequest$inboundSchema` instead. */
    export const inboundSchema = GetApiAuthResponseRequestIdRequest$inboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdRequest$outboundSchema` instead. */
    export const outboundSchema = GetApiAuthResponseRequestIdRequest$outboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdRequest$Outbound` instead. */
    export type Outbound = GetApiAuthResponseRequestIdRequest$Outbound;
}

/** @internal */
export const GetApiAuthResponseRequestIdComfyuiResponseBody$inboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdComfyuiResponseBody,
    z.ZodTypeDef,
    unknown
> = z.object({
    message: z.string(),
});

/** @internal */
export type GetApiAuthResponseRequestIdComfyuiResponseBody$Outbound = {
    message: string;
};

/** @internal */
export const GetApiAuthResponseRequestIdComfyuiResponseBody$outboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdComfyuiResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiAuthResponseRequestIdComfyuiResponseBody
> = z.object({
    message: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiAuthResponseRequestIdComfyuiResponseBody$ {
    /** @deprecated use `GetApiAuthResponseRequestIdComfyuiResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiAuthResponseRequestIdComfyuiResponseBody$inboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdComfyuiResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiAuthResponseRequestIdComfyuiResponseBody$outboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdComfyuiResponseBody$Outbound` instead. */
    export type Outbound = GetApiAuthResponseRequestIdComfyuiResponseBody$Outbound;
}

/** @internal */
export const GetApiAuthResponseRequestIdResponseBody$inboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdResponseBody,
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
export type GetApiAuthResponseRequestIdResponseBody$Outbound = {
    api_key: string;
    name: string;
};

/** @internal */
export const GetApiAuthResponseRequestIdResponseBody$outboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiAuthResponseRequestIdResponseBody
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
export namespace GetApiAuthResponseRequestIdResponseBody$ {
    /** @deprecated use `GetApiAuthResponseRequestIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiAuthResponseRequestIdResponseBody$inboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiAuthResponseRequestIdResponseBody$outboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdResponseBody$Outbound` instead. */
    export type Outbound = GetApiAuthResponseRequestIdResponseBody$Outbound;
}

/** @internal */
export const GetApiAuthResponseRequestIdResponse$inboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdResponse,
    z.ZodTypeDef,
    unknown
> = z.union([
    z.lazy(() => GetApiAuthResponseRequestIdComfyuiResponseBody$inboundSchema),
    z.lazy(() => GetApiAuthResponseRequestIdResponseBody$inboundSchema),
]);

/** @internal */
export type GetApiAuthResponseRequestIdResponse$Outbound =
    | GetApiAuthResponseRequestIdComfyuiResponseBody$Outbound
    | GetApiAuthResponseRequestIdResponseBody$Outbound;

/** @internal */
export const GetApiAuthResponseRequestIdResponse$outboundSchema: z.ZodType<
    GetApiAuthResponseRequestIdResponse$Outbound,
    z.ZodTypeDef,
    GetApiAuthResponseRequestIdResponse
> = z.union([
    z.lazy(() => GetApiAuthResponseRequestIdComfyuiResponseBody$outboundSchema),
    z.lazy(() => GetApiAuthResponseRequestIdResponseBody$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiAuthResponseRequestIdResponse$ {
    /** @deprecated use `GetApiAuthResponseRequestIdResponse$inboundSchema` instead. */
    export const inboundSchema = GetApiAuthResponseRequestIdResponse$inboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdResponse$outboundSchema` instead. */
    export const outboundSchema = GetApiAuthResponseRequestIdResponse$outboundSchema;
    /** @deprecated use `GetApiAuthResponseRequestIdResponse$Outbound` instead. */
    export type Outbound = GetApiAuthResponseRequestIdResponse$Outbound;
}
