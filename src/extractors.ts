
import { UrlBuilder } from './UrlBuilder';
import axios, { AxiosInstance } from 'axios'
import cheerio from 'cheerio';
import { PostEntry } from './types';


export function extractors(requester: Partial<AxiosInstance> = axios) {
  const extractBlogPostsLinksFromTagPage = async (tag: string): Promise<string[]> => {
    const { data: html } = await requester.get(UrlBuilder.getUrlWithTag(tag))
    const $ = cheerio.load(html)
    const blogLinks = $('.story-card .title a')
    return Array.from(blogLinks).map(e => e.attribs.href).map(UrlBuilder.getPostUrl)
  }



  const extractBlogPostData = (tag: string) => (link: string): Promise<void | PostEntry> => {
    return requester.get(link).then(({ data: blogPostHtml }) => {
      const $ = cheerio.load(blogPostHtml);
      const title = $('h1.title').text().replace(/\//g, '\\')
      const date = $('.story-meta .date').text().trim();
      const content = $('.content').html().trim().replace(/(\n)/g, '');
      console.log(`Successfully fetched data from ${link}`)
      return { title, date, content, tag }
    }).catch(e => {
      console.log(`Failed to fetch data from ${link}`)
    })
  }

  return { extractBlogPostsLinksFromTagPage, extractBlogPostData }
}
