import { useState } from 'react';
import { CategoryAction } from './CategoryAction'
import CategoryReaction from './CategoryReaction'
import { findElembyIndex } from '../../../lib/FindElemByIndex';
import TriggerInput from './TriggerInput'

const dashboardBox: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '65%',
  height: '100%',
  flexDirection: 'column',
  marginTop: '1%',
  marginBottom: '0%'
}

type TypeBox = {
  actionDescr: string[];
  reactionDescr: string[];
  action: string[];
  reaction: string[];
  status: boolean[];
  areaIds: number[];
  setAreaId: Function;
  setModify: Function;
  setStatus: Function;
  deleteData: Function;
}

const DashboardBox = (props: TypeBox) => {
  const [display, setDisplay] = useState<boolean>(false)
  const [actionDescr, setActionDescr] = useState<string>("")
  const [actionTxt, setActionTxt] = useState<string>("")
  const [reactionDescr, setReactionDescr] = useState<string>("")
  const [reactionTxt, setReactionTxt] = useState<string>("")
  const displayDescr = (index: number) => {
      setActionDescr(findElembyIndex(props.actionDescr, index))
      setReactionDescr(findElembyIndex(props.reactionDescr, index))
      setActionTxt(findElembyIndex(props.action, index))
      setReactionTxt(findElembyIndex(props.reaction, index))
      setDisplay(true)
  }
  return (
    <div style={dashboardBox}>
      <div style={{width: '60vw', height: '65vh', border: '1px solid white', borderRadius: '50px', display: 'flex', flexDirection: 'row', overflow: 'scroll'}}>
        <CategoryAction
          service={props.action}
          actionTxt={actionTxt}
          descr={actionDescr}
          displayDescr={displayDescr}
          onClickBack={setDisplay}
          display={display}
          status={props.status}
        />
        <CategoryReaction
          service={props.reaction}
          reactionTxt={reactionTxt}
          descr={reactionDescr}
          displayDescr={displayDescr}
          deleteData={props.deleteData}
          display={display}
          status={props.status}
          setStatus={props.setStatus}
          areaIds={props.areaIds}
          setAreaId={props.setAreaId}
          setModify={props.setModify}
        />
      </div>
      <TriggerInput />
    </div>
  )
}


export default DashboardBox;