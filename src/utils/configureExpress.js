import express from 'express';
//import modules
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import allowCors from '../utils/cors';
import bodyParser from 'body-parser';
//routers
import ticker from '../routers/ticker';

const port = process.env.PORT || 8000;

function registerModules(app){
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(cookieParser());
    allowCors(app);
}

function registerRouters(app) {
    app.use('/api', ticker);
}

export default (app) => {
    registerModules(app);
    registerRouters(app);
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
