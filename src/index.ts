// import { FileManager } from "./services/FileManager";

import { CsvParser } from "./services/CsvParser";
import { FileManager } from "./services/FileManager";

// const fm = new FileManager();

// console.log(fm.listDirectory());
// console.log(fm.isDirectory('src'));
// console.log(fm.isDirectory('.editorconfig'));
// console.log(fm.isCsvFile('test/mocks/dataExample.csv'));
// console.log(fm.path)
// console.log(fm.path = 'test')
// console.log(fm.path)
// console.log(fm.path = 'mocks')
// console.log(fm.path)

const csvParser = new CsvParser<Record<string, unknown>>();
const fm = new FileManager();
fm.path = 'test/mocks';
const readStream = fm.read('dataExample.csv');
csvParser.parseCsv(readStream).then((data) => console.log(data));