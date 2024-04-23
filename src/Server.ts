import express, { Request, Response } from "express";
const app = express();

// Define a route
app.get('/', (req:Request, res: Response) => {
  res.send('Hello, World!');
});

// Define the port number   
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
