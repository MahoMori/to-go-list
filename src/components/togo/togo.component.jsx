import React from "react";

import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { makeStyles } from "@material-ui/core";

import TogoModalAdd from "./togo-modal.add";

const useStyles = makeStyles(() => ({
  li: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    margin: "20px 0",
  },
  iconDiv: {
    width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconEdit: {
    marginRight: "8px",
    color: "#329932",
  },
  iconDelete: {
    color: "red",
  },
}));

const TogoComponent = ({
  data,
  handleDoneUndone,
  handleDelete,
  handleOpen,
  ...otherProps
  // open,
  // handleClose,
  // handleChange,
  // handleEdit,
}) => {
  const classes = useStyles();
  return (
    <>
      <li key={data.id} className={classes.li}>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <h2
              style={
                data.isDone
                  ? { textDecoration: "line-through 2px" }
                  : { textDecoration: "none" }
              }
            >
              {data.title}
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>{data.memo}</p>
          </AccordionDetails>
          <AccordionDetails>
            <p>{data.refUrl1}</p>
          </AccordionDetails>
          <AccordionDetails>
            <p>{data.refUrl2}</p>
          </AccordionDetails>
          <AccordionDetails>
            <p>{data.refUrl3}</p>
          </AccordionDetails>
        </Accordion>
        <div className={classes.iconDiv}>
          <Checkbox
            color="secondary"
            onClick={() => handleDoneUndone(data.id)}
          />

          <ModeEditIcon className={classes.iconEdit} onClick={handleOpen} />
          <TogoModalAdd
            togo={data}
            {...otherProps}
            // open={open}
            // handleClose={handleClose}
            // handleChange={handleChange}
            // handleEdit={handleEdit}
          />

          <DeleteForeverIcon
            className={classes.iconDelete}
            onClick={() => handleDelete(data.id)}
          />
        </div>

        {/* <li key={data.id} className={classes.li}>
        <p
          style={
            togo.isDone
              ? { textDecoration: "line-through 2px" }
              : { textDecoration: "none" }
          }
        >
          {togo.title}
        </p>

        <div className={classes.iconDiv}>
          <Checkbox
            color="secondary"
            onClick={() => handleDoneUndone(togo.id)}
          />

          <ModeEditIcon className={classes.iconEdit} />

          <DeleteForeverIcon
            className={classes.iconDelete}
            onClick={() => handleDelete(togo.id)}
          />
        </div> */}
      </li>
    </>
  );
};

export default TogoComponent;
