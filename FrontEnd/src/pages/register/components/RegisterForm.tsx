import { ChakraProvider } from "@chakra-ui/react";
import AuthSideBarTextField from "../../../components/AuthSideBarTextField";
import AuthSideBarTextFieldPW from "../../../components/AuthSideBarTextFieldPW";

interface RegisterFormPropsParams {
	setEmail: React.Dispatch<React.SetStateAction<string>>,
	setPassword: React.Dispatch<React.SetStateAction<string>>,
	setConfPassword: React.Dispatch<React.SetStateAction<string>>
}

const RegisterForm = ({ setEmail, setPassword, setConfPassword }: RegisterFormPropsParams): JSX.Element => {
	return (
		<ChakraProvider>
			<AuthSideBarTextField placeHolder="E-mail" setValue={setEmail} />
			<AuthSideBarTextFieldPW placeHolder="Password" setValue={setPassword} />
			<AuthSideBarTextFieldPW
				placeHolder="Confirm password"
				setValue={setConfPassword}
			/>
		</ChakraProvider>);
}

export default RegisterForm;