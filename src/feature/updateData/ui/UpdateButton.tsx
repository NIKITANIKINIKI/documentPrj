import { Button } from "@mui/material";
import React, { useState } from "react";
import Model from "../../../shared/ui/Model/Model";
import FormDoc from "../../formData/ui/FormDoc";
import { UserDoc } from "../../../entities/data/model/dataSlice";

type UpdateButtonProps = {
  data: UserDoc;
};

const UpdateButton: React.FC<UpdateButtonProps> = ({ data }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Button size="small" variant="contained" onClick={() => setIsOpen(true)}>
        Изменить
      </Button>
      <Model
      
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        children={
            <FormDoc
              onUpdate={true}
              data={data}
              setIsOpen={setIsOpen}
            />
        }
      ></Model>
    </>
  );
};

export default UpdateButton;
