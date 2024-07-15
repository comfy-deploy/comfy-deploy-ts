/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error creating run
 */
export type PostApiGpuEventResponseBodyData = {
    error: string;
};

/**
 * Error creating run
 */
export class PostApiGpuEventResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: PostApiGpuEventResponseBodyData;

    constructor(err: PostApiGpuEventResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "PostApiGpuEventResponseBody";
    }
}

/** @internal */
export const PostApiGpuEventResponseBody$inboundSchema: z.ZodType<
    PostApiGpuEventResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new PostApiGpuEventResponseBody(v);
    });

/** @internal */
export type PostApiGpuEventResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const PostApiGpuEventResponseBody$outboundSchema: z.ZodType<
    PostApiGpuEventResponseBody$Outbound,
    z.ZodTypeDef,
    PostApiGpuEventResponseBody
> = z
    .instanceof(PostApiGpuEventResponseBody)
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
export namespace PostApiGpuEventResponseBody$ {
    /** @deprecated use `PostApiGpuEventResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostApiGpuEventResponseBody$inboundSchema;
    /** @deprecated use `PostApiGpuEventResponseBody$outboundSchema` instead. */
    export const outboundSchema = PostApiGpuEventResponseBody$outboundSchema;
    /** @deprecated use `PostApiGpuEventResponseBody$Outbound` instead. */
    export type Outbound = PostApiGpuEventResponseBody$Outbound;
}