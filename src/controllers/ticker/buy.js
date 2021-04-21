import to from "await-to-js";
const fs = require('fs');

export default async(req, res) => {
    try{
        const { binance } = req;
        const quantity = req.query.quantity;
        const price = req.query.price;
        const symbol = req.query.symbol;
        const [error, response] = await to(binance.buy(symbol, quantity, price, {type:'LIMIT'}));
        if(error || !response){
            res.status(400).json({
                error: error 
            });
        }
        fs.appendFile('movements.txt', `Buy ${quantity} ${symbol} at ${price}\r\n`, function (err) {
        if (err) throw err;
            console.log('Saved!');
        });
        res.send(response);
    }catch(e){
        console.log(e.message);   
        if(e) res.status(500).json({
            error: e.message
        });
    }
}
