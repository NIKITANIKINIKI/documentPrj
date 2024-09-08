import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Model from "../../../shared/ui/Model/Model";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/providers/store";
import { deleteUserDoc } from "../api";
import Spinner from "../../../shared/ui/Spinner/Spinner";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const dispatch = useDispatch<AppDispatch>();

  const onClickButton= async() =>{
    setIsLoading(true)
    await dispatch(deleteUserDoc(id))
    setIsLoading(false)
    setIsOpen(false)
  }
  return (
    <>
      <Button
        color="error"
        size="small"
        variant="contained"
        onClick={() => setIsOpen(true)}
      >
        Удалить
      </Button>
      <Model
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        children={
          <>
            <Box>
              <Typography sx={{ flexGrow: 1 }}>
                Вы действительно хотите его удалить?
              </Typography>
              <Box className="flex justify-end pt-2 gap-3">
                <Button variant="contained" size='small' color='error' onClick={onClickButton}>Да</Button>
                <Button variant="contained" size='small' onClick={() => setIsOpen(false)}>Нет</Button>
              </Box>
            </Box>
            {isLoading && <Spinner/>}
          </>
        }
      ></Model>
    </>
  );
};

export default DeleteButton;
