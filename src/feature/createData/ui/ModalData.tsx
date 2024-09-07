import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import FormDoc from "./FormDoc";


const ModalData: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <Typography variant="h4" component="div" color="black">
        Данные документов 
      </Typography>
      <Button
        variant="contained"
        sx={{ marginBottom: 2, backgroundColor: "#457b9d" }}
        onClick={() => setIsOpen(true)}
      >
        Добавить новые данные
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 bg-white shadow-lg p-6 rounded-lg">
          <Box className="absolute top-0 right-0 m-1">
            <IconButton
              aria-label="закрыть"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-700"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <FormDoc/>
        </Box>
      </Modal>
    </>
  );
};

export default ModalData;
