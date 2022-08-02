import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { AlertColor } from "@mui/material";

interface ToastProps {
  isShown: boolean;
  severity?: AlertColor | undefined;
  errorMessage?: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast: React.FC<ToastProps> = ({
  isShown,
  severity = "info",
  errorMessage,
}) => {
  const [open, setOpen] = React.useState(isShown);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  if (!isShown) return null;

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          Error occured while loading products. {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Toast;
