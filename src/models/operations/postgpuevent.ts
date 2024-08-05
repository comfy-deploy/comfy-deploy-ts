/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const GpuType = {
    T4: "T4",
    L4: "L4",
    A10G: "A10G",
    A100: "A100",
    H100: "H100",
} as const;
export type GpuType = ClosedEnum<typeof GpuType>;

export const WsGpuType = {
    FourThousandAndNinety: "4090",
} as const;
export type WsGpuType = ClosedEnum<typeof WsGpuType>;

export const EventType = {
    GpuStart: "gpu_start",
    GpuEnd: "gpu_end",
} as const;
export type EventType = ClosedEnum<typeof EventType>;

export const GpuProvider = {
    Modal: "modal",
    Runpod: "runpod",
} as const;
export type GpuProvider = ClosedEnum<typeof GpuProvider>;

export type PostGpuEventRequestBody = {
    machineId: string;
    timestamp: string;
    gpuType?: GpuType | null | undefined;
    wsGpuType?: WsGpuType | null | undefined;
    eventType: EventType;
    gpuProvider: GpuProvider;
    eventId?: string | null | undefined;
    isWorkspace?: boolean | null | undefined;
    userId?: string | null | undefined;
    orgId?: string | null | undefined;
};

/**
 * Machine event registered
 */
export type PostGpuEventResponseBody = {
    eventId: string;
};

/** @internal */
export const GpuType$inboundSchema: z.ZodNativeEnum<typeof GpuType> = z.nativeEnum(GpuType);

/** @internal */
export const GpuType$outboundSchema: z.ZodNativeEnum<typeof GpuType> = GpuType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GpuType$ {
    /** @deprecated use `GpuType$inboundSchema` instead. */
    export const inboundSchema = GpuType$inboundSchema;
    /** @deprecated use `GpuType$outboundSchema` instead. */
    export const outboundSchema = GpuType$outboundSchema;
}

/** @internal */
export const WsGpuType$inboundSchema: z.ZodNativeEnum<typeof WsGpuType> = z.nativeEnum(WsGpuType);

/** @internal */
export const WsGpuType$outboundSchema: z.ZodNativeEnum<typeof WsGpuType> = WsGpuType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WsGpuType$ {
    /** @deprecated use `WsGpuType$inboundSchema` instead. */
    export const inboundSchema = WsGpuType$inboundSchema;
    /** @deprecated use `WsGpuType$outboundSchema` instead. */
    export const outboundSchema = WsGpuType$outboundSchema;
}

/** @internal */
export const EventType$inboundSchema: z.ZodNativeEnum<typeof EventType> = z.nativeEnum(EventType);

/** @internal */
export const EventType$outboundSchema: z.ZodNativeEnum<typeof EventType> = EventType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventType$ {
    /** @deprecated use `EventType$inboundSchema` instead. */
    export const inboundSchema = EventType$inboundSchema;
    /** @deprecated use `EventType$outboundSchema` instead. */
    export const outboundSchema = EventType$outboundSchema;
}

/** @internal */
export const GpuProvider$inboundSchema: z.ZodNativeEnum<typeof GpuProvider> =
    z.nativeEnum(GpuProvider);

/** @internal */
export const GpuProvider$outboundSchema: z.ZodNativeEnum<typeof GpuProvider> =
    GpuProvider$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GpuProvider$ {
    /** @deprecated use `GpuProvider$inboundSchema` instead. */
    export const inboundSchema = GpuProvider$inboundSchema;
    /** @deprecated use `GpuProvider$outboundSchema` instead. */
    export const outboundSchema = GpuProvider$outboundSchema;
}

/** @internal */
export const PostGpuEventRequestBody$inboundSchema: z.ZodType<
    PostGpuEventRequestBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        machine_id: z.string(),
        timestamp: z.string(),
        gpuType: z.nullable(GpuType$inboundSchema).optional(),
        wsGpuType: z.nullable(WsGpuType$inboundSchema).optional(),
        eventType: EventType$inboundSchema,
        gpu_provider: GpuProvider$inboundSchema,
        event_id: z.nullable(z.string()).optional(),
        is_workspace: z.nullable(z.boolean()).optional(),
        user_id: z.nullable(z.string()).optional(),
        org_id: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            machine_id: "machineId",
            gpu_provider: "gpuProvider",
            event_id: "eventId",
            is_workspace: "isWorkspace",
            user_id: "userId",
            org_id: "orgId",
        });
    });

/** @internal */
export type PostGpuEventRequestBody$Outbound = {
    machine_id: string;
    timestamp: string;
    gpuType?: string | null | undefined;
    wsGpuType?: string | null | undefined;
    eventType: string;
    gpu_provider: string;
    event_id?: string | null | undefined;
    is_workspace?: boolean | null | undefined;
    user_id?: string | null | undefined;
    org_id?: string | null | undefined;
};

/** @internal */
export const PostGpuEventRequestBody$outboundSchema: z.ZodType<
    PostGpuEventRequestBody$Outbound,
    z.ZodTypeDef,
    PostGpuEventRequestBody
> = z
    .object({
        machineId: z.string(),
        timestamp: z.string(),
        gpuType: z.nullable(GpuType$outboundSchema).optional(),
        wsGpuType: z.nullable(WsGpuType$outboundSchema).optional(),
        eventType: EventType$outboundSchema,
        gpuProvider: GpuProvider$outboundSchema,
        eventId: z.nullable(z.string()).optional(),
        isWorkspace: z.nullable(z.boolean()).optional(),
        userId: z.nullable(z.string()).optional(),
        orgId: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            machineId: "machine_id",
            gpuProvider: "gpu_provider",
            eventId: "event_id",
            isWorkspace: "is_workspace",
            userId: "user_id",
            orgId: "org_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostGpuEventRequestBody$ {
    /** @deprecated use `PostGpuEventRequestBody$inboundSchema` instead. */
    export const inboundSchema = PostGpuEventRequestBody$inboundSchema;
    /** @deprecated use `PostGpuEventRequestBody$outboundSchema` instead. */
    export const outboundSchema = PostGpuEventRequestBody$outboundSchema;
    /** @deprecated use `PostGpuEventRequestBody$Outbound` instead. */
    export type Outbound = PostGpuEventRequestBody$Outbound;
}

/** @internal */
export const PostGpuEventResponseBody$inboundSchema: z.ZodType<
    PostGpuEventResponseBody,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        event_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            event_id: "eventId",
        });
    });

/** @internal */
export type PostGpuEventResponseBody$Outbound = {
    event_id: string;
};

/** @internal */
export const PostGpuEventResponseBody$outboundSchema: z.ZodType<
    PostGpuEventResponseBody$Outbound,
    z.ZodTypeDef,
    PostGpuEventResponseBody
> = z
    .object({
        eventId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            eventId: "event_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostGpuEventResponseBody$ {
    /** @deprecated use `PostGpuEventResponseBody$inboundSchema` instead. */
    export const inboundSchema = PostGpuEventResponseBody$inboundSchema;
    /** @deprecated use `PostGpuEventResponseBody$outboundSchema` instead. */
    export const outboundSchema = PostGpuEventResponseBody$outboundSchema;
    /** @deprecated use `PostGpuEventResponseBody$Outbound` instead. */
    export type Outbound = PostGpuEventResponseBody$Outbound;
}
