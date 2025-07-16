import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import CoinDetails from "./pages/CoinDetails";
import Footer from "./components/Footer";

const API_COINS = import.meta.env.VITE_COINS_API;
function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("market_cap_desc");

  console.log(coins);

  useEffect(() => {
    const coinsApi = async () => {
      try {
        const { data } = await axios.get(
          `${API_COINS}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`
        );
        setCoins(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    coinsApi();
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              coins={coins}
              filter={filter}
              setFilter={setFilter}
              limit={limit}
              setLimit={setLimit}
              sortBy={sortBy}
              setSortBy={setSortBy}
              loading={loading}
              error={error}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
