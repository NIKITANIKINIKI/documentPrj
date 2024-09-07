import { Box, Button, TextField } from "@mui/material";
import React from "react";

const FormData: React.FC = () => {
  return (
    <form className="space-y-4 m-2">
      <TextField
        fullWidth
        label="Дата подписи компании"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField fullWidth label="Имя подписавшегося от компании" type="text" />
      <TextField fullWidth label="Название документа" type="text" />
      <TextField fullWidth label="Статус документа" type="text" />
      <TextField fullWidth label="Тип документа" type="text" />
      <TextField fullWidth label="Номер сотрудника" type="text" />
      <TextField
        fullWidth
        label="Дата подписи сотрудника"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField fullWidth label="Имя подписавшегося сотрудника" type="text" />

      <Box className="flex justify-end mt-4">
        <Button
          variant="contained"
          color="primary"
          className="bg-blue-500 hover:bg-blue-600"
        >
          Сохранить
        </Button>
      </Box>
    </form>
  );
};

export default FormData;
