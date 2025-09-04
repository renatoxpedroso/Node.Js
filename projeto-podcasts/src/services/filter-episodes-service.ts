import { getPodcasts } from "../repository/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";
import { STATUS_CODE } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  incominUrl: string | undefined
): Promise<FilterPodcastModel> => {
  let responseFormate: FilterPodcastModel = {
    statusCode: 0,
    body: [],
  };

  const podcastName: string = incominUrl?.split("?podcastName=").pop() || "";
  const podcasts = await getPodcasts(podcastName);

  responseFormate.statusCode =
    podcasts.length > 0 ? STATUS_CODE.OK : STATUS_CODE.NO_CONTENT;
  responseFormate.body = podcasts;

  return responseFormate;
};
