import { Button, IconButton } from "@mui/material"
import { useNavigate } from "react-router-dom"
import ManagerIcon from "./ManagerIcon"

export const greyButton: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontSize: '30%',
    fontStyle: 'normal',
    fontWeight: '275',
    marginTop: '20%',
    marginBottom: '0%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '40px',
    width: '12vw',
    height: '6vh',
    color: 'black',
    textTransform: 'none',
}

export const logoutButton: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontSize: '35%',
    fontStyle: 'normal',
    fontWeight: '275',
    marginTop: '20%',
    marginBottom: '0%',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderRadius: '40px',
    border: '1px solid rgba(255, 255, 255, 0.7)',
    width: '12vw',
    height: '6vh',
    color: 'white',
    textTransform: 'none',
}

export const managerFont: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontSize: '1.3rem',
    fontStyle: 'normal',
    fontWeight: '300',
    marginTop: '0%',
    marginBottom: '15%',
}

type TypeButtonsNavigate = {
    greyButtonName: string;
    greyButtonUrl: string;
    greyButtonDisabled: boolean;
    greyButtonFunction: Function;
}

const ButtonsNavigate = (props: TypeButtonsNavigate) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/');
    }

    return (
        <div style={{ bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute' }}>
            <IconButton onClick={() => navigate('/dashboard/services-manager')} sx={{ border: '1px solid white', borderRadius: '16px', marginBottom: '2%' }}>
                <ManagerIcon />
            </IconButton>
            <p style={managerFont}>Services Manager</p>
            { props.greyButtonDisabled ? (
                <Button variant='outlined' sx={greyButton} disabled>{props.greyButtonName}</Button>
                ) :
                <Button variant='contained' sx={greyButton} onClick={() => { navigate(`/${props.greyButtonUrl}`); props.greyButtonFunction(); }}>{props.greyButtonName}</Button>
            }
            <Button variant='outlined' sx={logoutButton} onClick={logout}>Logout</Button>
        </div>
    )
}


export default ButtonsNavigate;