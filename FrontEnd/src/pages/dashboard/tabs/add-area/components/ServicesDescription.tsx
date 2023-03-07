import DisplayServiceDescription from '../../../components/DisplayServiceDescription';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from "@mui/material";

type TypeServicesDescription = {
    setDisplayDescr: Function;
    category: string[];
    descriptions: string[];
    index: number;
}

const ServicesDescription = (props: TypeServicesDescription) => {
    return (
        <div style={{display: 'flex',  position: 'relative', height: '100%', overflow: 'scroll'}}>
            <IconButton
                sx={{position: 'absolute', left: '0', margin: '3% 0% 0% 3%', fontSize: '80%'}}
                onClick={() => props.setDisplayDescr(true)}
            >
            <ArrowBackIosNewIcon sx={{color: 'white'}}/>
            </IconButton>
            <DisplayServiceDescription
                text={props.category[props.index]}
                descr={props.descriptions[props.index]}
            />
        </div>
    )
}

export default ServicesDescription