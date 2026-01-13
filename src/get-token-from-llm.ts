import  OpenAI from "openai"
import { Tweets } from "./index";

const axios = require('axios');
const client =new  OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey:process.env.OPENROUTER_API
}
)
export async function getTokenFromLLM(content:string){
const completion = await client.chat.completions.create({
  model:"openai/gpt-oss-120b:free",
  messages:[
    {
      "role": "system",
      "content": `
      you are an AI agent that need to tell me if this tweet is about only for bitcoin,solana,ethereum. 
      return either bitcoin or solana or ethereum. Return only if it says it is a bull post. and return null for nothing.
      `
    },
    {
      "role": "user",
      "content": content
    }
  ]
}
)

console.log(completion.choices[0].message.content)


  return completion.choices[0].message.content
}




