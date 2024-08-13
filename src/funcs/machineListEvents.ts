/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ComfyDeployCore } from "../core.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
    ConnectionError,
    InvalidRequestError,
    RequestAbortedError,
    RequestTimeoutError,
    UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import * as z from "zod";

/**
 * Get recent gpu events
 */
export async function machineListEvents(
    client$: ComfyDeployCore,
    request: operations.GetMachineMachineIdEventsRequest,
    options?: RequestOptions
): Promise<
    Result<
        Array<operations.GetMachineMachineIdEventsResponseBody>,
        | errors.GetMachineMachineIdEventsResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >
> {
    const input$ = request;

    const parsed$ = schemas$.safeParse(
        input$,
        (value$) => operations.GetMachineMachineIdEventsRequest$outboundSchema.parse(value$),
        "Input validation failed"
    );
    if (!parsed$.ok) {
        return parsed$;
    }
    const payload$ = parsed$.value;
    const body$ = null;

    const pathParams$ = {
        machine_id: encodeSimple$("machine_id", payload$.machine_id, {
            explode: false,
            charEncoding: "percent",
        }),
    };

    const path$ = pathToFunc("/machine/{machine_id}/events")(pathParams$);

    const query$ = encodeFormQuery$({
        limit: payload$.limit,
        status: payload$.status,
    });

    const headers$ = new Headers({
        Accept: "application/json",
    });

    const bearerAuth$ = await extractSecurity(client$.options$.bearerAuth);
    const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
    const context = {
        operationID: "get_/machine/{machine_id}/events",
        oAuth2Scopes: [],
        securitySource: client$.options$.bearerAuth,
    };
    const securitySettings$ = resolveGlobalSecurity(security$);

    const requestRes = client$.createRequest$(
        context,
        {
            security: securitySettings$,
            method: "GET",
            path: path$,
            headers: headers$,
            query: query$,
            body: body$,
            timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
        },
        options
    );
    if (!requestRes.ok) {
        return requestRes;
    }
    const request$ = requestRes.value;

    const doResult = await client$.do$(request$, {
        context,
        errorCodes: ["401", "4XX", "500", "5XX"],
        retryConfig: options?.retries || client$.options$.retryConfig,
        retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
    });
    if (!doResult.ok) {
        return doResult;
    }
    const response = doResult.value;

    const responseFields$ = {
        HttpMeta: { Response: response, Request: request$ },
    };

    const [result$] = await m$.match<
        Array<operations.GetMachineMachineIdEventsResponseBody>,
        | errors.GetMachineMachineIdEventsResponseBody
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
    >(
        m$.json(200, z.array(operations.GetMachineMachineIdEventsResponseBody$inboundSchema)),
        m$.fail([401, "4XX", "5XX"]),
        m$.jsonErr(500, errors.GetMachineMachineIdEventsResponseBody$inboundSchema)
    )(response, { extraFields: responseFields$ });
    if (!result$.ok) {
        return result$;
    }

    return result$;
}
