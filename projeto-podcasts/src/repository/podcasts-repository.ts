import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcast-model";

const pathToPodcasts = path.resolve(__dirname, "podcasts.json");

export const getPodcasts = async (podcastName?: string): Promise<Podcast[]> => {
  const data = fs.readFileSync(pathToPodcasts, "utf-8");
  let podcasts = JSON.parse(data);

  if (podcastName) {
    podcasts = podcasts.filter(
      (podcast: Podcast) =>
        podcast.podcastName === decodeURIComponent(podcastName?.toString())
    );
  }
  return podcasts;
};

function normalize(str: string) {
  return str.replace(/\s+/g, " ").trim().toLowerCase();
}
