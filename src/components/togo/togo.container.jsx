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

  return (
    <div>
      <TogoModalAdd handleSubmit={handleSubmit} handleChange={handleChange} />

      <ul>
        {togos.length !== 0 &&
          togos.map((togo) => (
            <>
              <TogoComponent
                togo={togo}
                handleEdit={handleEdit}
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
