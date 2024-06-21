import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./style.css";
import Uploadprofile from "../Uploadprofilepicture";

const Modals = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modals">
          <Uploadprofile setOpen={setOpen} />
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
