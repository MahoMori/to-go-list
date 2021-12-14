import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  buttonDiv: {
    margin: "40px auto",
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
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const textfieldStyle = {
  marginBottom: "30px",
};

export default function TogoModalAdd() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="secondary">
        ADD NEW
      </Button>
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
          />
          <TextField
            sx={textfieldStyle}
            color="secondary"
            fullWidth
            id="standard-basic"
            label="Map URL"
            variant="standard"
          />

          <div className={classes.buttonDiv}>
            <Button variant="outlined" color="success">
              Add
            </Button>
            <Button variant="outlined" color="error">
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
