import { Button} from "@mui/material";
import AreaParameter from "./AreaParameter";

type TypeLineButtonTrash = {
  divStyle: React.CSSProperties;
  textStyleButton: React.CSSProperties;
  text: string;
  index: number;
  status: boolean;
  areaId: number;
  setModify: Function;
  setStatus: Function;
  onClick: Function;
  deleteData: Function;
  setAreaId: Function;
};

const LineButtonTrash = (props: TypeLineButtonTrash) => {

  return (
    <div style={props.divStyle}>
      <Button
        onClick={() => {
          props.onClick(props.index);
        }}
        style={props.textStyleButton}
      >
        {props.status ? props.text : <del>{props.text}</del>}
      </Button>
      <AreaParameter areaId={props.areaId} setAreaId={props.setAreaId} status={props.status} index={props.index} deleteData={props.deleteData} setStatus={props.setStatus} setModify={props.setModify}/>
    </div>
  );  
};

export default LineButtonTrash;
