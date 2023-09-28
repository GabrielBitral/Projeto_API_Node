import { sql } from './db.js'

sql`CREATE TABLE Videos (
    id TEXT PRIMARY KEY,
    title VARCHAR(255),
    duration INTEGER,
    description TEXT
);
`.then(() => {
    console.log('Tabela Criada')
})