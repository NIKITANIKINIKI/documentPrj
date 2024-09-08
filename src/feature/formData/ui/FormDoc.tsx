import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/providers/store";
import { UserDoc } from "../../../entities/data/model/dataSlice";
import { createUserDoc } from "../../createData/api";
import Spinner from "../../../shared/ui/Spinner/Spinner";
import { getUserDoc } from "../../../entities/data/api";
import { updateUserDoc } from "../../updateData/api";

interface FormDataProps {
  data?: UserDoc;
  onSave?: boolean;
  onUpdate?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FormData: React.FC<FormDataProps> = ({
  data,
  onSave,
  onUpdate,
  setIsOpen,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<UserDoc>(
    data
      ? data
      : {
          id: "",
          companySigDate: "",
          companySignatureName: "",
          documentName: "",
          documentStatus: "",
          documentType: "",
          employeeNumber: "",
          employeeSigDate: "",
          employeeSignatureName: "",
        }
  );

  const [errors, setErrors] = useState({
    companySigDate: "",
    companySignatureName: "",
    documentName: "",
    documentStatus: "",
    documentType: "",
    employeeNumber: "",
    employeeSigDate: "",
    employeeSignatureName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      companySigDate: "",
      companySignatureName: "",
      documentName: "",
      documentStatus: "",
      documentType: "",
      employeeNumber: "",
      employeeSigDate: "",
      employeeSignatureName: "",
    };

    if (!formData.companySigDate) newErrors.companySigDate = "Введите дату подписи компании";
    if (!formData.companySignatureName) newErrors.companySignatureName = "Введите имя подписавшегося от компании";
    if (!formData.documentName) newErrors.documentName = "Введите название документа";
    if (!formData.documentStatus) newErrors.documentStatus = "Введите статус документа";
    if (!formData.documentType) newErrors.documentType = "Введите тип документа";
    if (!formData.employeeNumber) newErrors.employeeNumber = "Введите номер сотрудника";
    if (!formData.employeeSigDate) newErrors.employeeSigDate = "Введите дату подписи сотрудника";
    if (!formData.employeeSignatureName) newErrors.employeeSignatureName = "Введите имя подписавшегося сотрудника";

    setErrors(newErrors);
    
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return; 

    setIsLoading(true);
    await dispatch(updateUserDoc(prepareData(formData)));
    dispatch(getUserDoc());
    setIsLoading(false);
    setIsOpen(false);
  };

  const prepareData = (formData: UserDoc) => {
    return {
      ...formData,
      companySigDate: new Date(formData.companySigDate).toISOString(),
      employeeSigDate: new Date(formData.employeeSigDate).toISOString(),
    };
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    await dispatch(createUserDoc(prepareData(formData)));
    dispatch(getUserDoc());
    setIsLoading(false);
    setIsOpen(false);
  };

  return (
    <form className="space-y-4 m-2  max-h-[400px]" onSubmit={onSave ? handleSave : handleUpdate}>
      <TextField
        fullWidth
        label="Дата подписи компании"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        name="companySigDate"
        value={formData.companySigDate
          ? new Date(formData.companySigDate).toISOString().slice(0, 16)
          : ""}
        onChange={handleChange}
        error={!!errors.companySigDate}
        helperText={errors.companySigDate}
      />
      <TextField
        name="companySignatureName"
        value={formData.companySignatureName || ""}
        onChange={handleChange}
        fullWidth
        label="Имя подписавшегося от компании"
        type="text"
        error={!!errors.companySignatureName}
        helperText={errors.companySignatureName}
      />
      <TextField
        name="documentName"
        value={formData.documentName || ""}
        onChange={handleChange}
        fullWidth
        label="Название документа"
        type="text"
        error={!!errors.documentName}
        helperText={errors.documentName}
      />
      <TextField
        name="documentStatus"
        value={formData.documentStatus || ""}
        onChange={handleChange}
        fullWidth
        label="Статус документа"
        type="text"
        error={!!errors.documentStatus}
        helperText={errors.documentStatus}
      />
      <TextField
        name="documentType"
        value={formData.documentType || ""}
        onChange={handleChange}
        fullWidth
        label="Тип документа"
        type="text"
        error={!!errors.documentType}
        helperText={errors.documentType}
      />
      <TextField
        name="employeeNumber"
        value={formData.employeeNumber || ""}
        onChange={handleChange}
        fullWidth
        label="Номер сотрудника"
        type="text"
        error={!!errors.employeeNumber}
        helperText={errors.employeeNumber}
      />
      <TextField
        fullWidth
        label="Дата подписи сотрудника"
        type="datetime-local"
        InputLabelProps={{
          shrink: true,
        }}
        name="employeeSigDate"
        value={formData.employeeSigDate
          ? new Date(formData.employeeSigDate).toISOString().slice(0, 16)
          : ""}
        onChange={handleChange}
        error={!!errors.employeeSigDate}
        helperText={errors.employeeSigDate}
      />
      <TextField
        name="employeeSignatureName"
        value={formData.employeeSignatureName || ""}
        onChange={handleChange}
        fullWidth
        label="Имя подписавшегося сотрудника"
        type="text"
        error={!!errors.employeeSignatureName}
        helperText={errors.employeeSignatureName}
      />

      <Box className="flex justify-end mt-4">
        {onSave && (
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-600"
            type="submit"
          >
            Сохранить
          </Button>
        )}
        {onUpdate && (
          <Button
            variant="contained"
            color="primary"
            className="bg-blue-500 hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Обновить
          </Button>
        )}
      </Box>
      {isLoading && <Spinner />}
    </form>
  );
};

export default FormData;
