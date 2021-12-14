import React from "react";

import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@material-ui/core";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  li: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    // borderBottom: "solid #000 2px",
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
  handleDoneUndone,
  handleDelete,
}) => {
  const classes = useStyles();
  return (
    <>
      {/* <Card sx={{ height: 50 }}>
        <CardContent>
          <p>hello</p>
        </CardContent>
      </Card> */}

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
