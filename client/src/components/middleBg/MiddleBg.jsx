import React, { useEffect, useState } from "react";
import "./MiddleBg.scss";
import CategoryCards from "../categoryCards/CategoryCards";
import TransactionCard from "../transactionCard/TransactionCard";
import SearchBar from "../searchBar/SearchBar";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
export default function MiddleBg() {
  //STATES
  const { user, trigger } = UserAuth();
  const [transactions, setTransactions] = useState(null);
  //FUNCTIONS
  //EFFECTS
  useEffect(() => {
    if (user) {
      toast.success("Welcome to your dashboard !");
      const id = toast.loading("Loading your transactions...");
      axios
        .get(
          `/${user.email.split("@")[0]}/.json?auth=${
            user.stsTokenManager.accessToken
          }`
        )
        .then((res) => {
          const tempData = [];
          if (res.data) {
            toast.update(id, {
              render: "Transactions loaded !",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
            Object.keys(res.data).map((key) => {
              tempData.push({ ...res.data[key], key: key });
              // setTransactions(res.data[key]);
            });
          } else {
            toast.update(id, {
              render: "You have no transactions.",
              type: "info",
              isLoading: false,
              autoClose: 2000,
            });
          }
          setTransactions(tempData);
        })
        .catch((err) => {
          toast.error("Something went wrong !");
          console.log(err);
        });
    } else {
      setTransactions(null);
    }
  }, [user, trigger]);
  //RENDER
  return (
    <div className="middle-bg">
      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="categories">
        <div className="category-title">Categories</div>
        <div className="category-cards">
          <CategoryCards />
          <CategoryCards />
        </div>
      </div>

      <div className="transaction-title">Transactions</div>
      <div className="transactions">
        <div className="transaction-cards">
          {!user && (
            <div className="transaction-information">
              Please login to see your transactions
            </div>
          )}
          {transactions && transactions.length === 0 && (
            <div className="transaction-information">
              You have no transactions. Please add one!
            </div>
          )}
          {user &&
            transactions &&
            transactions.length !== 0 &&
            transactions.map((transaction, ind) => {
              return (
                <TransactionCard
                  key={transaction.key}
                  title={transaction.title}
                  amount={transaction.amount}
                  date={transaction.date}
                  theKey={transaction.key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
