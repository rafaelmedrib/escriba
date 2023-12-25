import { ReadStream } from "fs"

export interface IFileManager {
  listDirectory(): string[]
  isDirectory(filePath: string): boolean
  isCsvFile(filePath: string): boolean
  read(filePath: string): ReadStream
}