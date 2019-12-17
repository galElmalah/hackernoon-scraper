export declare class DB {
    static data: any;
    static has(id: string): boolean;
    static save(id: string): Promise<void>;
    static resetPosts(): Promise<void>;
}
