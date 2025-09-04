import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { CONTENT_TYPE } from "../utils/content-type";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const getListPodcasts = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceListEpisodes();

  response.writeHead(content.statusCode, { "Content-Type": CONTENT_TYPE.JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};

export const getFilterPodcasts = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content: FilterPodcastModel = await serviceFilterEpisodes(request.url);

  response.writeHead(content.statusCode, { "Content-Type": CONTENT_TYPE.JSON });
  response.write(JSON.stringify(content.body));
  response.end();
};
