import React, { useState } from "react";
import "./NewTransaction.scss";
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

export default function NewTransaction() {
  const { user, handleTrigger } = UserAuth();
  //STATES
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("housing");

  //FUNCTIONS
  const handleSubmit = () => {
    if (!title.trim() || !amount.trim() || !date.trim() || !category.trim()) {
      return toast.error("Please fill all the fields !");
    }
    setLoading(true);
    const data = {
      title: title,
      amount: amount,
      date: date,
      category: category,
    };
    axios
      .post(
        `/${user.email.split("@")[0]}/.json?auth=${
          user.stsTokenManager.accessToken
        }`,
        data
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setOpen(false);
        toast.success("Transaction added !");
        handleTrigger();
      })
      .then((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  //EFFECTS
  //RENDER

  return (
    <div className="new-transaction">
      <Paper
        className="new-trans-paper"
        elevation={1}
        sx={{ backgroundColor: "#70C1FF" }}
        onClick={() => {
          if (user) setOpen(true);
        }}
      >
        <div className="plus-sign">+</div>
        <div className="new">Add Transaction</div>
      </Paper>
      {user && open && (
        <div className="the-modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">Add Transaction</div>
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
                    variant="standard"
                    type="text"
                    sx={{ width: "100%" }}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-basic"
                    label="Amount"
                    variant="standard"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-basic"
                    variant="standard"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
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
                  <Button
                    sx={{ padding: "1rem" }}
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={handleSubmit}
                  >
                    Add Transaction
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
