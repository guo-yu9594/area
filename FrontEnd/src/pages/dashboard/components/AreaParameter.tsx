import { IconButton, MenuItem, Popover } from "@mui/material"
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { useState } from "react";
import axios from "axios";


type TypeAreaParameter = {
    index: number;
    areaId: number;
    setModify: Function;
    deleteData: Function;
    status: boolean;
    setStatus: Function;
    setAreaId: Function;
}

const paramStyle: React.CSSProperties = {
    position: 'absolute',
    right: '0',
    marginTop: '3%',
    marginRight: '3%',
    color: 'white',
}

const textStyle: React.CSSProperties = {
    color: 'black',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '275',
};

const AreaParameter = (props: TypeAreaParameter) => { 
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => { 
        setAnchorEl(null);
    };
    const handleDelete = () => {
        props.deleteData(props.index);
        handleClose();
    };
    const handleModalOpen = () => { 
        handleClose();
        props.setAreaId(props.areaId);
        props.setModify(true);
    };
    const handleStatus = () => {
        props.setStatus((prevStatus: boolean[]) => {
            const newStatus = [...prevStatus];
            newStatus[props.index] = !newStatus[props.index];
            return newStatus;
        });
        sendData()
        handleClose();
    };
    const sendData = async () => {
        const token = localStorage.getItem('token');
        const data = {
            areaId: props.areaId,
            active: !props.status
        }
        try {
            await axios.put('http://localhost:8080/areas-active', data, {headers: {Authorization: token}});
        } catch (error) {
            console.log(error);
        };
    };
    return (
        <div>
            <IconButton
                onClick={handleClick}
                style={paramStyle}
            >
            <MoreHorizRoundedIcon />
            </IconButton>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            >
            <MenuItem onClick={handleDelete} sx={textStyle}>Delete</MenuItem>
            <MenuItem onClick={handleModalOpen} sx={textStyle}>Modify</MenuItem>
            <MenuItem onClick={handleStatus} sx={textStyle}>{props.status ? "Disable" : "Enable"}</MenuItem>
            </Popover>
        </div>
    )
}

export default AreaParameter;