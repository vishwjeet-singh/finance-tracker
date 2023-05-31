import React from "react";
import "./TransactionCard.scss";
import { Button, Paper, TextField, CircularProgress } from "@mui/material";
import { GiCancel } from "react-icons/gi";
export default function TransactionCard({ title, amount, date }) {
  //STATES
  const [open, setOpen] = React.useState(false);
  const [newtitle, setnewTitle] = React.useState(title);
  const [newamount, setnewAmount] = React.useState(amount);
  const [newdate, setnewDate] = React.useState(date);
  const [loading, setLoading] = React.useState(false);

  //FUNCTIONS
  const handleSubmit = () => {
  
    const newdata = {
      title: newtitle,
      amount: newamount,
      date: newdate,
    };

    //axios put request here
  };

  const handleDelete = () => {};

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
          <div className="icon"></div>
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
                    value={title}
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
                    value={amount}
                    onChange={(e) => setnewAmount(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <TextField
                    sx={{ width: "100%" }}
                    id="filled-basic"
                    variant="filled"
                    type="date"
                    value={date}
                    onChange={(e) => setnewDate(e.target.value)}
                  />
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
