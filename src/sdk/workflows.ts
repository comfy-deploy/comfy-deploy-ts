/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { unwrap as unwrap$ } from "../types/fp.js";
import * as z from "zod";

export class Workflows extends ClientSDK {
    /**
     * Get a websocket url for a specific deployment
     */
    async getWebsocketDeploymentId(
        request: operations.GetWebsocketDeploymentIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetWebsocketDeploymentIdResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetWebsocketDeploymentIdRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            deployment_id: encodeSimple$("deployment_id", payload$.deployment_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/websocket/{deployment_id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "get_/websocket/{deployment_id}",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["401", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.GetWebsocketDeploymentIdResponseBody,
            errors.GetWebsocketDeploymentIdResponseBody | SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetWebsocketDeploymentIdResponseBody$inboundSchema),
            m$.fail([401, "4XX", "5XX"]),
            m$.jsonErr(500, errors.GetWebsocketDeploymentIdResponseBody$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Create an endpoint for a machine
     */
    async postMachineEndpoint(
        request?: operations.PostMachineEndpointRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PostMachineEndpointResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.PostMachineEndpointRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/machine-endpoint")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "post_/machine-endpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["401", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.PostMachineEndpointResponseBody,
            errors.PostMachineEndpointResponseBody | SDKError | SDKValidationError
        >(
            m$.json(200, operations.PostMachineEndpointResponseBody$inboundSchema),
            m$.fail([401, "4XX", "5XX"]),
            m$.jsonErr(500, errors.PostMachineEndpointResponseBody$inboundSchema)
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve workflows
     *
     * @remarks
     * Retrieve workflows based on optional query parameters
     */
    async getV1Workflows(
        request: operations.GetV1WorkflowsRequest,
        options?: RequestOptions
    ): Promise<Array<operations.GetV1WorkflowsResponseBody>> {
        const input$ = typeof request === "undefined" ? {} : request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetV1WorkflowsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const path$ = pathToFunc("/v1/workflows")();

        const query$ = encodeFormQuery$({
            page: payload$.page,
            pageSize: payload$.pageSize,
            search: payload$.search,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "get_/v1/workflows",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            Array<operations.GetV1WorkflowsResponseBody>,
            errors.GetV1WorkflowsResponseBody | SDKError | SDKValidationError
        >(
            m$.json(200, z.array(operations.GetV1WorkflowsResponseBody$inboundSchema)),
            m$.jsonErr(400, errors.GetV1WorkflowsResponseBody$inboundSchema),
            m$.fail([401, "4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Create a new workflow
     *
     * @remarks
     * Create a new workflow by analyzing the provided workflow JSON
     */
    async postV1Workflows(
        request?: operations.PostV1WorkflowsRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PostV1WorkflowsResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.PostV1WorkflowsRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = pathToFunc("/v1/workflows")();

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "post_/v1/workflows",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.PostV1WorkflowsResponseBody,
            errors.PostV1WorkflowsResponseBody | SDKError | SDKValidationError
        >(
            m$.json(200, operations.PostV1WorkflowsResponseBody$inboundSchema),
            m$.jsonErr(400, errors.PostV1WorkflowsResponseBody$inboundSchema),
            m$.fail([401, "4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve a specific workflow by ID
     *
     * @remarks
     * Retrieve the latest version of a specific workflow by its ID
     */
    async getV1WorkflowsWorkflowId(
        request: operations.GetV1WorkflowsWorkflowIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetV1WorkflowsWorkflowIdResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) => operations.GetV1WorkflowsWorkflowIdRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            workflow_id: encodeSimple$("workflow_id", payload$.workflow_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/v1/workflows/{workflow_id}")(pathParams$);

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "get_/v1/workflows/{workflow_id}",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.GetV1WorkflowsWorkflowIdResponseBody,
            errors.GetV1WorkflowsWorkflowIdResponseBody | SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetV1WorkflowsWorkflowIdResponseBody$inboundSchema),
            m$.jsonErr(400, errors.GetV1WorkflowsWorkflowIdResponseBody$inboundSchema),
            m$.fail([401, "4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }

    /**
     * Retrieve the most recent outputs for a workflow
     *
     * @remarks
     * Retrieve the latest version of a specific workflow by its ID
     */
    async getV1WorkflowsWorkflowIdOutputs(
        request: operations.GetV1WorkflowsWorkflowIdOutputsRequest,
        options?: RequestOptions
    ): Promise<operations.GetV1WorkflowsWorkflowIdOutputsResponseBody> {
        const input$ = request;

        const parsed$ = schemas$.safeParse(
            input$,
            (value$) =>
                operations.GetV1WorkflowsWorkflowIdOutputsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const payload$ = unwrap$(parsed$);
        const body$ = null;

        const pathParams$ = {
            workflow_id: encodeSimple$("workflow_id", payload$.workflow_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };

        const path$ = pathToFunc("/v1/workflows/{workflow_id}/outputs")(pathParams$);

        const query$ = encodeFormQuery$({
            page: payload$.page,
            pageSize: payload$.pageSize,
            runOrigin: payload$.runOrigin,
            search: payload$.search,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const bearerAuth$ = await extractSecurity(this.options$.bearerAuth);
        const security$ = bearerAuth$ == null ? {} : { bearerAuth: bearerAuth$ };
        const context = {
            operationID: "get_/v1/workflows/{workflow_id}/outputs",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = resolveGlobalSecurity(security$);

        const requestRes$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );
        const request$ = unwrap$(requestRes$);

        const doResult = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });
        const response = unwrap$(doResult);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await m$.match<
            operations.GetV1WorkflowsWorkflowIdOutputsResponseBody,
            errors.GetV1WorkflowsWorkflowIdOutputsResponseBody | SDKError | SDKValidationError
        >(
            m$.json(200, operations.GetV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema),
            m$.jsonErr(400, errors.GetV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema),
            m$.fail([401, "4XX", "5XX"])
        )(response, { extraFields: responseFields$ });

        return unwrap$(result$);
    }
}
