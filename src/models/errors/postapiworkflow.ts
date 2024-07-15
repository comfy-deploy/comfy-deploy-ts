/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Error when uploading the workflow
 */
export type PostApiWorkflowResponseBodyData = {
    error: string;
};

/**
 * Error when uploading the workflow
 */
export class PostApiWorkflowResponseBody extends Error {
    error: string;

    /** The original data that was passed to this error instance. */
    data$: PostApiWorkflowResponseBodyData;

    constructor(err: PostApiWorkflowResponseBodyData) {
        const message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : `API error occurred: ${JSON.stringify(err)}`;
        super(message);
        this.data$ = err;

        this.error = err.error;

        this.name = "PostApiWorkflowResponseBody";
    }
}

/** @internal */
export const PostApiWorkflowResponseBody$inboundSchema: z.ZodType<
    PostApiWorkflowResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        error: z.string(),
    })
    .transform((v) => {
        return new PostApiWorkflowResponseBody(v);
    });

/** @internal */
export type PostApiWorkflowResponseBody$Outbound = {
    error: string;
};

/** @internal */
export const PostApiWorkflowResponseBody$outboundSchema: z.ZodType<
    PostApiWorkflowResponseBody$Outbound,
    z.ZodTypeDef,
    PostApiWorkflowResponseBody
> = z
    .instanceof(PostApiWorkflowResponseBody)
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
export namespace PostApiWorkflowResponseBody$ {
    /** @deprecated use `PostApiWorkflowResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostApiWorkflowResponseBody$inboundSchema;
    /** @deprecated use `PostApiWorkflowResponseBody$outboundSchema` instead. */
    export const outboundSchema = PostApiWorkflowResponseBody$outboundSchema;
    /** @deprecated use `PostApiWorkflowResponseBody$Outbound` instead. */
    export type Outbound = PostApiWorkflowResponseBody$Outbound;
}