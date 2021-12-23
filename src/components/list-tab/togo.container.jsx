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

import {
  collection,
  doc,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.util";

import Button from "@mui/material/Button";

import TogoModalAdd from "./togo-modal.add";
import TogoComponent from "./togo.component";

const Togo = ({ label, nameOfCreator }) => {
  const togos = useSelector((state) => state.togo.togos);
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

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

  const handleSubmit = async () => {
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

      try {
        const docRef = await addDoc(collection(db, "togo"), data);
        console.log(docRef.id);
      } catch (error) {
        console.log(error);
      }
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

      try {
        const docRef = await addDoc(collection(db, "todo"), data);
        console.log(docRef.id);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = (payload) => {
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
          togos
            .filter((togo) => togo.nameOfCreator === nameOfCreator)
            .map((togo) => (
              <>
                <TogoComponent
                  label={label}
                  data={togo}
                  handleDoneUndone={handleDoneUndone}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </>
            ))}

        {label === "TO DO" &&
          todos.length !== 0 &&
          todos
            .filter((todo) => todo.nameOfCreator === nameOfCreator)
            .map((todo) => (
              <>
                <TogoComponent
                  label={label}
                  data={todo}
                  handleDoneUndone={handleDoneUndone}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              </>
            ))}
      </>
    </div>
  );
};

export default Togo;
