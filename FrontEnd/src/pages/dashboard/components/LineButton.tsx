import { Button } from "@mui/material";

type TypeLineButton = {
    divStyle: React.CSSProperties;
    textStyleButton: React.CSSProperties;
    text: string;
    index: number;
    status: boolean;
    onClick: Function;
}

const LineButton = (props: TypeLineButton) => {
    return (
        <div style={props.divStyle}>
            <Button onClick={() => {props.onClick(props.index)}} style={props.textStyleButton}>{props.status ? props.text : <del>{props.text}</del>}</Button>
        </div>
    )
}


export default LineButton;