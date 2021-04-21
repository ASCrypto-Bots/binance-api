import jwt from 'jsonwebtoken';
import to from 'await-to-js';
const Binance = require('node-binance-api');

export default async (req, res, next) => {
    try {
        const binance = new Binance().options({
            APIKEY: process.env.BINANCE_API_KEY,
            APISECRET: process.env.BINANCE_SECRET_KEY
        });

        req.binance = binance;
        next();
    }catch (e) {
        res.status(401).json({
            error: `Auth: ${e.toLocaleString()}`
        }
    );
    }
}
