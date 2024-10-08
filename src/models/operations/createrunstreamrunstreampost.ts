/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type CreateRunStreamRunStreamPostData =
  | components.DeploymentRunRequest
  | components.WorkflowRunVersionRequest
  | components.WorkflowRunRequest;

/** @internal */
export const CreateRunStreamRunStreamPostData$inboundSchema: z.ZodType<
  CreateRunStreamRunStreamPostData,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeploymentRunRequest$inboundSchema,
  components.WorkflowRunVersionRequest$inboundSchema,
  components.WorkflowRunRequest$inboundSchema,
]);

/** @internal */
export type CreateRunStreamRunStreamPostData$Outbound =
  | components.DeploymentRunRequest$Outbound
  | components.WorkflowRunVersionRequest$Outbound
  | components.WorkflowRunRequest$Outbound;

/** @internal */
export const CreateRunStreamRunStreamPostData$outboundSchema: z.ZodType<
  CreateRunStreamRunStreamPostData$Outbound,
  z.ZodTypeDef,
  CreateRunStreamRunStreamPostData
> = z.union([
  components.DeploymentRunRequest$outboundSchema,
  components.WorkflowRunVersionRequest$outboundSchema,
  components.WorkflowRunRequest$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRunStreamRunStreamPostData$ {
  /** @deprecated use `CreateRunStreamRunStreamPostData$inboundSchema` instead. */
  export const inboundSchema = CreateRunStreamRunStreamPostData$inboundSchema;
  /** @deprecated use `CreateRunStreamRunStreamPostData$outboundSchema` instead. */
  export const outboundSchema = CreateRunStreamRunStreamPostData$outboundSchema;
  /** @deprecated use `CreateRunStreamRunStreamPostData$Outbound` instead. */
  export type Outbound = CreateRunStreamRunStreamPostData$Outbound;
}
