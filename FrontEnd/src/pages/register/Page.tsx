import "../../styles/App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import AuthStepText from "../../components/AuthStepText";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RedirectLogin from "./components/RedirectLogin";
import RegisterForm from "./components/RegisterForm";
import GoogleLogo from "../../components/GoogleLogo";
import OAuth2Btn from "../../components/OAuth2Btn";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const navigate = useNavigate();
  const navigateToDashboard = () => navigate("/dashboard");

  const register = async () => {
    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
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

  const handleAuth = async () => {
    try {
      const authUrl = await axios.get("http://localhost:8080/auth/google");
      console.log(authUrl);
      window.location.href = authUrl.data;
    } catch (error) {
      console.log(error);
    }
  };

  const btn =
    password !== confPassword || password === "" || confPassword === "" ? (
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
          register();
        }}
      >
        {">"}
      </Button>
    );

  return (
    <div className="sidebar">
      <AuthStepText value="REGISTER" />
      <RegisterForm setEmail={setEmail} setPassword={setPassword} setConfPassword={setConfPassword} />
      <OAuth2Btn handleAuth={handleAuth} Logo={GoogleLogo} />
      <RedirectLogin />
      {btn}
    </div>
  );
};

export default RegisterPage;
