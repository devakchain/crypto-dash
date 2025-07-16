```
# Crypto Dash
🌐 **Live Demo:** [https://crypto-dashbo.netlify.app/](https://crypto-dashbo.netlify.app/)

Crypto Dash is a professional, responsive cryptocurrency tracking application built with React.
It allows users to search, sort, and explore real-time data of coins, with detailed information and interactive charts.

## Features

- Real-time cryptocurrency data from CoinGecko API
- Search by name or symbol
- Pagination: view 5, 10, 20, or more coins
- Sort by:
  - Market Cap (ascending / descending)
  - Current Price (ascending / descending)
  - 24h Change (ascending / descending)
- Detailed coin page with:
  - Image, name, symbol, and description
  - Rank, current price, market cap
  - 24h high/low, all-time high/low (with dates)
  - Circulating and total supply
  - Last updated timestamp
  - Homepage and explorer links
  - Interactive chart (powered by Chart.js)
- Fully responsive design for mobile and desktop
- Clean, dark-themed UI for modern look

## Tech Stack

- React.js
- React Router DOM
- Axios
- Chart.js (via react-chartjs-2)
- SCSS Modules
- CoinGecko REST API
- Vite

## Getting Started

1. Clone the repository:

   git clone https://github.com/YOUR_USERNAME/crypto-dash.git

2. Navigate to the project folder:

   cd crypto-dash

3. Install dependencies:

   npm install

4. Create a `.env` file in the root directory and add the following line:

   VITE_COIN_API=https://api.coingecko.com/api/v3/coins

5. Run the development server:

   npm run dev

## File Structure

crypto-dash/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── data/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md

## Deployment

You can deploy the app using:
- Netlify
- Vercel
- Render
Just make sure to configure the environment variable (API URL) on the hosting platform.

## Author

Developed by: Shmuel Yitzhak
Email: shmoelyitzhak@gmail.com
All rights reserved.
```
