import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createTogo,
  editTogo,
  doneUndoneTogo,
  deleteTogo,
} from "../../redux/togo/togoSlice";
import {
  createTodo,
  editTodo,
  doneUndoneTodo,
  deleteTodo,
} from "../../redux/todo/todoSlice";

import Button from "@mui/material/Button";

import TogoModalAdd from "./togo-modal.add";
import TogoComponent from "./togo.component";

const Togo = ({ label, nameOfCreator }) => {
  const togos = useSelector((state) => state.togo.togos);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  // const [togo, setTogo] = useState({
  //   nameOfCreator: "Maho",
  //   title: "",
  //   memo: "",
  //   refUrl1: "",
  //   refUrl2: "",
  //   refUrl3: "",
  // });

  const [data, setData] = useState({
    nameOfCreator,
    title: "",
    memo: "",
    refUrl1: "",
    refUrl2: "",
    refUrl3: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    // e.preventDefault();
    if (label === "TO GO") {
      dispatch(createTogo(data));
      setData({
        nameOfCreator,
        title: "",
        memo: "",
        refUrl1: "",
        refUrl2: "",
        refUrl3: "",
      });
    }
    if (label === "TO DO") {
      dispatch(createTodo(data));
      setData({
        nameOfCreator,
        title: "",
        memo: "",
        refUrl1: "",
        refUrl2: "",
        refUrl3: "",
      });
    }
  };

  const handleEdit = (payload) => {
    // dispatch(editTogo(payload));
    if (label === "TO GO") {
      dispatch(editTogo(payload));
    }
    if (label === "TO DO") {
      dispatch(editTodo(payload));
    }
  };

  const handleDoneUndone = (id) => {
    // dispatch(doneUndoneTogo(id));
    if (label === "TO GO") {
      dispatch(doneUndoneTogo(id));
    }
    if (label === "TO DO") {
      dispatch(doneUndoneTodo(id));
    }
  };

  const handleDelete = (id) => {
    // dispatch(deleteTogo(id));
    if (label === "TO GO") {
      dispatch(deleteTogo(id));
    }
    if (label === "TO DO") {
      dispatch(deleteTodo(id));
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <p>{data.nameOfCreator}</p>
      <Button
        size="large"
        onClick={handleOpen}
        color="secondary"
        variant="outlined"
      >
        ADD NEW
      </Button>
      <TogoModalAdd
        label={label}
        open={open}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      <>
        {label === "TO GO" &&
          togos.length !== 0 &&
          togos.map((togo) => (
            <>
              <TogoComponent
                label={label}
                data={togo}
                handleDoneUndone={handleDoneUndone}
                handleDelete={handleDelete}
                // setData={setData}
                handleEdit={handleEdit}
              />
            </>
          ))}

        {label === "TO DO" &&
          todos.length !== 0 &&
          todos.map((todo) => (
            <>
              <TogoComponent
                label={label}
                data={todo}
                handleDoneUndone={handleDoneUndone}
                handleDelete={handleDelete}
                // open={open}
                // handleOpen={handleOpen}
                // handleClose={handleClose}
                // handleChange={handleChange}
                handleEdit={handleEdit}
              />
            </>
          ))}
      </>
    </div>
  );
};

export default Togo;
