import * as trpcExpress from '@trpc/server/adapters/express';
import cors from 'cors';
import express from 'express';
import { trpcRouter } from './trpc.ts';

const expressApp = express();
expressApp.get('/ping', (req, res) => {
	res.send('pong');
});

expressApp.use(cors());

expressApp.use(
	'/trpc',
	trpcExpress.createExpressMiddleware({
		router: trpcRouter,
	})
);

expressApp.listen('3000', () => {
	console.info('listening in http://localhost:3000');
});
