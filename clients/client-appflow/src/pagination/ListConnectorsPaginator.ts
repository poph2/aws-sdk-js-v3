// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppflowClient } from "../AppflowClient";
import {
  ListConnectorsCommand,
  ListConnectorsCommandInput,
  ListConnectorsCommandOutput,
} from "../commands/ListConnectorsCommand";
import { AppflowPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppflowClient,
  input: ListConnectorsCommandInput,
  ...args: any
): Promise<ListConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConnectorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConnectors(
  config: AppflowPaginationConfiguration,
  input: ListConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListConnectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConnectorsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AppflowClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Appflow | AppflowClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
