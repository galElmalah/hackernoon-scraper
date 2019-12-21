
export interface PostEntry {
  title: string;
  date: string;
  content: string;
  tag: string;
}

export type Scrapper = (tags: string[], currentPostsIds?: Set<string>) => Promise<Map<string, PostEntry[]>>

