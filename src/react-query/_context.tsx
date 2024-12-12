
import React from "react";

import { ComfyDeployCore } from "../core.js";

const ComfyDeployContext = React.createContext<ComfyDeployCore | null>(null);

export function ComfyDeployProvider(props: { client: ComfyDeployCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <ComfyDeployContext.Provider value={props.client}>
      {props.children}
    </ComfyDeployContext.Provider>
  );
}

export function useComfyDeployContext(): ComfyDeployCore { 
  const value = React.useContext(ComfyDeployContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of ComfyDeployCore and pass it to <ComfyDeployProvider />.");
  }
  return value;
}
