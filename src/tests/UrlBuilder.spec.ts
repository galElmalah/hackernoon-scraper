import { UrlBuilder } from "../UrlBuilder";

describe("UrlBuilder", () => {
  it("should return the right link given a tag", () => {
    expect(UrlBuilder.getUrlWithTag("code")).toBe(
      "https://hackernoon.com/tagged/code"
    );
  });

  it("should return the right post link given a post id", () => {
    expect(UrlBuilder.getPostUrl("/some-id")).toBe(
      "https://hackernoon.com/some-id"
    );
  });

  it("should extract the id from the post url", () => {
    expect(
      UrlBuilder.extractPostIdFromLink(
        "https://hackernoon.com/top-5-object-oriented-programming-and-design-courses-for-programmers-ad49f0870de4"
      )
    ).toBe("ad49f0870de4");
  });
});
