import { IFileManager } from "../interfaces/IFileManager";
import fs from "fs";
import path from "path";

export class FileManager implements IFileManager {
  constructor(private path: string = './') {}

  listDirectory(): string[] {
    return fs.readdirSync(this.path);
  }

  isCsvFile(filePath: string): boolean {
    const fullPath = path.join(...this.path, filePath);
    return path.extname(fullPath) === '.csv';
  }

  isDirectory(filePath: string): boolean {
    const fullPath = path.join(...this.path, filePath);
    return fs.lstatSync(fullPath).isDirectory();
  }
}