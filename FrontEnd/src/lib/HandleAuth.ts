import axios from "axios";

export const handleAuth = async () => {
  try {
    const authUrl = await axios.get("http://localhost:8080/auth/google");
    console.log(authUrl);
    window.location.href = authUrl.data;
  } catch (error) {
    console.log(error);
  }
};
