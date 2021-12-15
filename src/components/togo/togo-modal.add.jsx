import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttonDiv: {
    margin: "10px auto",
    display: "flex",
    justifyContent: "space-around",
  },
}));

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const textfieldStyle = {
  marginBottom: "20px",
};

export default function TogoModalAdd({
  label,
  open,
  handleClose,
  handleSubmit,
  handleChange,
}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label="Title"
            variant="standard"
            name="title"
            required
            onChange={handleChange}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-multiline-static"
            label="Memo"
            multiline
            rows={6}
            variant="standard"
            name="memo"
            onChange={handleChange}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Map URL" : "Reference URL 1"}
            variant="standard"
            name="mapUrl"
            onChange={handleChange}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Website URL" : "Reference URL 2"}
            variant="standard"
            name="wsUrl"
            onChange={handleChange}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Other URL" : "Reference URL 3"}
            variant="standard"
            name="refUrl"
            onChange={handleChange}
          />

          <div className={classes.buttonDiv}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                handleSubmit();
                handleClose();
              }}
            >
              Add
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
