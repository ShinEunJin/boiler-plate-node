import express from 'express';
import './db'

const PORT = 5000;

const app = express();

app.get('/', (req, res) => res.send('hi'));
app.listen(PORT, () => console.log(`✅ server is connected to ${PORT}`));
