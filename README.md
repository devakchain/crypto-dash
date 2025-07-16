## Live Site

## https://crypto-dashbo.netlify.app/

---

````markdown
# Crypto Dash – React Cryptocurrency Tracker

Crypto Dash is a professional, fully responsive cryptocurrency tracking app built with **React.js** and powered by the **CoinGecko API**.  
It offers live market data, advanced search, sorting, pagination, and detailed insights for every coin — wrapped in a sleek, modern UI.

---

## Features

- Live data from CoinGecko (no API key needed)
- Search coins by name or symbol
- Adjustable pagination (5, 10, 20, or more)
- Sort by:
  - Market Cap (ascending / descending)
  - Current Price (ascending / descending)
  - 24h Change (ascending / descending)
- Detailed coin view:
  - Name, symbol, logo
  - Rank, current price, market cap
  - 24h high/low, all-time high/low
  - Supply data and update timestamps
  - External links (homepage, explorer)
  - Interactive price chart (Chart.js)
- 100% responsive – desktop, tablet, and mobile
- Smooth and clean dark UI

---

## Tech Stack

- **Frontend**: React.js, Vite, React Router, SCSS
- **HTTP**: Axios
- **Charts**: Chart.js (via react-chartjs-2)
- **Data Source**: CoinGecko REST API

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/crypto-dash.git
cd crypto-dash
```
````

### 2. Install dependencies

```bash
npm install
```

### 3. Add environment variable

Create a `.env` file in the root directory with:

```env
VITE_COIN_API=https://api.coingecko.com/api/v3/coins
```

### 4. Start the development server

```bash
npm run dev
```

---

## Folder Structure

```plaintext
crypto-dash/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Home & CoinDetails
│   ├── styles/          # SCSS Modules
│   ├── data/            # Static / dummy data
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
```

---

## Deployment

Can be deployed easily using:

- Netlify
- Vercel
- Render

Just make sure to set the environment variable (`VITE_COIN_API`) on the platform.

---

## Author

**Developed by:** Shmuel Yitzhak  
**Email:** shmoelyitzhak@gmail.com  
All rights reserved.

```

```
