import React, { useContext } from "react";

import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { makeStyles } from "@material-ui/core";

import { PropsContext } from "./togo.container";

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
  togo,
  handleEdit,
  // handleDoneUndone,
  handleDelete,
}) => {
  const { handleDoneUndone } = useContext(PropsContext);

  const classes = useStyles();
  return (
    <>
      <li key={togo.id} className={classes.li}>
        <Accordion onClick={() => console.log(togo)}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <h2
              style={
                togo.isDone
                  ? { textDecoration: "line-through 2px" }
                  : { textDecoration: "none" }
              }
            >
              {togo.title}
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>{togo.memo}</p>
          </AccordionDetails>
          {/* <AccordionDetails>
            <iframe
              title="refmap"
              src={togo.map}
              style={{
                width: "400",
                height: "300",
                frameborder: "0",
                border: 0,
              }}
            ></iframe>
          </AccordionDetails> */}
        </Accordion>
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
        </div>

        {/* <li key={togo.id} className={classes.li}>
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
