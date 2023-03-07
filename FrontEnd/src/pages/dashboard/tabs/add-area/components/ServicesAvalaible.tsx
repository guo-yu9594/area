import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const buttonStyle: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '275',
    fontSize: '1.2rem',
    width: '80%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }

type TypeServicesAvalaible = {
  value: number[]
  result: Function;
  setIndex: Function;
  setDisplayDescr: Function;
  category: string[];
  id: number[];
  otherIndex: number;
  enableButton: Function;
}

function checkDisabledButton(enableButton: Function, actionId: number, reactionId: number): void {
  if (actionId >= 0 && reactionId >= 0)
      enableButton(false);
};

const ServicesAvalaible = (props: TypeServicesAvalaible) => {
    const checkbox = <Radio sx={{margin: '3% 0% 0% 3%', position: 'absolute', left: '0'}} checkedIcon={<CheckBoxIcon sx={{margin: '3% 0% 0% 3%', position: 'absolute', left: '0'}}/>} icon={<CheckBoxOutlineBlankIcon sx={{color: 'white', position: 'absolute', left: '0'}}/>}/>
    return (
        <RadioGroup
        sx={{ display: 'flex', flexDirection: 'row', overflow: 'scroll'}}
        value={props.value ? props.value : -1}
        onChange={(e) => props.result(e.target.value)}
      >
        {props.category.map((val: string, i: number) => (
          <div key={i} style={{display: 'flex', width: '100%', position: 'relative', borderBottom: '1px solid white', justifyContent: 'center'}}>
            <FormControlLabel
              sx={{ margin: '5% 0% 0% 5%', position: 'absolute', left: '0'}}
              value={props.id[i]}
              label=''
              control={checkbox}
              onClick={() => {props.setIndex(i); checkDisabledButton(props.enableButton, i, props.otherIndex)}}
              />
            <Button onClick={() => {props.setDisplayDescr(false); props.setIndex(i);}} style={buttonStyle}>{props.category[i]}</Button>
          </div>
        ))}
      </RadioGroup>
    )
}


export default ServicesAvalaible;