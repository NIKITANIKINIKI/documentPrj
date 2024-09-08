import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Spinner: React.FC = () => {
  return (
    <Box className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
