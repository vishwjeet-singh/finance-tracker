import React, { useState } from "react";
import "./NewTransaction.scss";
import { Button, Paper, TextField, CircularProgress } from "@mui/material";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

export default function NewTransaction() {
  const { user } = UserAuth();
  //STATES
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  //FUNCTIONS
  const handleSubmit = () => {
    setLoading(true);
    const data = {
      title: title,
      amount: amount,
      date: date,
    };
    axios
      .post(`/${user.email.split("@")[0]}/.json`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
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
      <Paper className="new-trans-paper" elevation={1}>
        <div className="plus-sign">+</div>
        <div
          className="new"
          onClick={() => {
            if (user) setOpen(true);
          }}
        >
          Add Transaction
        </div>
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
                    variant="filled"
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
                    variant="filled"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-basic"
                    variant="filled"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                {loading ? (
                  <CircularProgress color="success" />
                ) : (
                  <Button
                    sx={{ padding: "1rem",
                   }}
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
