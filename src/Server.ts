import express, { Request, Response } from "express";
const app = express();
// Define the port number   
const expressPort = 8000;

app.use(express.json());

// Define a route
app.get('/', (req:Request, res: Response) => {
  res.send('Hello Ankur sir !');
});



// Start the server
app.listen(expressPort, () => {
  console.log(`Server is running on port ${expressPort}`);
});
