import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.REACT_APP_PORT || 5000;

app.use(cors());


app.get('/api/movies', async (req, res) => {
    const apiKey = process.env.REACT_APP_OMDB_API_KEY;
    const searchTerm = req.query.s;

    if (!searchTerm) {
        return res.status(400).json({ error: "Search term is required" });
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`);


        if (!response.ok) {
            const errorText = await response.text();
            return res.status(response.status).json({ error: "OMDB API Error: " + errorText });
        }

        const data = await response.json();
        res.json(data.Search);
    } catch (error) {
        res.status(500).json({ error: "An error occurred" });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});