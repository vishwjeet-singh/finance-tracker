import React from "react";
import "./MiddleBg.scss";
import CategoryCards from "../categoryCards/CategoryCards";
import TransactionCard from "../transactionCard/TransactionCard";
import SearchBar from "../searchBar/SearchBar";
export default function MiddleBg() {
  return (
    <div className="middle-bg">
      <div className="search-bar">
        <SearchBar/>
      </div>

      <div className="categories">
        <div className="category-title">Categories</div>
        <div className="category-cards">
          <CategoryCards />
          <CategoryCards />
        </div>
      </div>

      <div className="transactions">
        <div className="transaction-title">Transactions</div>
        <div className="transaction-cards">
          <TransactionCard />
          <TransactionCard />
        </div>
      </div>
    </div>
  );
}
