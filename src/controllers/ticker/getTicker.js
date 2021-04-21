export default async(req, res) => {
    try{
        const { binance } = req;
        let ticker = await binance.prices();
        res.send(ticker);
    }catch(e){
        if(error) res.status(500).json({
            error
        });
    }
}
