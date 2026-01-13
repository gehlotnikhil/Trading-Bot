const axios = require('axios');

export interface Tweets{
    text:string,
    id:string,
    created_at:string
}

export async function getTweets(userid:string):Promise<Tweets[]>{
const TWEET_MAX_TIME_MS=1000*60*60*24*2
// userid example:1553512428163502085
try{
  console.log(process.env.BEARER_TOKEN)
  const response = await axios.get(`https://api.x.com/2/users/${userid}/tweets?tweet.fields=created_at`,
    {
    headers: {
      "Authorization": `Bearer ${process.env.BEARER_TOKEN}`,
      "Content-Type": "application/json",
    },
  }
  )
  const data2 = response.data.data.map((x:any)=>({id:x.id,text:x.text,created_at:x.created_at}))
  console.log("data2----",data2)
  const data = response.data.data.filter((x:any)=>{
    if(new Date(x.created_at).getTime()>Date.now()-TWEET_MAX_TIME_MS) 
      return ({id:x.id,text:x.text,created_at:x.created_at})
  })
  console.log("g--------",data)
  return data 
}
catch(error){
  console.log(error,"++")
  return []
}

}

