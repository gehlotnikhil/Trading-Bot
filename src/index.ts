import dotenv from "dotenv"
dotenv.config()
// import { createSwapInstruction } from "./create-swap-instruction";
import { getTokenFromLLM } from "./get-token-from-llm";
import { getTweets } from "./get-tweets";
import { sendTxn } from "./sendTxn";
import {createTransacation} from "./create-transaction";
export interface Tweets{
    text:string,
    id:string,
    created_at:string
}

async function main(userid:string) {
    const newTweets:Tweets[] = await getTweets(userid)
    console.log(newTweets,"++")

    for (let tweet of newTweets){
        const result = await getTokenFromLLM(tweet.text)
        console.log(result)
        if(result!=null)
            createTransacation(result)
        
    }
    
}
// main("1863956647053516800")
// main("1553512428163502085")
// main("1382209054999646212")
