/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const MachineGPU = {
  Cpu: "CPU",
  T4: "T4",
  L4: "L4",
  A10G: "A10G",
  A100: "A100",
  A10080Gb: "A100-80GB",
  H100: "H100",
} as const;
export type MachineGPU = ClosedEnum<typeof MachineGPU>;

/** @internal */
export const MachineGPU$inboundSchema: z.ZodNativeEnum<typeof MachineGPU> = z
  .nativeEnum(MachineGPU);

/** @internal */
export const MachineGPU$outboundSchema: z.ZodNativeEnum<typeof MachineGPU> =
  MachineGPU$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MachineGPU$ {
  /** @deprecated use `MachineGPU$inboundSchema` instead. */
  export const inboundSchema = MachineGPU$inboundSchema;
  /** @deprecated use `MachineGPU$outboundSchema` instead. */
  export const outboundSchema = MachineGPU$outboundSchema;
}
