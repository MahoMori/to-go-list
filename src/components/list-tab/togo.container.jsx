import React, { useState, useEffect } from "react";
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

  const [receivedTogoData, setReceivedTogoData] = useState([]);
  const getTogoData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "togo"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setReceivedTogoData((prevData) => [
          ...prevData,
          {
            id: doc.id,
            nameOfCreator: data.nameOfCreator,
            title: data.title,
            memo: data.memo,
            refUrl1: data.refUrl1,
            refUrl2: data.refUrl2,
            refUrl3: data.refUrl3,
            isDone: data.isDone,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [receivedTodoData, setReceivedTodoData] = useState([]);
  const getTodoData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todo"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        setReceivedTodoData((prevData) => [
          ...prevData,
          {
            id: doc.id,
            nameOfCreator: data.nameOfCreator,
            title: data.title,
            memo: data.memo,
            refUrl1: data.refUrl1,
            refUrl2: data.refUrl2,
            refUrl3: data.refUrl3,
            isDone: data.isDone,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTogoData();
    getTodoData();
  }, []);

  const [data, setData] = useState({
    nameOfCreator,
    title: "",
    memo: "",
    refUrl1: "",
    refUrl2: "",
    refUrl3: "",
    isDone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    if (label === "TO GO") {
      try {
        const docRef = await addDoc(collection(db, "togo"), data);
        setData({ ...data, id: docRef.id });
        dispatch(createTogo(data));
        setData({
          nameOfCreator,
          title: "",
          memo: "",
          refUrl1: "",
          refUrl2: "",
          refUrl3: "",
          isDone: false,
        });
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
    if (label === "TO DO") {
      try {
        const docRef = await addDoc(collection(db, "todo"), data);
        setData({ id: docRef.id, ...data });
        dispatch(createTodo(data));
        setData({
          nameOfCreator,
          title: "",
          memo: "",
          refUrl1: "",
          refUrl2: "",
          refUrl3: "",
          isDone: false,
        });
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const handleEdit = async (payload) => {
    if (label === "TO GO") {
      dispatch(editTogo(payload));
      try {
        const dataRef = doc(db, "togo", payload.id);
        await updateDoc(dataRef, payload);
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
    if (label === "TO DO") {
      dispatch(editTodo(payload));
      try {
        const dataRef = doc(db, "todo", payload.id);
        await updateDoc(dataRef, payload);
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const handleDoneUndone = async (id, isDone) => {
    if (label === "TO GO") {
      dispatch(doneUndoneTogo(id));
      try {
        const dataRef = doc(db, "togo", id);
        if (isDone) {
          await updateDoc(dataRef, { isDone: false });
        } else {
          await updateDoc(dataRef, { isDone: true });
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
    if (label === "TO DO") {
      dispatch(doneUndoneTodo(id));
      try {
        const dataRef = doc(db, "todo", id);
        await updateDoc(dataRef, { isDone: true });
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  const handleDelete = async (id) => {
    if (label === "TO GO") {
      dispatch(deleteTogo(id));
      try {
        await deleteDoc(doc(db, "togo", id));
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    }
    if (label === "TO DO") {
      dispatch(deleteTodo(id));
      try {
        await deleteDoc(doc(db, "todo", id));
      } catch (error) {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
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
          receivedTogoData.length !== 0 &&
          receivedTogoData
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
          receivedTodoData.length !== 0 &&
          receivedTodoData
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
