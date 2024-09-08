import { Button, Typography } from "@mui/material";
import React from "react";
import FormDoc from "../../formData/ui/FormDoc";
import Model from "../../../shared/ui/Model/Model";
import Spinner from "../../../shared/ui/Spinner/Spinner";

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
      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        
        children={<FormDoc onSave={true} setIsOpen={setIsOpen}/>}
      ></Model>
    </>
  );
};

export default ModalData;
