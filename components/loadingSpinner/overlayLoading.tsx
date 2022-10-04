import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
const OverlayLoading: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress color="secondary" />
    </Backdrop>
  );
};
export default OverlayLoading;
