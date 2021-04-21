import to from "await-to-js";
import e from "express";

export default async(req, res) => {
    try{
        const { binance } = req;
        const [err, response] = await to(binance.bookTickers(req.query.symbol));
        if(err || !response){
            res.status(500).json({
                error: 'Generic error'
            })
        }
        res.send(response);
    }catch(error){
        if(error) res.status(500).json({
            error: error.message
        });
    }
}