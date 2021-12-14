import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createTogo,
  editTogo,
  doneUndoneTogo,
  deleteTogo,
} from "../../redux/togo/togoSlice";

import TogoModalAdd from "./togo-modal.add";
import TogoComponent from "./togo.component";

const Togo = () => {
  const togos = useSelector((state) => state.togo.togos);
  const dispatch = useDispatch();

  const [togo, setTogo] = useState({
    nameOfCreator: "Maho",
    title: "",
    memo: "",
    map: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTogo({ ...togo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTogo(togo));
  };

  const handleDoneUndone = (id) => {
    dispatch(doneUndoneTogo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteTogo(id));
  };

  return (
    <div>
      <h2>TO GO: {togo.nameOfCreator}</h2>
      <TogoModalAdd />
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" required onChange={handleChange} />
        <br />
        <textarea type="text" name="memo" onChange={handleChange} />
        <br />
        <input type="text" name="map" onChange={handleChange} />
        <br />
        <button>create</button>
      </form>

      <ul>
        {togos.length !== 0 &&
          togos.map((togo) => (
            <>
              <TogoComponent
                togo={togo}
                handleDoneUndone={handleDoneUndone}
                handleDelete={handleDelete}
              />
            </>
          ))}
      </ul>
    </div>
  );
};

export default Togo;
