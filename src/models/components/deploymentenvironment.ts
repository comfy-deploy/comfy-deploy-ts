/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const DeploymentEnvironment = {
  Staging: "staging",
  Production: "production",
  PublicShare: "public-share",
  PrivateShare: "private-share",
  Preview: "preview",
} as const;
export type DeploymentEnvironment = ClosedEnum<typeof DeploymentEnvironment>;

/** @internal */
export const DeploymentEnvironment$inboundSchema: z.ZodNativeEnum<
  typeof DeploymentEnvironment
> = z.nativeEnum(DeploymentEnvironment);

/** @internal */
export const DeploymentEnvironment$outboundSchema: z.ZodNativeEnum<
  typeof DeploymentEnvironment
> = DeploymentEnvironment$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeploymentEnvironment$ {
  /** @deprecated use `DeploymentEnvironment$inboundSchema` instead. */
  export const inboundSchema = DeploymentEnvironment$inboundSchema;
  /** @deprecated use `DeploymentEnvironment$outboundSchema` instead. */
  export const outboundSchema = DeploymentEnvironment$outboundSchema;
}
