import {
  Button,
  Paper,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";
import { AppDispatch, RootState } from "../../app/providers/store";
import toast from "react-hot-toast";
import { login } from "../../feature/auth/api";
import { useNavigate } from "react-router-dom";

type LoginPageProps = {
  className?: string;
};

const LoginPage: React.FC<LoginPageProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { status } = useSelector((state: RootState) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const resultAction = await dispatch(
        login({ username, password })
      ).unwrap();
      navigate("/data");
      localStorage.setItem("authName", username);
      console.log(resultAction);
    } catch (e) {
      const errorMessage = (e as Error).message || "Ошибка входа";
      toast.error(errorMessage);
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Paper className="flex flex-col justify-center items-center max-w-[400px] h-[300px] w-full p-6">
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <Typography variant="h4" className="text-center">
            Вход в систему
          </Typography>
          <TextField
            label="Введите свое имя"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
          <TextField
            label="Введите свой пароль"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Button
            className="flex-1"
            type="submit"
            variant="contained"
            disabled={status === "loading"}
          >
            {status === "loading" ? <CircularProgress size={24} /> : "Войти"}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
