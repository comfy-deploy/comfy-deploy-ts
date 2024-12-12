/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const MachineGPUOutput = {
  Cpu: "CPU",
  T4: "T4",
  L4: "L4",
  A10G: "A10G",
  A100: "A100",
  A10080Gb: "A100-80GB",
  H100: "H100",
} as const;
export type MachineGPUOutput = ClosedEnum<typeof MachineGPUOutput>;

/** @internal */
export const MachineGPUOutput$inboundSchema: z.ZodNativeEnum<
  typeof MachineGPUOutput
> = z.nativeEnum(MachineGPUOutput);

/** @internal */
export const MachineGPUOutput$outboundSchema: z.ZodNativeEnum<
  typeof MachineGPUOutput
> = MachineGPUOutput$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MachineGPUOutput$ {
  /** @deprecated use `MachineGPUOutput$inboundSchema` instead. */
  export const inboundSchema = MachineGPUOutput$inboundSchema;
  /** @deprecated use `MachineGPUOutput$outboundSchema` instead. */
  export const outboundSchema = MachineGPUOutput$outboundSchema;
}