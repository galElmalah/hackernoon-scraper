import axios from "axios";
import cheerio from "cheerio";

import { PostEntry, Scrapper } from "./types";
import { UrlBuilder } from "./UrlBuilder";
import { extractors } from "./extractors";

const { extractBlogPostData, extractBlogPostsLinksFromTagPage } = extractors(
  axios
);

export const hackernoonScrapper: Scrapper = async (
  tags,
  currentPostsIds = new Set()
) => {
  const map = new Map<string, PostEntry[]>();
  const blogPostsLinks = await Promise.all(
    tags.map(extractBlogPostsLinksFromTagPage)
  );

  const posts = await Promise.all(
    blogPostsLinks.map((tagsLink, index) =>
      Promise.all(
        tagsLink
          .filter(
            (link: string) =>
              !currentPostsIds.has(UrlBuilder.extractPostIdFromLink(link))
          )
          .map(extractBlogPostData(tags[index]))
      )
    )
  );
  //@ts-ignore
  posts.filter(Boolean).forEach((postData, i) => map.set(tags[i], postData));
  return map;
};

hackernoonScrapper(["coding"]).then(result => {
  console.log(result.values());
});
