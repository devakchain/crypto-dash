import CoinCard from "../components/CoinCard";
import LimitCoins from "../components/LimitCoins";
import FilterCoinName from "../components/FilterCoinName";
import SortCoins from "../components/SortCoins";
import Spinner from "../components/Spinner";

function Home({
  coins,
  filter,
  setFilter,
  limit,
  setLimit,
  sortBy,
  setSortBy,
  loading,
  error,
}) {
  const filtersCoins = coins
    .filter((coin) => {
      return (
        coin.name.toLowerCase().includes(filter.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(filter.toLowerCase())
      );
    })
    .slice()
    .sort((a, b) => {
      switch (sortBy) {
        case "market_cap_desc":
          return b.market_cap - a.market_cap;
        case "market_cap_asc":
          return a.market_cap - b.market_cap;
        case "price_desc":
          return b.current_price - a.current_price;
        case "price_asc":
          return a.current_price - b.current_price;
        case "change_desc":
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        case "change_asc":
          return a.price_change_percentage_24h - b.price_change_percentage_24h;

        default:
          break;
      }
    });
  return (
    <div>
      <h1>Crypto DashBoard</h1>
      {loading && <Spinner />}
      {error && <div className="error">{error}</div>}
      <div>
        <div className="top-controls">
          <FilterCoinName filter={filter} onFilterChange={setFilter} />
          <LimitCoins limit={limit} setLimit={setLimit} />
          <SortCoins sortBy={sortBy} onSortChange={setSortBy} />
        </div>
        {!loading && !error && (
          <main className="grid">
            {filtersCoins.length > 0 ? (
              filtersCoins?.map((coin) => {
                return <CoinCard key={coin.id} coin={coin} />;
              })
            ) : (
              <p>No matching coin</p>
            )}
          </main>
        )}
      </div>
    </div>
  );
}

export default Home;
