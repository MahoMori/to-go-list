import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   createTogoTodo,
//   editTogoTodo,
// } from "../../redux/togoTodoSlice";

import { getDataFromFirebase } from "./getDataFromFirebase";

import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.util";

import Button from "@mui/material/Button";

import TogoModalAdd from "./togo-modal.add";
import TogoComponent from "./togo.component";

const Togo = ({ label, nameOfCreator }) => {
  // const togoTodo = useSelector((state) => state.togoTodo);
  // const dispatch = useDispatch();

  const [receivedData, setReceivedData] = useState([]);

  useEffect(() => {
    getDataFromFirebase(label, receivedData, setReceivedData);
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
    try {
      const docRef = await addDoc(collection(db, label), data);
      // data.id = docRef.id;
      // data.label = label;
      // dispatch(createTogoTodo(data));
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
  };

  const handleEdit = async (payload) => {
    try {
      const dataRef = doc(db, label, payload.id);
      await updateDoc(dataRef, payload);
      // dispatch(editTogoTodo(payload));
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDoneUndone = async (id, isDone) => {
    try {
      const dataRef = doc(db, label, id);
      if (isDone) {
        await updateDoc(dataRef, { isDone: false });
      } else {
        await updateDoc(dataRef, { isDone: true });
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, label, id));
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      {nameOfCreator !== "not current user" && (
        <>
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
        </>
      )}

      <>
        {receivedData.length !== 0 &&
          receivedData
            .filter((data) => data.nameOfCreator === nameOfCreator)
            .map((data) => (
              <TogoComponent
                key={data.id}
                label={label}
                data={data}
                handleDoneUndone={handleDoneUndone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
      </>
    </div>
  );
};

export default Togo;
