import { useNavigate } from "react-router-dom";

const RedirectLogin = () => {
	const navigate = useNavigate();
	const navigateToLogin = () => navigate("/login");

	return (
		<div style={{ display: "flex", flexDirection: "row", marginTop: '1vh' }}>
			<p style={{ color: "white" }}>Already an account ? Login</p>
			<p
				style={{
					color: "white",
					marginLeft: "0.3rem",
					textDecoration: "underline",
				}}
				onClick={navigateToLogin}
			>
				here
			</p>
		</div>
	);
}

export default RedirectLogin;