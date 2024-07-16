/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import * as z from "zod";

export class Workflows extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Get a websocket url for a specific deployment
     */
    async getWebsocketDeploymentId(
        request: operations.GetWebsocketDeploymentIdRequest,
        options?: RequestOptions
    ): Promise<operations.GetWebsocketDeploymentIdResponseBody> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetWebsocketDeploymentIdRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            deployment_id: encodeSimple$("deployment_id", payload$.deployment_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/websocket/{deployment_id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get_/websocket/{deployment_id}",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetWebsocketDeploymentIdResponseBody>()
            .json(200, operations.GetWebsocketDeploymentIdResponseBody$inboundSchema)
            .fail([401, "4XX", "5XX"])
            .json(500, errors.GetWebsocketDeploymentIdResponseBody$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Create an endpoint for a machine
     */
    async postMachineEndpoint(
        request?: operations.PostMachineEndpointRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.PostMachineEndpointResponseBody> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PostMachineEndpointRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/machine-endpoint")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "post_/machine-endpoint",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["401", "4XX", "500", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostMachineEndpointResponseBody>()
            .json(200, operations.PostMachineEndpointResponseBody$inboundSchema)
            .fail([401, "4XX", "5XX"])
            .json(500, errors.PostMachineEndpointResponseBody$inboundSchema, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
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

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetV1WorkflowsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/v1/workflows")();

        const query$ = encodeFormQuery$({
            page: payload$.page,
            pageSize: payload$.pageSize,
            search: payload$.search,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get_/v1/workflows",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<Array<operations.GetV1WorkflowsResponseBody>>()
            .json(200, z.array(operations.GetV1WorkflowsResponseBody$inboundSchema))
            .json(400, errors.GetV1WorkflowsResponseBody$inboundSchema, { err: true })
            .fail([401, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
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

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.PostV1WorkflowsRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/v1/workflows")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "post_/v1/workflows",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.PostV1WorkflowsResponseBody>()
            .json(200, operations.PostV1WorkflowsResponseBody$inboundSchema)
            .json(400, errors.PostV1WorkflowsResponseBody$inboundSchema, { err: true })
            .fail([401, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
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

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetV1WorkflowsWorkflowIdRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            workflow_id: encodeSimple$("workflow_id", payload$.workflow_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/workflows/{workflow_id}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get_/v1/workflows/{workflow_id}",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.GetV1WorkflowsWorkflowIdResponseBody>()
            .json(200, operations.GetV1WorkflowsWorkflowIdResponseBody$inboundSchema)
            .json(400, errors.GetV1WorkflowsWorkflowIdResponseBody$inboundSchema, { err: true })
            .fail([401, "4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
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

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.GetV1WorkflowsWorkflowIdOutputsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            workflow_id: encodeSimple$("workflow_id", payload$.workflow_id, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/v1/workflows/{workflow_id}/outputs")(pathParams$);

        const query$ = encodeFormQuery$({
            page: payload$.page,
            pageSize: payload$.pageSize,
            runOrigin: payload$.runOrigin,
            search: payload$.search,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        let security$;
        if (typeof this.options$.bearerAuth === "function") {
            security$ = { bearerAuth: await this.options$.bearerAuth() };
        } else if (this.options$.bearerAuth) {
            security$ = { bearerAuth: this.options$.bearerAuth };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "get_/v1/workflows/{workflow_id}/outputs",
            oAuth2Scopes: [],
            securitySource: this.options$.bearerAuth,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
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

        const response = await this.do$(request$, {
            context,
            errorCodes: ["400", "401", "4XX", "5XX"],
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] =
            await this.matcher<operations.GetV1WorkflowsWorkflowIdOutputsResponseBody>()
                .json(200, operations.GetV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema)
                .json(400, errors.GetV1WorkflowsWorkflowIdOutputsResponseBody$inboundSchema, {
                    err: true,
                })
                .fail([401, "4XX", "5XX"])
                .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
