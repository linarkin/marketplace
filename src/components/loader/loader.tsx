import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Overlay, IconWrapper } from "./loader.styled";

interface LoaderProps {
  isShown: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isShown }) => {
  if (!isShown) return null;

  return (
    <>
      <Overlay>
        <IconWrapper>
          <CircularProgress color="secondary" />
        </IconWrapper>
      </Overlay>
    </>
  );
};

export default Loader;
