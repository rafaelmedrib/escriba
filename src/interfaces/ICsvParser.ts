import { ReadStream } from "fs";

export interface ICsvParser<T> {
  parseCsv(readStream: ReadStream): Promise<T[]>;
}