import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoadingPageParams {
  service: string;
}

export default function LoadingPage({ service }: LoadingPageParams) {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToDashboard = () => navigate("/dashboard");
    const fetchToken = async () => {
      try {
        const token = localStorage.getItem('token');
        const queryString = window.location.search;
        const params = new URLSearchParams(queryString);
        const code = params.get("code");

        if (!code) return;
        if (localStorage.getItem(`${service}Code`) === code) {
          localStorage.removeItem(`${service}Code`);
          return
        }
        localStorage.setItem(`${service}Code`, code);

        const response = await axios.get(
          `http://localhost:8080/auth/${service}/redirect?code=${code}`,
          { headers: { Authorization: token } }
        );
        console.log(response)
        const accessToken = response.data.token;
        if (service === "google") {
          localStorage.setItem("token", accessToken);
          localStorage.setItem("userId", response.data.userId);
        }
        navigateToDashboard();
      } catch (error) {
        console.log(error);
      }
    };
    fetchToken();
  }, [service, navigate]);

  return <CircularProgress />;
}
