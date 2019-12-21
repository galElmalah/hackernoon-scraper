import { extractors } from "../extractors";
import { data as tagPageHtml } from "./data/tagPageHtml";
import { data as blogPostHtml } from "./data/blogPostHtml";

const requesterMock = (html: string) => {
  return {
    get: jest.fn().mockResolvedValue({ data: html })
  };
};

describe("extractors", () => {
  let requester;

  it("should get and extract all the blog posts links given a correct html", async () => {
    requester = requesterMock(tagPageHtml);
    const blogExtractors = extractors(requester);
    expect(
      await blogExtractors.extractBlogPostsLinksFromTagPage("coding")
    ).toStrictEqual([
      "https://hackernoon.com/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4",
      "https://hackernoon.com/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4"
    ]);
  });

  it("should get the blog post and extract the title, date and the content", async () => {
    requester = requesterMock(blogPostHtml);
    const blogExtractors = extractors(requester);
    expect(
      await blogExtractors.extractBlogPostData("coding")(
        "https://hackernoon.com/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4"
      )
    ).toStrictEqual({
      postId: "ad49f0870de4",
      title:
        "Top 5 Object Oriented Programming and Design Courses for Programmers",
      content: "Programming",
      date: "September 19th 2018",
      tag: "coding"
    });
  });
  
});
