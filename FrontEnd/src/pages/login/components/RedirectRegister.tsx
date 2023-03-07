import { useNavigate } from "react-router-dom";

const RedirectRegister = () => {
  const navigate = useNavigate();
  const navigateToRegister = () => navigate("/register");

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p style={{ color: "white" }}>Create a new account </p>
      <p
        style={{
          color: "white",
          marginLeft: "0.3rem",
          textDecoration: "underline",
        }}
        onClick={navigateToRegister}
      >
        here
      </p>
    </div>
  );
}

export default RedirectRegister;