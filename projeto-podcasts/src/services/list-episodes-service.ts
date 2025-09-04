import { FilterPodcastModel } from "../models/filter-podcast-model";
import { getPodcasts } from "../repository/podcasts-repository";
import { STATUS_CODE } from "../utils/status-code";

export const serviceListEpisodes = async () => {
  let responseFormate: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const podcasts = await getPodcasts();

  responseFormate.statusCode =
    podcasts.length > 0 ? STATUS_CODE.OK : STATUS_CODE.NO_CONTENT;
  responseFormate.body = podcasts;

  return responseFormate;
};
