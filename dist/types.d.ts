export interface PostEntry {
    title: string;
    date: string;
    content: string;
    tag: string;
}
export declare type Scrapper = (tags: string[], currentPostsIds?: Set<string>) => Promise<Map<string, PostEntry[]>>;
