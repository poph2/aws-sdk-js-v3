// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";

import { defaultEndpointResolver } from "./endpoint/endpointResolver";
import { HealthLakeClientConfig } from "./HealthLakeClient";

/**
 * @internal
 */
export const getRuntimeConfig = (config: HealthLakeClientConfig) => ({
  apiVersion: "2017-07-01",
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "HealthLake",
  urlParser: config?.urlParser ?? parseUrl,
});
