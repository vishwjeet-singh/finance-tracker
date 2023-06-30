import React, { useEffect, useState } from "react";
import "./MiddleBg.scss";
import CategoryCards from "../categoryCards/CategoryCards";
import TransactionCard from "../transactionCard/TransactionCard";
import AddCategoryCard from "../addCategoryCard/AddCategoryCard";
import Balance from "../balance/Balance";
import SearchBar from "../searchBar/SearchBar";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import axios, { all } from "axios";
export default function MiddleBg({ handleTransactions }) {
  //STATES
  const { user, trigger, handleExpense, handleAllWeeklyTransactions } =
    UserAuth();
  const [transactions, setTransactions] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  //FUNCTIONS
  //EFFECTS
  useEffect(() => {
    if (user) {
      toast.success("Welcome to your dashboard !");
    }
  }, [user]);
  useEffect(() => {
    if (user) {
      // toast.success("Welcome to your dashboard !");
      const id = toast.loading("Loading your transactions...");
      axios
        .get(
          `/${user.email.split("@")[0]}/.json?auth=${
            user.stsTokenManager.accessToken
          }`
        )
        .then((res) => {
          const tempData = [];
          const allTransactions = [];
          const categoriesData = {
            housing: 0,
            transportation: 0,
            taxes: 0,
            food: 0,
            childExpenses: 0,
            healthCare: 0,
            insurance: 0,
            utilities: 0,
          };
          if (res.data) {
            toast.update(id, {
              render: "Transactions loaded !",
              type: "success",
              isLoading: false,
              autoClose: 2000,
            });
            let expense = 0;
            Object.keys(res.data).map((key) => {
              tempData.push({ ...res.data[key], key: key });
              // setTransactions(res.data[key]);
              categoriesData[res.data[key].category] += +res.data[key].amount;
              expense += +res.data[key].amount;
              allTransactions.push(+res.data[key].amount);
            });
            const sortable = Object.entries(categoriesData)
              .sort(([, a], [, b]) => b - a)
              .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
            setAllCategories(sortable);
            handleExpense(expense);
          } else {
            toast.update(id, {
              render: "You have no transactions.",
              type: "info",
              isLoading: false,
              autoClose: 2000,
            });
          }
          setTransactions(tempData);
          handleAllWeeklyTransactions(allTransactions);
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
        <Balance />
      </div>

      <div className="categories">
        <div className="category-title">Categories</div>
        <div className="category-cards">
          {user &&
            allCategories &&
            Object.keys(allCategories)
              .slice(0, 2)
              .map((category, idx) => {
                if (allCategories[category] === 0) return;
                return (
                  <CategoryCards
                    key={idx}
                    category={category}
                    amount={allCategories[category]}
                  />
                );
              })}
          {/* <AddCategoryCard /> */}
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
                  category={transaction.category}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
