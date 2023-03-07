import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'rgba(255, 255, 255)',
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'scroll',
    alignItems: 'center'
};

const textStyle: React.CSSProperties = {
    color: 'black',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '275',
};

const buttonCreate: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontSize: '150%',
    fontWeight: '275',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    border: '1px solid black',
    marginTop: '10%',
    borderRadius: '50px',
    textTransform: 'none',
    width: '50%',
};

type TypeModalForms = {
    open: boolean;
    setOpen: Function;
    actionForms: Map<string, string>;
    reactionForms: Map<string, string>;
    sendData: Function;
}

const ModalForms = (props: TypeModalForms ) => {
    const navigate = useNavigate();
    const arrayActionForms = Array.from(props.actionForms.entries())
    const arrayReactionForms = Array.from(props.reactionForms.entries())
    const handleClose = () => props.setOpen(false);
    const handleCreate = () => {
        props.sendData();
        navigate('/dashboard');
    };

    return (
        <Modal open={props.open} onClose={handleClose}>
          <Box sx={modalStyle}>
            <h1 style={textStyle}>Action</h1>
            {arrayActionForms.map(([key, value]) => (
                <TextField
                    key={key}
                    sx={{ width: '100%', marginBottom: '5%' }}
                    variant='filled'
                    label={key}
                    onChange={(e) => { props.actionForms.set(key, e.target.value); }}
                />
            ))}
            <h1 style={textStyle}>Reaction</h1>
            {arrayReactionForms.map(([key, value]) => (
                <TextField
                    key={key}
                    sx={{ width: '100%', marginBottom: '5%' }}
                    variant='filled'
                    label={key}
                    onChange={(e) => { props.reactionForms.set(key, e.target.value); }}
                />
            ))}
            <Button sx={buttonCreate} onClick={handleCreate}>Create</Button>
          </Box>
        </Modal>
    )
}

export default ModalForms;