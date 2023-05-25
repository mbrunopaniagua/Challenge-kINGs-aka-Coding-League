import fs from 'fs/promises';
import { getChecksum } from "./algorithm.js";

const readFile = async file => fs.readFile(file, { encoding: 'utf-8'});

const data = await readFile('./resources/spreadsheet.txt');

console.log('Password:', getChecksum(data));
