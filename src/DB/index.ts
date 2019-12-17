import * as fs from 'fs';
import * as path from 'path';

export class DB {
  static data = require('../../posts.json');
  static has(id: string): boolean {
    return !!DB.data[id]
  }

  static save(id: string): Promise<void> {
    DB.data[id] = true;
    console.log(DB.data)
    return new Promise(
      (res, rej) =>
        fs.writeFile(
          path.join(__dirname, '../../posts.json'),
          JSON.stringify(DB.data),
          'utf8',
          (err) => err ? rej() : res()));
  }

  static resetPosts(): Promise<void> {
    return new Promise(
      (res, rej) =>
        fs.writeFile(
          path.join(__dirname, '../../posts.json'),
          JSON.stringify({}),
          'utf8',
          (err) => err ? rej() : res()));
  }

}