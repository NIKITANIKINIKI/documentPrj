import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/providers/store";
import { setToken } from "../../../entities/user/model/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { username } = useSelector((state: RootState) => state.user);

  const handleLogout = () => {
    dispatch(setToken(null));
    localStorage.removeItem("authToken");
    localStorage.removeItem("authName");
    navigate("/login");
  };

  return (
    <AppBar position="static" style={{backgroundColor:'#1d3557'}}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="user-icon">
          <AccountCircleIcon color="primary" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {username ? `Привет, ${username}!` : "Загрузка..."}
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
