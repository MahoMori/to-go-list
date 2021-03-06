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

const textfieldStyle = {
  marginBottom: "20px",
};

export default function TogoModalEdit({
  label,
  data,
  open,
  handleClose,
  handleEdit,
}) {
  const classes = useStyles();
  const { id, title, memo, refUrl1, refUrl2, refUrl3 } = data;

  const [editData, setEditData] = React.useState({
    id,
    title,
    memo,
    refUrl1,
    refUrl2,
    refUrl3,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

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
            defaultValue={title}
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
            defaultValue={memo}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Map URL" : "Reference URL 1"}
            variant="standard"
            name="refUrl1"
            onChange={handleChange}
            defaultValue={refUrl1}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Website URL" : "Reference URL 2"}
            variant="standard"
            name="refUrl2"
            onChange={handleChange}
            defaultValue={refUrl2}
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "TO GO" ? "Other URL" : "Reference URL 3"}
            variant="standard"
            name="refUrl3"
            onChange={handleChange}
            defaultValue={refUrl3}
          />

          <div className={classes.buttonDiv}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                handleEdit(editData);
                handleClose();
              }}
            >
              Edit
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
