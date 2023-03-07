import * as React from 'react';
import { useState } from 'react';
import ServicesAvalaible from './ServicesAvalaible';
import ServicesDescription from './ServicesDescription';

const fontTitle: React.CSSProperties = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '275',
  fontSize: '2rem',
  margin: '5% 0% 0% 0%',
  color: 'white !important',
  borderBottom: '1px solid white',
  paddingBottom: '5%',
}

const form: React.CSSProperties = {
  height: '82%',
  border: '1px solid white',
  borderRadius: '40px',
  width: '38%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  marginTop: '6%',
  marginLeft: '5%',
  overflow: 'hidden'
}

type TypeList = {
  title: string;
  id: number[];
  descriptions: string[];
  category: string[];
  value: number[];
  result: Function;
  setIndex: Function;
  index: number;
  otherIndex: number;
  enableButton: Function;
}

const List = (props: TypeList) => {
  const [displayDescr, setDisplayDescr] = useState<boolean>(true)

  return (
    <div style={form}>
      <p style={fontTitle}>{props.title}</p>
      { displayDescr ? (
        <ServicesAvalaible
          id={props.id}
          category={props.category}
          value={props.value}
          result={props.result}
          setDisplayDescr={setDisplayDescr}
          setIndex={props.setIndex}
          otherIndex={props.otherIndex}
          enableButton={props.enableButton}
        />
      ) :
        <ServicesDescription
          category={props.category}
          descriptions={props.descriptions}
          setDisplayDescr={setDisplayDescr}
          index={props.index}
        />
      }
    </div>
  )
}


export default List;