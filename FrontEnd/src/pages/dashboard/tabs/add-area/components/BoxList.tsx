import List from "./List"
import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
    id: number,
    serviceId: number,
    title: string,
    description: string,
    extraData: any
}

function sortByTitle(dataArray: Data[]): Data[] {
    return dataArray.sort((a: Data, b: Data) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
}

function getTitles(data: Data[]): string[] {
    return data.map(item => item.title);
}

function getId(data: Data[]): number[] {
    return data.map(item => item.id);
}

function getDescription(data: Data[]): string[] {
    return data.map(item => item.description ? item.description : "Missing description");
}

function getAllExtraData(dataArray: Data[]): any[] {
    return dataArray.map(data => data.extraData);
}

type TypeBoxList = {
    changeAction: Function;
    changeReaction: Function;
    setActionField: Function;
    setReactionField: Function;
    actionId: number[];
    reactionId: number[];
    setActionIndex: Function;
    setReactionIndex: Function;
    actionIndex: number;
    reactionIndex: number;
    enableButton: Function;
}

const BoxList = (props: TypeBoxList) => {
    const [actionsTitles, setActionTitles] = useState<string[]>([]);
    const [actionDescr, setActionDescr] = useState<string[]>([]);
    const [reactionsTitles, setReactionTitles] = useState<string[]>([]);
    const [reactionDescr, setReactionDescr] = useState<string[]>([]);
    const [listActionId, setListActionId] = useState<number[]>([]);
    const [listReactionId, setListReactionId] = useState<number[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const resAction = await axios.get(`http://localhost:8080/elements/actions-connect`,{headers: {'Authorization': token}});
            const resReaction = await axios.get(`http://localhost:8080/elements/reactions-connect`,{headers: {'Authorization': token}});
            sortByTitle(resAction.data);
            sortByTitle(resReaction.data);
            setActionTitles(getTitles(resAction.data))
            setReactionTitles(getTitles(resReaction.data))
            props.changeAction(getId(resAction.data))
            props.changeReaction(getId(resReaction.data))
            setActionDescr(getDescription(resAction.data))
            setReactionDescr(getDescription(resReaction.data))
            setListActionId(getId(resAction.data))
            setListReactionId(getId(resReaction.data))
            props.setActionField(getAllExtraData(resAction.data))
            props.setReactionField(getAllExtraData(resReaction.data))
        }
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [props.changeAction, props.changeReaction, props.setActionField, props.setReactionField])
    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: '70%', height: '100%'}}>
            <List
                descriptions={actionDescr}
                id={listActionId}
                value={props.actionId}
                title='ACTION'
                result={props.changeAction}
                category={actionsTitles}
                setIndex={props.setActionIndex}
                index={props.actionIndex}
                otherIndex={props.reactionIndex}
                enableButton={props.enableButton}
            />
            <List
                descriptions={reactionDescr}
                id={listReactionId}
                value={props.reactionId}
                title='REACTION'
                result={props.changeReaction}
                category={reactionsTitles}
                setIndex={props.setReactionIndex}
                index={props.reactionIndex}
                otherIndex={props.actionIndex}
                enableButton={props.enableButton}
            />
        </div>
    )
}

export default BoxList