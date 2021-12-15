import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createTogo,
  editTogo,
  doneUndoneTogo,
  deleteTogo,
} from "../../redux/togo/togoSlice";

import Button from "@mui/material/Button";

import TogoModalAdd from "./togo-modal.add";
import TogoComponent from "./togo.component";

const Togo = ({ label }) => {
  const togos = useSelector((state) => state.togo.togos);
  const dispatch = useDispatch();

  const [togo, setTogo] = useState({
    nameOfCreator: "Maho",
    title: "",
    memo: "",
    mapUrl: "",
    wsUrl: "",
    refUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTogo({ ...togo, [name]: value });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    dispatch(createTogo(togo));
  };

  const handleEdit = (payload) => {
    dispatch(editTogo(payload));
  };

  const handleDoneUndone = (id) => {
    dispatch(doneUndoneTogo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTogo(id));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} color="secondary" variant="outlined">
        ADD NEW
      </Button>
      <TogoModalAdd
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <ul>
        {togos.length !== 0 &&
          togos.map((togo) => (
            <>
              <TogoComponent
                togo={togo}
                handleDoneUndone={handleDoneUndone}
                handleDelete={handleDelete}
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleChange={handleChange}
                handleEdit={handleEdit}
              />
            </>
          ))}
      </ul>
    </div>
  );
};

export default Togo;
