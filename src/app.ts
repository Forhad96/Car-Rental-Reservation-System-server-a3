/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://drive-now-client-iota.vercel.app',
    ],
    credentials: true,
  }),
);

// application routes
app.use('/api/v1', router);
// app.use('/',(req,res)=>{
//     res.send('Car-Rental-Reservation-System-server is Running');
// })

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
