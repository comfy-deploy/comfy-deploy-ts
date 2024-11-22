/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DeploymentEnvironment,
  DeploymentEnvironment$inboundSchema,
  DeploymentEnvironment$outboundSchema,
} from "./deploymentenvironment.js";
import {
  InputModel,
  InputModel$inboundSchema,
  InputModel$Outbound,
  InputModel$outboundSchema,
} from "./inputmodel.js";
import {
  OutputModel,
  OutputModel$inboundSchema,
  OutputModel$Outbound,
  OutputModel$outboundSchema,
} from "./outputmodel.js";
import {
  WorkflowWithName,
  WorkflowWithName$inboundSchema,
  WorkflowWithName$Outbound,
  WorkflowWithName$outboundSchema,
} from "./workflowwithname.js";

export type ShareOptions = {};

export type ShowcaseMedia = {};

export type DeploymentModel = {
  id: string;
  userId: string;
  orgId: string | null;
  workflowVersionId: string;
  workflowId: string;
  machineId: string;
  shareSlug: string | null;
  description: string | null;
  shareOptions: ShareOptions | null;
  showcaseMedia: ShowcaseMedia | null;
  environment: DeploymentEnvironment;
  createdAt: Date;
  updatedAt: Date;
  workflow: WorkflowWithName;
  inputTypes?: Array<InputModel> | null | undefined;
  outputTypes?: Array<OutputModel> | null | undefined;
};

/** @internal */
export const ShareOptions$inboundSchema: z.ZodType<
  ShareOptions,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ShareOptions$Outbound = {};

/** @internal */
export const ShareOptions$outboundSchema: z.ZodType<
  ShareOptions$Outbound,
  z.ZodTypeDef,
  ShareOptions
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShareOptions$ {
  /** @deprecated use `ShareOptions$inboundSchema` instead. */
  export const inboundSchema = ShareOptions$inboundSchema;
  /** @deprecated use `ShareOptions$outboundSchema` instead. */
  export const outboundSchema = ShareOptions$outboundSchema;
  /** @deprecated use `ShareOptions$Outbound` instead. */
  export type Outbound = ShareOptions$Outbound;
}

export function shareOptionsToJSON(shareOptions: ShareOptions): string {
  return JSON.stringify(ShareOptions$outboundSchema.parse(shareOptions));
}

export function shareOptionsFromJSON(
  jsonString: string,
): SafeParseResult<ShareOptions, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShareOptions$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShareOptions' from JSON`,
  );
}

/** @internal */
export const ShowcaseMedia$inboundSchema: z.ZodType<
  ShowcaseMedia,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ShowcaseMedia$Outbound = {};

/** @internal */
export const ShowcaseMedia$outboundSchema: z.ZodType<
  ShowcaseMedia$Outbound,
  z.ZodTypeDef,
  ShowcaseMedia
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ShowcaseMedia$ {
  /** @deprecated use `ShowcaseMedia$inboundSchema` instead. */
  export const inboundSchema = ShowcaseMedia$inboundSchema;
  /** @deprecated use `ShowcaseMedia$outboundSchema` instead. */
  export const outboundSchema = ShowcaseMedia$outboundSchema;
  /** @deprecated use `ShowcaseMedia$Outbound` instead. */
  export type Outbound = ShowcaseMedia$Outbound;
}

export function showcaseMediaToJSON(showcaseMedia: ShowcaseMedia): string {
  return JSON.stringify(ShowcaseMedia$outboundSchema.parse(showcaseMedia));
}

export function showcaseMediaFromJSON(
  jsonString: string,
): SafeParseResult<ShowcaseMedia, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ShowcaseMedia$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ShowcaseMedia' from JSON`,
  );
}

/** @internal */
export const DeploymentModel$inboundSchema: z.ZodType<
  DeploymentModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  user_id: z.string(),
  org_id: z.nullable(z.string()),
  workflow_version_id: z.string(),
  workflow_id: z.string(),
  machine_id: z.string(),
  share_slug: z.nullable(z.string()),
  description: z.nullable(z.string()),
  share_options: z.nullable(z.lazy(() => ShareOptions$inboundSchema)),
  showcase_media: z.nullable(z.lazy(() => ShowcaseMedia$inboundSchema)),
  environment: DeploymentEnvironment$inboundSchema,
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  updated_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  workflow: WorkflowWithName$inboundSchema,
  input_types: z.nullable(z.array(InputModel$inboundSchema)).optional(),
  output_types: z.nullable(z.array(OutputModel$inboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    "user_id": "userId",
    "org_id": "orgId",
    "workflow_version_id": "workflowVersionId",
    "workflow_id": "workflowId",
    "machine_id": "machineId",
    "share_slug": "shareSlug",
    "share_options": "shareOptions",
    "showcase_media": "showcaseMedia",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
    "input_types": "inputTypes",
    "output_types": "outputTypes",
  });
});

/** @internal */
export type DeploymentModel$Outbound = {
  id: string;
  user_id: string;
  org_id: string | null;
  workflow_version_id: string;
  workflow_id: string;
  machine_id: string;
  share_slug: string | null;
  description: string | null;
  share_options: ShareOptions$Outbound | null;
  showcase_media: ShowcaseMedia$Outbound | null;
  environment: string;
  created_at: string;
  updated_at: string;
  workflow: WorkflowWithName$Outbound;
  input_types?: Array<InputModel$Outbound> | null | undefined;
  output_types?: Array<OutputModel$Outbound> | null | undefined;
};

/** @internal */
export const DeploymentModel$outboundSchema: z.ZodType<
  DeploymentModel$Outbound,
  z.ZodTypeDef,
  DeploymentModel
> = z.object({
  id: z.string(),
  userId: z.string(),
  orgId: z.nullable(z.string()),
  workflowVersionId: z.string(),
  workflowId: z.string(),
  machineId: z.string(),
  shareSlug: z.nullable(z.string()),
  description: z.nullable(z.string()),
  shareOptions: z.nullable(z.lazy(() => ShareOptions$outboundSchema)),
  showcaseMedia: z.nullable(z.lazy(() => ShowcaseMedia$outboundSchema)),
  environment: DeploymentEnvironment$outboundSchema,
  createdAt: z.date().transform(v => v.toISOString()),
  updatedAt: z.date().transform(v => v.toISOString()),
  workflow: WorkflowWithName$outboundSchema,
  inputTypes: z.nullable(z.array(InputModel$outboundSchema)).optional(),
  outputTypes: z.nullable(z.array(OutputModel$outboundSchema)).optional(),
}).transform((v) => {
  return remap$(v, {
    userId: "user_id",
    orgId: "org_id",
    workflowVersionId: "workflow_version_id",
    workflowId: "workflow_id",
    machineId: "machine_id",
    shareSlug: "share_slug",
    shareOptions: "share_options",
    showcaseMedia: "showcase_media",
    createdAt: "created_at",
    updatedAt: "updated_at",
    inputTypes: "input_types",
    outputTypes: "output_types",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentModel$ {
  /** @deprecated use `DeploymentModel$inboundSchema` instead. */
  export const inboundSchema = DeploymentModel$inboundSchema;
  /** @deprecated use `DeploymentModel$outboundSchema` instead. */
  export const outboundSchema = DeploymentModel$outboundSchema;
  /** @deprecated use `DeploymentModel$Outbound` instead. */
  export type Outbound = DeploymentModel$Outbound;
}

export function deploymentModelToJSON(
  deploymentModel: DeploymentModel,
): string {
  return JSON.stringify(DeploymentModel$outboundSchema.parse(deploymentModel));
}

export function deploymentModelFromJSON(
  jsonString: string,
): SafeParseResult<DeploymentModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeploymentModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeploymentModel' from JSON`,
  );
}
