# hackernoon-scraper
A scrapper that accept tags and return all the blog posts related to that tag (that currently appear on the tag page).
the data is returned in the following shape 
```typescript
export interface PostEntry {
  title: string;
  date: string;
  content: string;
  tag: string;
  postId?:string;
}

export type Scrapper = (tags: string[], currentPostsIds?: Set<string>) => Promise<Map<string, PostEntry[]>>
```

so calling the scrapper with let say **coding** and **programming** as input will return a map with the keys **coding**, and **programming** each holding a list of posts.