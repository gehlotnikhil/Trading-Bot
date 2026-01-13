# 🐦🤖 AI Tweet-Based Crypto Trading Bot

An experimental event-driven crypto trading bot that listens to tweets from selected celebrities (like Elon Musk), uses OpenAI (ChatGPT) to analyze whether the tweet is related to crypto buying signals, and if so, places a trade on the CoinDCX exchange.

> Tweet → AI → Decision → Trade

This project is for **learning, experimentation, and small-amount testing only**.


---
## ✨ System Design

<p align="center">
  <img src="assets/trading-bot-design.png" width="900"/>
</p>

---

## ✨ Features

- 🔍 Monitors tweets from specific accounts
- 🤖 Uses ChatGPT to understand tweet intent
- 🪙 Detects crypto-related buy signals (BTC, ETH, SOL)
- 📈 Places limit orders on CoinDCX
- ❌ Cancels all orders after a short time window
- 🔐 Secure HMAC authentication
- 📏 Precision-safe trading (price & quantity rounding)
- 🧪 Built for small experimental trades

---

## 🛠 Tech Stack

- Node.js + TypeScript  
- Twitter (X) API  
- OpenAI API  
- CoinDCX API  
- Axios / Request  
- Crypto (HMAC SHA256)

---


## 🧠 Core Idea (First Principle)

Every automated trading system has four fundamental parts:

1. **Sense** → Get new data (Tweets)
2. **Think** → Understand meaning (ChatGPT)
3. **Decide** → Trade or ignore
4. **Act** → Place order (CoinDCX)

Your bot follows this exact pipeline.

---

## 🔁 System Flow

Twitter (X) API →
Tweet Filter (specific users like Elon Musk) →
OpenAI / ChatGPT (classification) →
{ trade: true, coin: "BTC" | "ETH" | "SOL" } ? 
Yes → Place Order on CoinDCX || 
No → Ignore


---


## 🔐 Environment Variables

Create a `.env` file in the root of the project:

```env
OPENAI_API_KEY=your_openai_api_key
TWITTER_BEARER_TOKEN=your_twitter_api_key
COINDCX_API_KEY=your_coindcx_api_key
COINDCX_API_SECRET=your_coindcx_api_secret
