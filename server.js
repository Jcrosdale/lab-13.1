// In server.js, build a simple Express application that connects to your MongoDB database. The server should:
// Require express, mongodb, and dotenv.
import express from 'express';
import { MongoClient } from 'mongodb';
import 'dotenv/config';

// Create an Express app instance.
const app = express();

// Define a port (e.g., 3001).
const port = 3001;

// Use the MongoClient to connect to the database using the URI from your environment variables.
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

// Create a single GET route at / that, upon a successful database connection.
app.get("/", async (req, res) => {
    try {
        await client.connect();

        // Sends back a JSON response: { message: "Successfully connected to the database!" }.
        res.json({
            message: "Successfully connected to the database!"
        });

    } catch (error) {
        // If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
        //console.error("DB Error", error)
        res.status(500).json({
            message: "Failed to connect to the database."
        });
    }
    
});

// Start the server
app.listen(port, () => console.log('Server running on http://localhost:' + port))
