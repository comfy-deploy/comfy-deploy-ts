/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ApiRoutesTypesMachineGpu2 = {
  Cpu: "CPU",
  T4: "T4",
  L4: "L4",
  A10G: "A10G",
  A100: "A100",
  A10080Gb: "A100-80GB",
  H100: "H100",
} as const;
export type ApiRoutesTypesMachineGpu2 = ClosedEnum<
  typeof ApiRoutesTypesMachineGpu2
>;

/** @internal */
export const ApiRoutesTypesMachineGpu2$inboundSchema: z.ZodNativeEnum<
  typeof ApiRoutesTypesMachineGpu2
> = z.nativeEnum(ApiRoutesTypesMachineGpu2);

/** @internal */
export const ApiRoutesTypesMachineGpu2$outboundSchema: z.ZodNativeEnum<
  typeof ApiRoutesTypesMachineGpu2
> = ApiRoutesTypesMachineGpu2$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiRoutesTypesMachineGpu2$ {
  /** @deprecated use `ApiRoutesTypesMachineGpu2$inboundSchema` instead. */
  export const inboundSchema = ApiRoutesTypesMachineGpu2$inboundSchema;
  /** @deprecated use `ApiRoutesTypesMachineGpu2$outboundSchema` instead. */
  export const outboundSchema = ApiRoutesTypesMachineGpu2$outboundSchema;
}
