import React, { useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { makeStyles } from "@material-ui/core";

import TogoModalEdit from "./togo-modal.edit";

const useStyles = makeStyles(() => ({
  li: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    margin: "20px 0",
  },
  iconDiv: {
    // width: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconEdit: {
    // marginRight: "8px",
    margin: "0 20px",
    color: "#329932",
    fontSize: 35,
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": {
      color: "#84c184",
    },
  },
  iconDelete: {
    color: "red",
    fontSize: 35,
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": {
      color: "#ff9999",
    },
  },
}));

const TogoComponent = ({
  label,
  data,
  handleDoneUndone,
  handleDelete,
  handleEdit,
}) => {
  const classes = useStyles();
  const { id, title, memo, refUrl1, refUrl2, refUrl3 } = data;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <li key={id} className={classes.li}>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <h2
              style={
                data.isDone
                  ? { textDecoration: "line-through 2px" }
                  : { textDecoration: "none" }
              }
            >
              {title}
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p>{memo}</p>
          </AccordionDetails>
          {refUrl1 && (
            <AccordionDetails>
              <p>{refUrl1}</p>
            </AccordionDetails>
          )}
          {refUrl2 && (
            <AccordionDetails>
              <p>{refUrl2}</p>
            </AccordionDetails>
          )}
          {refUrl3 && (
            <AccordionDetails>
              <p>{refUrl3}</p>
            </AccordionDetails>
          )}
        </Accordion>
        <div className={classes.iconDiv}>
          <Checkbox
            color="secondary"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
            onClick={() => handleDoneUndone(id)}
          />

          <ModeEditIcon className={classes.iconEdit} onClick={handleOpen} />
          <TogoModalEdit
            label={label}
            data={data}
            open={open}
            handleClose={handleClose}
            handleEdit={handleEdit}
          />

          <DeleteForeverIcon
            className={classes.iconDelete}
            onClick={() => handleDelete(id)}
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
