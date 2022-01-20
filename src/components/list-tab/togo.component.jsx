import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import Checkbox from "@mui/material/Checkbox";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

import { makeStyles } from "@material-ui/core";

import useMediaQuery from "@mui/material/useMediaQuery";

import TogoModalEdit from "./togo-modal.edit";

const useStyles = makeStyles(() => ({
  divSm: {
    display: "grid",
    gridTemplateColumns: "80% 10%",
    margin: "20px 0",
  },
  div: {
    display: "grid",
    gridTemplateColumns: "80% 20%",
    margin: "20px 0",
  },
  h2: {
    wordBreak: "break-all",
  },
  accordionDetails: {
    textAlign: "left",
    fontSize: "18px",
  },
  iconDivSm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconEdit: {
    margin: "0 20px",
    color: "#329932",
    fontSize: 30,
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover": {
      color: "#84c184",
    },
  },
  iconDelete: {
    color: "red",
    fontSize: 30,
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
  const { id, title, memo, refUrl1, refUrl2, refUrl3, isDone } = data;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sm = useMediaQuery("(max-width:600px)");
  const md = useMediaQuery("(max-width:900px)");

  return (
    <div key={id} className={classes.div}>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h2
            style={
              isDone
                ? { textDecoration: "line-through 2px" }
                : { textDecoration: "none" }
            }
            className={sm && classes.h2}
          >
            {title}
          </h2>
        </AccordionSummary>
        <AccordionDetails className={classes.accordionDetails}>
          <p>{memo}</p>

          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              {refUrl1 && (
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href={refUrl1}
                  target="_blank"
                >
                  {label === "TO GO" ? (
                    <>
                      <LocationOnIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Map
                    </>
                  ) : (
                    <>
                      <LooksOneIcon sx={{ mr: 0.8 }} fontSize="inherit" />
                      Reference 1
                    </>
                  )}
                </Link>
              )}
              {refUrl2 && (
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href={refUrl2}
                  target="_blank"
                >
                  {label === "TO GO" ? (
                    <>
                      <WebIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Website
                    </>
                  ) : (
                    <>
                      <LooksTwoIcon sx={{ mr: 0.8 }} fontSize="inherit" />
                      Reference 2
                    </>
                  )}
                </Link>
              )}
              {refUrl3 && (
                <Link
                  underline="hover"
                  sx={{ display: "flex", alignItems: "center" }}
                  color="inherit"
                  href={refUrl3}
                  target="_blank"
                >
                  {label === "TO GO" ? (
                    <>
                      <LanguageIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                      Other
                    </>
                  ) : (
                    <>
                      <Looks3Icon sx={{ mr: 0.8 }} fontSize="inherit" />
                      Reference 3
                    </>
                  )}
                </Link>
              )}
            </Breadcrumbs>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className={sm ? classes.iconDivSm : classes.iconDiv}>
        <Checkbox
          color="secondary"
          sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
          checked={isDone}
          onChange={() => handleDoneUndone(id, isDone)}
        />

        <ModeEditIcon
          className={classes.iconEdit}
          onClick={handleOpen}
          sx={
            sm
              ? { marginBottom: "3px" }
              : md
              ? { margin: "0 8px" }
              : { margin: "0 20px" }
          }
        />
        <TogoModalEdit
          label={label}
          data={data}
          open={open}
          handleClose={handleClose}
          handleEdit={handleEdit}
        />

        <DeleteForeverIcon
          className={classes.iconDelete}
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this?") === true
            ) {
              handleDelete(id);
            }
          }}
        />
      </div>
      {/* </li> */}
    </div>
  );
};

export default TogoComponent;
