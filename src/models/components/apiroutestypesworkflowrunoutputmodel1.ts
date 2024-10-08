/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Data = {};

export type NodeMeta = {};

export type ApiRoutesTypesWorkflowRunOutputModel1 = {
  id: string;
  runId: string;
  data: Data | null;
  nodeMeta: NodeMeta | null;
  createdAt: Date;
  updatedAt: Date;
};

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Data$Outbound = {};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

/** @internal */
export const NodeMeta$inboundSchema: z.ZodType<
  NodeMeta,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type NodeMeta$Outbound = {};

/** @internal */
export const NodeMeta$outboundSchema: z.ZodType<
  NodeMeta$Outbound,
  z.ZodTypeDef,
  NodeMeta
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace NodeMeta$ {
  /** @deprecated use `NodeMeta$inboundSchema` instead. */
  export const inboundSchema = NodeMeta$inboundSchema;
  /** @deprecated use `NodeMeta$outboundSchema` instead. */
  export const outboundSchema = NodeMeta$outboundSchema;
  /** @deprecated use `NodeMeta$Outbound` instead. */
  export type Outbound = NodeMeta$Outbound;
}

/** @internal */
export const ApiRoutesTypesWorkflowRunOutputModel1$inboundSchema: z.ZodType<
  ApiRoutesTypesWorkflowRunOutputModel1,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  run_id: z.string(),
  data: z.nullable(z.lazy(() => Data$inboundSchema)),
  node_meta: z.nullable(z.lazy(() => NodeMeta$inboundSchema)),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
}).transform((v) => {
  return remap$(v, {
    "run_id": "runId",
    "node_meta": "nodeMeta",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type ApiRoutesTypesWorkflowRunOutputModel1$Outbound = {
  id: string;
  run_id: string;
  data: Data$Outbound | null;
  node_meta: NodeMeta$Outbound | null;
  created_at: string;
  updated_at: string;
};

/** @internal */
export const ApiRoutesTypesWorkflowRunOutputModel1$outboundSchema: z.ZodType<
  ApiRoutesTypesWorkflowRunOutputModel1$Outbound,
  z.ZodTypeDef,
  ApiRoutesTypesWorkflowRunOutputModel1
> = z.object({
  id: z.string(),
  runId: z.string(),
  data: z.nullable(z.lazy(() => Data$outboundSchema)),
  nodeMeta: z.nullable(z.lazy(() => NodeMeta$outboundSchema)),
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
}).transform((v) => {
  return remap$(v, {
    runId: "run_id",
    nodeMeta: "node_meta",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiRoutesTypesWorkflowRunOutputModel1$ {
  /** @deprecated use `ApiRoutesTypesWorkflowRunOutputModel1$inboundSchema` instead. */
  export const inboundSchema =
    ApiRoutesTypesWorkflowRunOutputModel1$inboundSchema;
  /** @deprecated use `ApiRoutesTypesWorkflowRunOutputModel1$outboundSchema` instead. */
  export const outboundSchema =
    ApiRoutesTypesWorkflowRunOutputModel1$outboundSchema;
  /** @deprecated use `ApiRoutesTypesWorkflowRunOutputModel1$Outbound` instead. */
  export type Outbound = ApiRoutesTypesWorkflowRunOutputModel1$Outbound;
}
