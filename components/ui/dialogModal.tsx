import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogModalData } from "types/alltypes";

export default function AlertDialog(props: DialogModalData) {
  const [open, setOpen] = React.useState(props.open);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ color: "error.main", fontWeight: 550 }}
          id="alert-dialog-title"
        >
          {props.title}
        </DialogTitle>
        <hr />
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color={"black"}>
            {props.body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
