import React from "react";

const TogoComponent = ({ togo }) => {
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
