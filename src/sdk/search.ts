/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { searchSearchSearchModelGet } from "../funcs/searchSearchSearchModelGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Search extends ClientSDK {
  /**
   * Search
   */
  async searchSearchModelGet(
    request: operations.SearchSearchModelGetRequest,
    options?: RequestOptions,
  ): Promise<components.SearchModelsResponse> {
    return unwrapAsync(searchSearchSearchModelGet(
      this,
      request,
      options,
    ));
  }
}
