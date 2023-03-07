import { Input } from '@chakra-ui/react'

interface AuthSideBarTextFieldParams {
    placeHolder: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
};

const AuthSideBarTextFieldPW = ({ placeHolder, setValue }: AuthSideBarTextFieldParams) => {
    return (
        <Input onChange={event => setValue(event.target.value)} type='password'
            placeholder={placeHolder} width='60%' height='7vh' borderRadius='50' _placeholder={{ opacity: 100, color: 'white' }} color='white' marginY='2vh' />
    )
}

export default AuthSideBarTextFieldPW;