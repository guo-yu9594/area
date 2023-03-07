import "../App.css";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const authBtn: React.CSSProperties = {
  fontFamily: "Poppins",
  fontWeight: 300,
  borderRadius: 50,
  width: "18vw",
  height: "7vh",
  marginTop: "3vh",
  marginBottom: "3vh",
  fontSize: "1.5rem",
  textTransform: "none",
};

const authText: React.CSSProperties = {
  color: "white",
  fontWeight: 100,
  paddingTop: "5vh",
  paddingBottom: "15vh",
};

const Sidebar = () => {
  const handleAuth = async () => {
    try {
      const authUrl = await axios.get("http://localhost:8080/auth/google");
      window.location.href = authUrl.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchToken = async () => {
    try {
      const queryString = window.location.search;
      const params = new URLSearchParams(queryString);
      const code = params.get("code");
      if (!code) return;
      await axios.get(
        `http://localhost:8080/auth/google/redirect?code=${code}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sidebar">
      <h1 style={authText}>AUTHENTIFICATION</h1>
      <Button variant="contained" style={authBtn}>
        Register
      </Button>
      <Button variant="contained" style={authBtn}>
        Login
      </Button>
      <Button onClick={handleAuth} variant="contained" style={authBtn}>
        Authenticate with Google
      </Button>
      <Button onClick={fetchToken} variant="contained" style={authBtn}>
        test
      </Button>
    </div>
  );
};

export default Sidebar;
