import React, { useState } from "react";
import "./CategoryCards.scss";
import { GiCancel } from "react-icons/gi";
import {
  Paper,
  Button,
  CircularProgress,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { UserAuth } from "../../context/AuthContext";
export default function CategoryCards({ title, color }) {
  //STATES
  const { user, handleTrigger } = UserAuth();
  const [open, setOpen] = useState(false);
  const [newtitle, setnewTitle] = useState(title);
  const [newcolor, setnewColor] = useState(color);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    console.log("category updated");
  };
  const handleSubmit = () => {
    console.log("clicked");
  };

  const handleDelete = () => {
    console.log("delete clicked");
  };

  return (
    <div className="cat-container">
      <Paper
        className="category-paper"
        onClick={() => {
          if (user) setOpen(true);
        }}
        elevation={1}
      >
        <div className="category-container">
          <div className="category-icon"></div>
          <div className="name-amt">
            <div className="category-name">Housing Loan</div>
            <div className="category-amount">45,000</div>
          </div>
        </div>
      </Paper>
      {user && open && (
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
                    variant="standard"
                    type="text"
                    sx={{ width: "100%" }}
                    value={newtitle}
                    onChange={(e) => setnewTitle(e.target.value)}
                  />
                </div>
                <div className="modal-input">
                  <FormControl variant="standard" sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Category Color
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={newcolor}
                      onChange={handleChange}
                      label="Category"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
