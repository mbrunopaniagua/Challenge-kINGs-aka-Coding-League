import fs from 'fs/promises';
import { getPassword } from "./algorithm.js";

const readFile = async file => fs.readFile(file, { encoding: 'utf-8'});

const data = await readFile('./input');

console.log('Password:', getPassword(data));
