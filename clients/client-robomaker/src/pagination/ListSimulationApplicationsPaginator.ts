// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSimulationApplicationsCommand,
  ListSimulationApplicationsCommandInput,
  ListSimulationApplicationsCommandOutput,
} from "../commands/ListSimulationApplicationsCommand";
import { RoboMakerClient } from "../RoboMakerClient";
import { RoboMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RoboMakerClient,
  input: ListSimulationApplicationsCommandInput,
  ...args: any
): Promise<ListSimulationApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSimulationApplicationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSimulationApplications(
  config: RoboMakerPaginationConfiguration,
  input: ListSimulationApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSimulationApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSimulationApplicationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RoboMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RoboMaker | RoboMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
