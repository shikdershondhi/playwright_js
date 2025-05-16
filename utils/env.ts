import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'dev'}`;
dotenv.config({ path: path.resolve(__dirname, '../env', envFile) });

export const BASE_URL = process.env.BASE_URL || 'https://nsdev24.neustring.com/';