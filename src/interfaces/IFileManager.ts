export interface IFileManager {
  listDirectory(): string[]
  isDirectory(filePath: string): boolean
  isCsvFile(filePath: string): boolean
}