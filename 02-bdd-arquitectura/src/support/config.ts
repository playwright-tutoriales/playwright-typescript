import 'dotenv/config';
import fs from 'fs';
import path from 'path';

export function loadConfig() {
  const env = process.env.ENV ?? 'qa';
  const file = path.join(__dirname, '../config', `${env}.json`);
  return JSON.parse(fs.readFileSync(file, 'utf-8'));
}
