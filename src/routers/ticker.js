import express from 'express';
import binance from '../middleware/binance';
import getTicker from '../controllers/ticker/getTicker';
import getBalance from '../controllers/ticker/getBalance';
import getBidAskForASymbol from '../controllers/ticker/getBidAskForASymbol';
import buy from '../controllers/ticker/buy';
import sell from '../controllers/ticker/sell';

const router = express.Router();

router.get('/tickers', binance, getTicker);
router.get('/balance', binance, getBalance);
router.get('/singleticker', binance, getBidAskForASymbol);
router.get('/buy', binance, buy);
router.get('/sell', binance, sell);

export default router;
