// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAnomalyGroupTimeSeriesCommand,
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "../commands/ListAnomalyGroupTimeSeriesCommand";
import { LookoutMetricsClient } from "../LookoutMetricsClient";
import { LookoutMetricsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LookoutMetricsClient,
  input: ListAnomalyGroupTimeSeriesCommandInput,
  ...args: any
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAnomalyGroupTimeSeriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAnomalyGroupTimeSeries(
  config: LookoutMetricsPaginationConfiguration,
  input: ListAnomalyGroupTimeSeriesCommandInput,
  ...additionalArguments: any
): Paginator<ListAnomalyGroupTimeSeriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAnomalyGroupTimeSeriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LookoutMetricsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected LookoutMetrics | LookoutMetricsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
