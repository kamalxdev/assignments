import { Client } from 'pg'
import { DB_URL } from './config';

export const client = new Client({
    connectionString: DB_URL
});




// Path: week-10/1-postgres-simple/src/db/setup.ts

