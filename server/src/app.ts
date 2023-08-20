import createError from 'http-errors';
import express, { ErrorRequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
require('reflect-metadata');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
const errorHandler: ErrorRequestHandler = (err, req, res) => {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	res.status(err.status || 500);
	res.render('error');
};

app.use(errorHandler);

export default app;
