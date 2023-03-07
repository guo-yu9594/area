import * as React from 'react';
import { textButton, title, category, titleBorderBottom} from './CategoryAction';
import DisplayServiceDescription from './DisplayServiceDescription';
import LineButtonTrash from './LineButtonTrash';
import { findElembyIndex } from '../../../lib/FindElemByIndex';

const divLineButtonTrash: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    borderBottom: '1px solid white'
}

type TypeCategoryReaction = {
    display: boolean;
    reactionTxt: string;
    descr: string;
    status: boolean[];
    areaIds: number[];
    setModify: Function;
    setStatus: Function;
    displayDescr: Function;
    service: string[];
    deleteData: Function;
    setAreaId: Function;
}

const CategoryReaction = (props: TypeCategoryReaction) => {
    return (
        <div style={category}>
            { props.display ? (
                <div style={{borderLeft: '1px white solid', height: '100%'}}>
                    <h6 style={title}>REACTION</h6>
                    <DisplayServiceDescription
                        text={props.reactionTxt}
                        descr={props.descr}
                    />
                </div>
            ) :
                <div>
                    <h6 style={titleBorderBottom}>REACTION</h6>
                    {props.service.map((val: string, index: number) => (
                        <LineButtonTrash
                            key={index}
                            divStyle={divLineButtonTrash}
                            text={val}
                            textStyleButton={textButton}
                            onClick={props.displayDescr}
                            deleteData={props.deleteData}
                            index={index}
                            status={findElembyIndex(props.status, index)}
                            setStatus={props.setStatus}
                            areaId={findElembyIndex(props.areaIds, index)}
                            setAreaId={props.setAreaId}
                            setModify={props.setModify}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default CategoryReaction;
