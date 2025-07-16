import React from "react";

function FilterCoinName({ filter, onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        value={filter}
        placeholder="Filter by name or symbol"
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}

export default FilterCoinName;
