import { IconButton } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DisplayServiceDescription from "./DisplayServiceDescription";
import LineButton from "./LineButton";
import { findElembyIndex } from '../../../lib/FindElemByIndex';

export const titleBorderBottom: React.CSSProperties = {
    width: '100%',
    marginTop: '3%',
    paddingBottom: '3%',
    textAlign: 'center',
    marginBottom: '0%',
    fontFamily: 'Poppins',
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight: '290',
    borderBottom: '1px solid white'
}

export const title: React.CSSProperties = {
    width: '100%',
    marginTop: '3%',
    paddingBottom: '3%',
    textAlign: 'center',
    marginBottom: '0%',
    fontFamily: 'Poppins',
    fontSize: '2rem',
    fontStyle: 'normal',
    fontWeight: '290'
}

export const category: React.CSSProperties = {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
}

export const textButton: React.CSSProperties = {
    fontSize: '1.1rem',
    color: 'white',
    marginTop: '3%',
    textAlign: 'center',
    marginBottom: '3%',
    marginRight: '0%',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '300',
}

const divLineButton: React.CSSProperties = {
    width: '100%',
    borderBottom:'1px solid white',
    marginBottom: '0%',
    display: 'flex',
    justifyContent: 'center'
}

type TypeCategoryAction = {
    display: boolean;
    actionTxt: string;
    descr: string;
    status: boolean[];
    displayDescr: Function;
    onClickBack: Function;
    service: string[];
}

export const CategoryAction = (props: TypeCategoryAction) => {
    return (
        <div style={category}>
            { props.display ? (
                <div>
                    <IconButton onClick={() => {props.onClickBack(false)}} sx={{position: 'absolute', marginLeft: '2%', marginTop: '1%', fontSize: '200'}}>
                        <ArrowBackIosNewIcon sx={{color: 'white', fontWeight: '100'}}/>
                    </IconButton>
                    <h6 style={title}>ACTION</h6>
                    <DisplayServiceDescription
                        text={props.actionTxt}
                        descr={props.descr}
                    />
                </div>
            ) :
                <div>
                    <h6 style={titleBorderBottom}>ACTION</h6>
                    {props.service.map((val: string, index: number) => (
                        <LineButton key={index} divStyle={divLineButton}text={val} textStyleButton={textButton} onClick={props.displayDescr} index={index} status={findElembyIndex(props.status, index)}/>
                    ))}
                </div>
            }
        </div>
    )
}
