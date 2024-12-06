import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { config } from 'dotenv';
config();

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' })); // Enable CORS
app.use(json()); // Parse JSON bodies

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
