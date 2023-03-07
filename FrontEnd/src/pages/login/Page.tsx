import "../../styles/App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import AuthStepText from "../../components/AuthStepText";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RedirectRegister from "./components/RedirectRegister";
import LoginForm from "./components/LoginForm";
import GoogleLogo from "../../components/GoogleLogo";
import { handleAuth } from "../../lib/HandleAuth";
import OAuth2Btn from "../../components/OAuth2Btn";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const navigateToDashboard = () => navigate("/dashboard");

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      navigateToDashboard();
    } catch (error) {
      console.error(error);
    }
  };

  const btn =
    password === "" ? (
      <Button
        sx={{
          m: "10vh",
          borderRadius: "20%",
          width: "4vw",
          height: "6vh",
          fontSize: "1.7rem",
        }}
        variant="contained"
        disabled
      >
        {">"}
      </Button>
    ) : (
      <Button
        sx={{
          m: "10vh",
          borderRadius: "20%",
          width: "4vw",
          height: "6vh",
          fontSize: "1.7rem",
        }}
        variant="contained"
        onClick={() => {
          login();
        }}
      >
        {">"}
      </Button>
    );

  return (
    <div className="sidebar">
      <AuthStepText value="LOGIN" />
      <LoginForm setEmail={setEmail} setPassword={setPassword} />
      <OAuth2Btn handleAuth={handleAuth} Logo={GoogleLogo} />
      <RedirectRegister />
      {btn}
    </div>
  );
};

export default LoginPage;
