// import { NextApiRequest, NextApiResponse } from 'next';
// import express, { Express } from 'express';
// import mongoose from 'mongoose';

// const app = express();
// const port = process.env.PORT || 3000;

// mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('Connected to MongoDB');
// });

// app.use(express.json());

// const apiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'GET') {
//     // Handle GET request
//   } else if (req.method === 'POST') {
//     // Handle POST request
//   } else if (req.method === 'PUT') {
//     // Handle PUT request
//   } else if (req.method === 'DELETE') {
//     // Handle DELETE request
//   } else {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }
// };

// app.use('/api', apiRoute);

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// export default app;