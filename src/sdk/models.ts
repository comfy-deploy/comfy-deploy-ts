/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { modelsPublicModelsModelsGet } from "../funcs/modelsPublicModelsModelsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Models extends ClientSDK {
  /**
   * Public Models
   *
   * @remarks
   * Return a list of available public models with their input/output specifications
   */
  async publicModelsModelsGet(
    options?: RequestOptions,
  ): Promise<Array<components.ModelWithMetadata>> {
    return unwrapAsync(modelsPublicModelsModelsGet(
      this,
      options,
    ));
  }
}
