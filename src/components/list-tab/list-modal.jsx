import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

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

export default function ListModal({
  label,
  data,
  open,
  // setData,
  handleChange,
  handleSubmit,
  handleEdit,
  handleClose,
  children,
}) {
  const { title, memo, refUrl1, refUrl2, refUrl3 } = data;
  // const [editData, setEditData] = React.useState({
  //   id,
  //   title,
  //   memo,
  //   refUrl1,
  //   refUrl2,
  //   refUrl3,
  // });
  // const handleEditChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditData({ ...editData, [name]: value });
  // };

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
            defaultValue={title}
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
            defaultValue={memo}
          />
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "togo" ? "Map URL" : "Reference URL 1"}
            variant="standard"
            name="refUrl1"
            onChange={handleChange}
            defaultValue={refUrl1}
          />
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "togo" ? "Website URL" : "Reference URL 2"}
            variant="standard"
            name="refUrl2"
            onChange={handleChange}
            defaultValue={refUrl2}
          />
          <CustomTextField
            color="secondary"
            fullWidth
            id="standard-basic"
            label={label === "togo" ? "Other URL" : "Reference URL 3"}
            variant="standard"
            name="refUrl3"
            onChange={handleChange}
            defaultValue={refUrl3}
          />

          <CustomButtonBox>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                children === "Add" ? handleSubmit() : handleEdit(data);
                handleClose();
              }}
            >
              {children}
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
