// In server.js, build a simple Express application that connects to your MongoDB database. The server should:
// Require express, mongodb, and dotenv.
import express from 'express';
import { MongoClient } from 'mongodb';
// Load environment variables from the .env file.
import 'dotenv/config';
// Create an Express app instance.
const app = express();
// Define a port (e.g., 3001).
const port = 3001;
app.listen(port, () => console.log('Server running on port: ' + port))

// Use the MongoClient to connect to the database using the URI from your environment variables.
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
// Create a single GET route at / that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
app.get("/", (req, res) => {
    res.send("Successfully connected to the database!")
})
// Start the server
