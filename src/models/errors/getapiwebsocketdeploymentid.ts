/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error creating run
 */
export type GetApiWebsocketDeploymentIdResponseBodyData = {
    error: string;
};

/**
 * Error creating run
 */
export class GetApiWebsocketDeploymentIdResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: GetApiWebsocketDeploymentIdResponseBodyData;

    constructor(err: GetApiWebsocketDeploymentIdResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "GetApiWebsocketDeploymentIdResponseBody";
    }
}

/** @internal */
export const GetApiWebsocketDeploymentIdResponseBody$inboundSchema: z.ZodType<
    GetApiWebsocketDeploymentIdResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new GetApiWebsocketDeploymentIdResponseBody(v);
    });

/** @internal */
export type GetApiWebsocketDeploymentIdResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const GetApiWebsocketDeploymentIdResponseBody$outboundSchema: z.ZodType<
    GetApiWebsocketDeploymentIdResponseBody$Outbound,
    z.ZodTypeDef,
    GetApiWebsocketDeploymentIdResponseBody
> = z
    .instanceof(GetApiWebsocketDeploymentIdResponseBody)
    .transform((v) => v.data$)
    .pipe(
        z.object({
            error: z.string(),
        })
    );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiWebsocketDeploymentIdResponseBody$ {
    /** @deprecated use `GetApiWebsocketDeploymentIdResponseBody$inboundSchema` instead. */
    export const inboundSchema = GetApiWebsocketDeploymentIdResponseBody$inboundSchema;
    /** @deprecated use `GetApiWebsocketDeploymentIdResponseBody$outboundSchema` instead. */
    export const outboundSchema = GetApiWebsocketDeploymentIdResponseBody$outboundSchema;
    /** @deprecated use `GetApiWebsocketDeploymentIdResponseBody$Outbound` instead. */
    export type Outbound = GetApiWebsocketDeploymentIdResponseBody$Outbound;
}