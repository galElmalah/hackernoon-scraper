export class UrlBuilder {
  private static hackernoonUrl = 'https://hackernoon.com';

  static getUrlWithTag = (tag: string): string => `${UrlBuilder.hackernoonUrl}/tagged/${tag}`;

  static extractPostIdFromLink = (link: string): string => link.split('-').pop();

  static getPostUrl = (postIdentifier: string): string => `${UrlBuilder.hackernoonUrl}${postIdentifier}`
}