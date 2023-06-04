import React, { useState } from "react";
import "./TransactionCard.scss";
import {
  Button,
  Paper,
  TextField,
  CircularProgress,
  InputLabel,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
// import housing from "../../assets/categories/housing.jpg";
export default function TransactionCard({
  title,
  amount,
  date,
  category,
  theKey,
}) {
  //STATES
  const { user, handleTrigger } = UserAuth();
  const [open, setOpen] = useState(false);
  const [newtitle, setnewTitle] = useState(title);
  const [newamount, setnewAmount] = useState(amount);
  const [newdate, setnewDate] = useState(date);
  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState(category);
  //FUNCTIONS
  const handleSubmit = () => {
    if (
      title === newtitle &&
      amount === newamount &&
      date === newdate &&
      category === newCategory
    ) {
      toast.error("No changes were made.");
      return setOpen(false);
    }
    const newdata = {
      title: newtitle,
      amount: newamount,
      date: newdate,
      category: newCategory,
    };
    setLoading(true);

    axios
      .put(
        `/${user.email.split("@")[0]}/${theKey}.json?auth=${
          user.stsTokenManager.accessToken
        }`,
        newdata
      )
      .then(() => {
        setLoading(false);
        setOpen(false);
        toast.success("Transaction updated !");
        handleTrigger();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Something went wrong !");
      });

    //axios put request here
  };

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(
        `/${user.email.split("@")[0]}/${theKey}.json?auth=${
          user.stsTokenManager.accessToken
        }`
      )
      .then((res) => {
        setLoading(false);
        setOpen(false);
        toast.success("Transaction deleted !");
        handleTrigger();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        toast.error("Something went wrong !");
      });
  };

  //EFFECTS
  //RENDER

  return (
    <div className="container">
      <Paper
        elevation={1}
        onClick={() => {
          setOpen(true);
        }}
        className="transaction-paper"
      >
        <div className="icon-name-date">
          <div className="icon">
            <img src={`assets/categories/${category}.jpg`} alt="icon" />
          </div>
          <div className="name-date">
            <div className="name">{title}</div>
            <div className="date">{date}</div>
          </div>
        </div>
        <div className="amount">${amount}</div>
      </Paper>
      {open && (
        <div className="the-modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">Edit Transaction</div>
                <div
                  className="modal-close"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <GiCancel />
                </div>
              </div>
              <div className="modal-body">
                <div className="modal-input">
                  <TextField
                    id="filled-basic"
                    label="Title"
                    variant="filled"
                    type="text"
                    sx={{ width: "100%" }}
                    value={newtitle}
                    onChange={(e) => setnewTitle(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-basic"
                    label="Amount"
                    variant="filled"
                    type="number"
                    value={newamount}
                    onChange={(e) => setnewAmount(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-basic"
                    variant="filled"
                    type="date"
                    value={newdate}
                    onChange={(e) => setnewDate(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <FormControl variant="standard" sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      label="Category"
                    >
                      <MenuItem value={"housing"}>Housing</MenuItem>
                      <MenuItem value={"transportation"}>
                        Transportation
                      </MenuItem>
                      <MenuItem value={"taxes"}>Taxes</MenuItem>
                      <MenuItem value={"food"}>Food</MenuItem>
                      <MenuItem value={"childExpenses"}>
                        Child Expenses
                      </MenuItem>
                      <MenuItem value={"healthCare"}>Healthcare</MenuItem>
                      <MenuItem value={"insurance"}>Insurance</MenuItem>
                      <MenuItem value={"utilities"}>Utilities</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="modal-footer">
                {loading ? (
                  <CircularProgress color="success" />
                ) : (
                  <div className="btns">
                    <Button
                      sx={{ padding: "1rem" }}
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </Button>
                    <Button
                      sx={{ padding: "1rem" }}
                      variant="contained"
                      size="small"
                      color="success"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
