import { extractors } from '../extractors';
const { data: tagPageHtml } = require('./data/tagPageHtml.json');

const requesterMock = (html) => {
  return {
    get: jest.fn()
  }
}

describe('extractors', () => {
  let requesterMock, blogExtractors;

  it('should get and extract all the blog posts links given a correct html', async () => {
    requesterMock = requesterMock(tagPageHtml);
    blogExtractors = extractors(requesterMock)
    expect(await blogExtractors.extractBlogPostsLinksFromTagPage('coding')).toBe([])

  })
})