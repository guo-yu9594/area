import { styled } from "@mui/material/styles";
import { Button, TextField } from '@mui/material';
import { useState } from "react";
import axios from "axios";

const StyledTextField = styled(TextField)({
    "& label": {
      color: "white"
    },
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      color: 'rgba(255, 255, 255, 0.8)',
      "& fieldset": {
        borderColor: 'rgba(255, 255, 255, 0.8)'
      },
      "&:hover fieldset": {
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2
      },
      "&.Mui-focused fieldset": {
        borderColor: 'rgba(255, 255, 255, 0.8)'
      }
    }
});


const TriggerInput = () => {
    const [input, setInput] = useState<string>();

    const sendData = async () => {
        const token = localStorage.getItem('token');
        const data = {
            timer: input
        }
        try {
            console.log(input)
            await axios.post('http://localhost:8080/tigger-timer', data, {headers: {Authorization: token}});
        } catch (error) {
            console.log(error);
        };
    };
    return (
        <div style={{display: 'flex'  }}>
        <StyledTextField variant="outlined" label="Time trigger" onChange={(e) => setInput(e.target.value)}/>
        <Button variant="text" sx={{color: 'white'}} onClick={() => {sendData()}}>
            Confirm
        </Button>
  </div>
    )
}

export default TriggerInput;