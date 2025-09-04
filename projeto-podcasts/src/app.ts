import * as http from "http";
import {
  getListPodcasts,
  getFilterPodcasts,
} from "./controller/podscasts-controller";
import { ROUTES } from "./routes/routes";
import { HTTP_METHODS } from "./utils/http-methods";
import { STATUS_CODE } from "./utils/status-code";
import { CONTENT_TYPE } from "./utils/content-type";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  if (
    request.url === ROUTES.LIST_PODCASTS &&
    request.method === HTTP_METHODS.GET
  ) {
    await getListPodcasts(request, response);
  } else if (
    request.url?.startsWith(ROUTES.FILTER_PODCASTS) &&
    request.method === HTTP_METHODS.GET
  ) {
    await getFilterPodcasts(request, response);
  } else {
    response.writeHead(STATUS_CODE.NOT_FOUND, {
      "Content-Type": CONTENT_TYPE.JSON,
    });
    response.end(JSON.stringify({ message: "Not Found" }));
  }
};
