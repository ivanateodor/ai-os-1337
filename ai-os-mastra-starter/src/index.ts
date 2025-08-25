import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { router } from './routes/api.js';

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

app.use('/api', router);

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(port, () => {
  console.log(`[1337 Mother AI] listening on :${port}`);
});
