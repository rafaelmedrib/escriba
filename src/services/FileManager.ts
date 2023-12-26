import { IFileManager } from "../interfaces/IFileManager";
import fs, { ReadStream } from "fs";
import path from "path";

export class FileManager implements IFileManager {
  constructor(private _path: string[] = ["./"]) {}

  listDirectory(): string[] {
    return fs.readdirSync(path.join(...this._path));
  }

  isCsvFile(filePath: string): boolean {
    const fullPath = path.join(...this._path, filePath);
    return path.extname(fullPath) === ".csv";
  }

  isDirectory(filePath: string): boolean {
    const fullPath = path.join(...this._path, filePath);
    return fs.lstatSync(fullPath).isDirectory();
  }

  read(filePath: string): ReadStream {
    return fs.createReadStream(path.join(...this._path, filePath));
  }

  get path(): string {
    return path.join(...this._path);
  }

  set path(value: string) {
    this._path.push(value);
  }
}
