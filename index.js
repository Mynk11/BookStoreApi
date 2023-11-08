// Import required modules
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import app from './app.js';
import { dbConnection } from './service/db.js';

// Determine the directory of the current ESM module (your entry file).
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables from a specific .env file.
dotenv.config({ path: `${__dirname}/.env` });

dbConnection();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
