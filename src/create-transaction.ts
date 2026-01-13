import axios from "axios"
import { DepthManager } from "./DepthManager"
import { cancelAll, createOrder } from "./order"
const solUsdtMarket  = new DepthManager("SOL_USDT")
const ethUsdtMarket  = new DepthManager("ETH_USDT")
const btcUsdtMarket  = new DepthManager("BTC_USDT")
const ustdInrMarket = new DepthManager("USDT_INR")
const solInrMarket = new DepthManager("SOL_INR")

export async function createTransacation(result:string){
    let market:DepthManager|"" = ""
    let CRYPTO:string=""
    let quantity:string=""
    switch (result) {
        case "solana":
            market = solUsdtMarket
            CRYPTO="SOLUSDT"
            quantity="0.001"
            break;
        case "bitcoin":
            market = btcUsdtMarket
            CRYPTO="BTCUSDT"
            quantity="0.00001"
            break;
        case "ethereum":
            market = ethUsdtMarket
            CRYPTO="ETHUSDT"
            quantity="0.0001"
            break;
        
    }
for(let i=1;i<=2;i++){
    if(market === "") return
    const highestBid = market.getRelevantDepth().highestBid;
    console.log(`placing order for ${(highestBid) + 0.01}`);
    console.log("buy", CRYPTO, parseFloat((highestBid+0.01 ).toFixed(1)), Number(quantity), Math.random().toString())
    let order = await createOrder("buy", CRYPTO, parseFloat((highestBid+0.01 ).toFixed(1)), Number(quantity), Math.random().toString())
    await new Promise((r) => setTimeout(r, 5000));
    await cancelAll(CRYPTO);
    await new Promise((r) => setTimeout(r, 2000));

}
}

