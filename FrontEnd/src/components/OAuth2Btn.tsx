import Button from "@mui/material/Button";

type AuthHandler = () => Promise<void>;

interface OAuth2BtnProps {
	handleAuth: AuthHandler;
	Logo: React.FunctionComponent<{ width: string, height: string }>;
}

const OAuth2Btn: React.FC<OAuth2BtnProps> = ({ handleAuth, Logo }) => {
	return (
		<Button
			sx={{
				borderRadius: "50%",
				width: "75px",
				height: "75px",
				border: "1px solid white",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				background: "transparent",
				marginY: "2vh",
				marginX: "2vw",
			}}
			variant="contained"
			onClick={handleAuth}
		>
			<Logo width="35px" height="35px" />
		</Button>
	);
};

export default OAuth2Btn;