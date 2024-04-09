import React from "react";
import { Fab, Modal } from "@mui/material";

export const RequestRecipeButton = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Fab
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 40%, #FF8E53 90%)",
          borderRadius: "10%",
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          color: "white",
          width: "110px",
          height: "50px",
          position: "fixed",
          bottom: 120,
          right: 120,
          boxShadow: "0 5px 15px 5px rgba(255, 105, 135, .5)",
          "&:hover": {
            boxShadow: "0",
          },
          "&:active": {
            boxShadow: "0 2px 5px 2px rgba(255, 105, 135, .3)",
          },
        }}
        onClick={handleOpen}
      >
        Add New
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2 id="parent-modal-title" className="modal-title">
            Add your Request Here
          </h2>
          <p id="parent-modal-description" className="modal-description">
            mail us name of dish , we are ready to help you
          </p>
        </div>
      </Modal>
    </div>
  );
};
