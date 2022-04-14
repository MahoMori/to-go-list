import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
// import TextField from "@mui/material/TextField";

import { CustomTextField, CustomButtonBox } from "./togo-modal.style";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "70%",
    sm: "80%",
    md: 450,
    lg: 450,
    xl: 800,
  },
  height: "75%",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// const textfieldStyle = {
//   marginBottom: "20px",
// };

export default function TogoModalAdd({
  label,
  open,
  handleClose,
  handleSubmit,
  handleChange,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label="Title"
            variant="standard"
            name="title"
            required
            onChange={handleChange}
          />
          <CustomTextField
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
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Map URL" : "Reference URL 1"}
            variant="standard"
            name="refUrl1"
            onChange={handleChange}
          />
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Website URL" : "Reference URL 2"}
            variant="standard"
            name="refUrl2"
            onChange={handleChange}
          />
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Other URL" : "Reference URL 3"}
            variant="standard"
            name="refUrl3"
            onChange={handleChange}
          />

          <CustomButtonBox>
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
          </CustomButtonBox>
        </Box>
      </Modal>
    </div>
  );
}
