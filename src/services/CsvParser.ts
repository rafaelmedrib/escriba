import { ReadStream } from "fs";
import { ICsvParser } from "../interfaces/ICsvParser";
import parser from 'csvtojson'

export class CsvParser<T> implements ICsvParser<T> {
  async parseCsv(readStream: ReadStream): Promise<T[]> {
    return parser().fromStream(readStream);
  }
}