import { Button, IconButton } from "@mui/material"
import ManagerIcon from "./ManagerIcon"
import { greyButton, logoutButton, managerFont } from "./ButtonsNavigate"
import { useState } from "react"
import ModalForms from "../tabs/add-area/components/ModalForms"
import { useNavigate } from "react-router-dom"

type TypeForms = {
    actionForms: Map<string, string>;
    reactionForms: Map<string, string>;
    greyButtonName: string;
    greyButtonDisabled: boolean;
    greyButtonFunction: Function;
    blackButtonFunction: Function;
    sendData: Function;
}

const Forms = (props: TypeForms) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div style={{ bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute' }}>
            <IconButton onClick={() => navigate('/dashboard/services-manager')} sx={{ border: '1px solid white', borderRadius: '16px', marginBottom: '2%' }}>
                <ManagerIcon/>
            </IconButton>
            <ModalForms
                open={open}
                setOpen={setOpen}
                actionForms={props.actionForms}
                reactionForms={props.reactionForms}
                sendData={props.sendData}
            />
            <p style={managerFont}>Services Manager</p>
            { props.greyButtonDisabled ? (
                <Button variant='outlined' sx={greyButton} disabled>{props.greyButtonName}</Button>
                ) :
                <Button variant='contained' sx={greyButton} onClick={() => {props.greyButtonFunction(); setOpen(true);}}>{props.greyButtonName}</Button>
            }
            <Button variant='outlined' sx={logoutButton} onClick={() => {navigate(-1); props.blackButtonFunction()}}>Back</Button>
        </div>
    )
}


export default Forms;