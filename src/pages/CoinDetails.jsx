// src/pages/CoinDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import CoinChart from "../components/CoinChart";
import "../styles/CoinDetails.scss";

const API_COINS = import.meta.env.VITE_COIN_API;

function CoinDetails() {
  const { id } = useParams();
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${API_COINS}/${id}`);
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCoin();
  }, [id]);

  return (
    <div className="coin-details-container">
      <Link to="/" className="back-btn">
        ← Back
      </Link>

      {loading && <Spinner />}
      {error && <div className="error">{error}</div>}

      {!loading && !error && coins && (
        <>
          <div className="header-section">
            <img
              src={coins.image.large}
              alt={coins.name}
              className="coin-image"
            />
            <div className="header-info">
              <h1>
                {coins.name} <span>({coins.symbol.toUpperCase()})</span>
              </h1>
              <p className="description">
                {coins.description.en.split(". ")[0]}.
              </p>
              <div className="rank-price">
                <span>Rank #{coins.market_cap_rank}</span>
                <span>
                  ${coins.market_data.current_price.usd.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="grid-info">
            <div>
              Market Cap: ${coins.market_data.market_cap.usd.toLocaleString()}
            </div>
            <div>
              24h High: ${coins.market_data.high_24h.usd.toLocaleString()}
            </div>
            <div>
              24h Low: ${coins.market_data.low_24h.usd.toLocaleString()}
            </div>
            <div>
              Price Change (24h):{" "}
              {coins.market_data.price_change_24h.toFixed(2)} (
              {coins.market_data.price_change_percentage_24h.toFixed(2)}%)
            </div>
            <div>
              Circulating Supply:{" "}
              {coins.market_data.circulating_supply.toLocaleString()}
            </div>
            <div>
              Total Supply:{" "}
              {coins.market_data.total_supply?.toLocaleString() || "N/A"}
            </div>
            <div>
              All Time High: ${coins.market_data.ath.usd.toLocaleString()} on{" "}
              {new Date(coins.market_data.ath_date.usd).toLocaleDateString()}
            </div>
            <div>
              All Time Low: ${coins.market_data.atl.usd.toLocaleString()} on{" "}
              {new Date(coins.market_data.atl_date.usd).toLocaleDateString()}
            </div>
            <div>
              Last Updated: {new Date(coins.last_updated).toLocaleString()}
            </div>
          </div>

          <CoinChart coinId={coins.id} />

          <div className="external-links">
            {coins.links.homepage[0] && (
              <a
                href={coins.links.homepage[0]}
                target="_blank"
                rel="noreferrer"
              >
                🌐 Official Website
              </a>
            )}
            {coins.links.blockchain_site[0] && (
              <a
                href={coins.links.blockchain_site[0]}
                target="_blank"
                rel="noreferrer"
              >
                🔗 Blockchain Explorer
              </a>
            )}
            {coins.categories.length > 0 && (
              <p>
                <strong>Categories:</strong> {coins.categories.join(", ")}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CoinDetails;
