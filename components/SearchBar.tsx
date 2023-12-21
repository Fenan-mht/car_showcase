"use client";
import React from "react";
import { SearchManufacturer } from ".";
import { useState } from "react";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};
  return (
    <div>
      <form onSubmit={handleSearch} className="searchbar">
        <div className="searchbar__items">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
