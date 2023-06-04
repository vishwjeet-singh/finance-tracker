import React, { useState } from "react";
import "./AddCategoryCard.scss";
import {
  Button,
  Paper,
  TextField,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import { UserAuth } from "../../context/AuthContext";

export default function AddCategoryCard() {
  //STATES
  const { user, handleTrigger } = UserAuth();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [categoryColor, setCategoryColor] = useState("");

  //FUNCTIONS
  const handleSubmit = () => {
    console.log("clicked");
  };
  const handleChange = () => {
    console.log("color changed");
  };

  return (
    <div className="add-category">
      <Paper
        className="add-category-paper"
        elevation={1}
        sx={{ backgroundColor: "#70C1FF" }}
        onClick={() => {
          if (user) setOpen(true);
        }}
      >
        <div className="add-category-container">
          <div className="plus-sign">+</div>
          <div className="new">New Category</div>
        </div>
      </Paper>
      {user && open && (
        <div className="the-modal">
          <div className="modal-container">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">Add New Category</div>
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
                  <FormControl variant="standard" sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Category Color
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={categoryColor}
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
                  <Button
                    sx={{ padding: "1rem" }}
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={handleSubmit}
                  >
                    Add Category
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
