import React, { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

import Checkbox from "@mui/material/Checkbox";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import WebIcon from "@mui/icons-material/Web";
import LanguageIcon from "@mui/icons-material/Language";

import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";

import {
  CustomContainerBox,
  CustomAccordionDetails,
  CustomIconBox,
  CustomModeEditIcon,
  CustomDeleteForeverIcon,
} from "./togo.component.style";

import TogoModalEdit from "./togo-modal.edit";
// import ListModal from "./list-modal";

const TogoComponent = ({
  label,
  data,
  handleDoneUndone,
  handleDelete,
  handleChange,
  handleEdit,
}) => {
  const { id, title, memo, refUrl1, refUrl2, refUrl3, isDone } = data;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <CustomContainerBox key={id}>
      <Accordion>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <h2
            style={
              isDone
                ? { textDecoration: "line-through 2px" }
                : { textDecoration: "none" }
            }
          >
            <span style={{ wordBreak: "break-all" }}>{title}</span>
          </h2>
        </AccordionSummary>
        <CustomAccordionDetails>
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
                  {label === "togo" ? (
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
                  {label === "togo" ? (
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
                  {label === "togo" ? (
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
        </CustomAccordionDetails>
      </Accordion>
      <CustomIconBox>
        <Checkbox
          color="secondary"
          checked={isDone}
          onChange={() => handleDoneUndone(id, isDone)}
        />

        <CustomModeEditIcon onClick={handleOpen} />

        <CustomDeleteForeverIcon
          onClick={() => {
            if (
              window.confirm("Are you sure you want to delete this?") === true
            ) {
              handleDelete(id);
            }
          }}
        />
      </CustomIconBox>

      <TogoModalEdit
        label={label}
        data={data}
        open={open}
        handleClose={handleClose}
        handleEdit={handleEdit}
      />
      {/* <ListModal
        label={label}
        data={data}
        open={open}
        handleChange={handleChange}
        handleEdit={handleEdit}
        handleClose={handleClose}
      >
        Edit
      </ListModal> */}
    </CustomContainerBox>
  );
};

export default TogoComponent;
