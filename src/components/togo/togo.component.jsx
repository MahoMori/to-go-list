import React from "react";

import Checkbox from "@mui/material/Checkbox";
// import ModeEditIcon from "@material-ui/icons/ModeEdit";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const TogoComponent = ({ togo, handleDoneUndone, handleDelete }) => {
  return (
    <>
      <li key={togo.id}>
        <p
          style={
            togo.isDone
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {togo.title}
        </p>
        <div>
          <Checkbox
            color="secondary"
            onClick={() => handleDoneUndone(togo.id)}
          />
          {/* <ModeEditIcon />
          <DeleteForeverIcon /> */}

          <i
            class="fa-solid fa-pen-clip"
            onClick={() => handleDoneUndone(togo.id)}
          ></i>
          <i class="fa-solid fa-trash"></i>
        </div>
        {/* {togo.isDone ? (
          <p onClick={() => dispatch(doneUndoneTogo(togo.id))}>undone</p>
        ) : (
          <p onClick={() => dispatch(doneUndoneTogo(togo.id))}>done</p>
        )} */}
      </li>
    </>
  );
};

export default TogoComponent;
