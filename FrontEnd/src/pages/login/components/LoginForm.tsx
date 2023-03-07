import { ChakraProvider } from "@chakra-ui/react";
import AuthSideBarTextField from "../../../components/AuthSideBarTextField";
import AuthSideBarTextFieldPW from "../../../components/AuthSideBarTextFieldPW";

interface LoginFormPropsParams {
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
}

const LoginForm = ({ setEmail, setPassword }: LoginFormPropsParams): JSX.Element => {
  return (
    <ChakraProvider>
      <AuthSideBarTextField placeHolder="E-mail" setValue={setEmail} />
      <AuthSideBarTextFieldPW placeHolder="Password" setValue={setPassword} />
    </ChakraProvider>
  );
};

export default LoginForm;