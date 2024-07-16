/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Comfyui } from "./comfyui.js";
import { Files } from "./files.js";
import { Machines } from "./machines.js";
import { Run } from "./run.js";
import { Workflows } from "./workflows.js";

export class ComfyDeploy extends ClientSDK {
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

    private _run?: Run;
    get run(): Run {
        return (this._run ??= new Run(this.options$));
    }

    private _files?: Files;
    get files(): Files {
        return (this._files ??= new Files(this.options$));
    }

    private _workflows?: Workflows;
    get workflows(): Workflows {
        return (this._workflows ??= new Workflows(this.options$));
    }

    private _comfyui?: Comfyui;
    get comfyui(): Comfyui {
        return (this._comfyui ??= new Comfyui(this.options$));
    }

    private _machines?: Machines;
    get machines(): Machines {
        return (this._machines ??= new Machines(this.options$));
    }
}
