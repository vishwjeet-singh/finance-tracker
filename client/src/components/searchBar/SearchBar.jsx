import React from "react";
import "./SearchBar.scss";
export default function SearchBar() {
  return (
    <form>
      <div className="search-box">
        <div className="svg-div">
          <svg
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="search-input"
          placeholder="Search Mockups, Logos..."
          required
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </form>
  );
}
