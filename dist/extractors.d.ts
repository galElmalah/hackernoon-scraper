import { PostEntry } from './types';
export declare const extractBlogPostsLinksFromTagPage: (tag: string) => Promise<string[]>;
export declare const extractBlogPostData: (tag: string) => (link: string) => Promise<void | PostEntry>;
