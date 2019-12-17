import axios from 'axios'
import cheerio from 'cheerio';
import * as fs from 'fs';
import * as path from 'path';
import { DB } from './DB';
const hackernoonUrl = 'https://hackernoon.com';

const getUrlWithTag = (tag: string): string => `${hackernoonUrl}/tagged/${tag}`;

const getPageBlogPostsLinks = async (tag: string): Promise<string[]> => {
  const { data: html } = await axios.get(getUrlWithTag(tag))

  const $ = cheerio.load(html)
  const blogLinks = $('.story-card .title a')
  return Array.from(blogLinks).map(e => `${hackernoonUrl}${e.attribs.href}`)
}

const blogTitleToFileName = (title: string): string => `${title.trim().replace(/\s+/g, '-')}.md`;
const extractPostIdFromLink = (link: string): string => link.split('-').pop();
(async () => {
  const blogPostsLinks = await getPageBlogPostsLinks('coding');
  blogPostsLinks.forEach(link => {
    if (DB.has(extractPostIdFromLink(link))) {
      console.log('hit')
      return;
    }
    axios.get(link).then(({ data: blogPostHtml }) => {
      const $ = cheerio.load(blogPostHtml);
      const title = $('h1.title').text().replace(/\//g, '\\')
      const date = $('.story-meta .date').text().trim();
      const content = $('.content').html().trim().replace(/(\n)/g, '');
      fs.writeFile(path.join(process.cwd(), 'posts', blogTitleToFileName(title)), content, (err) => {
        if (!err) {
          DB.save(extractPostIdFromLink(link))
        }
        console.log(err)
      })
    })
  })
})();