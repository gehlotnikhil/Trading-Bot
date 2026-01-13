import axios from "axios"

type OrderBook = {
  timestamp: number;
  asks: Record<string, string>; // price -> quantity
  bids: Record<string, string>; // price -> quantity
};


export class DepthManager{
    market: string;
    private bids:{
        [key:string]:string
    }
    private asks:{
        [key:string]:string
    }
    constructor(market:string){
        this.market=market
        this.bids={}
        this.asks = {}
        setInterval(()=>{
            this.pollMarket();
        },3000)

    }
    async pollMarket(){
        const depth:OrderBook = (await axios.get(`https://public.coindcx.com/market_data/orderbook?pair=B-${this.market}`)).data
        this.bids =depth.bids;
        this.asks = depth.asks;


    }
    getRelevantDepth(){
        let highestBid = -100
        let lowestAsk = 10000000000000;
        Object.keys(this.bids).map(x=>{
        if (this.bids[x] !== undefined && parseFloat(x) > highestBid) {
                highestBid=parseFloat(x)
            }
        })
        Object.keys(this.asks).map(x=>{
        if (this.asks[x] !== undefined && parseFloat(x) < lowestAsk) {
                lowestAsk=parseFloat(x)
            }
        })
        return {
            highestBid,lowestAsk
        }
    }
}