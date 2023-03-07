import axios from "axios";
import { useEffect, useState } from "react";
import DashboardBox from "./Box";
import Menu from "./Menu";

interface Data {
    id: number;
    active: boolean;
    action: {
        title: string,
        description: string
    },
    reaction: {
        title: string,
        description: string
    }
}

function getActionTitles(data: Data[]): string[] {
    return data.map(item => item.action.title);
}

function getIdAreas(data: Data[]): number[] {
    return data.map(item => item.id);
}

function getStatus(data: Data[]): boolean[] {
    return data.map(item => item.active);
}

function getReactionTitles(data: Data[]): string[] {
    return data.map(item => item.reaction.title);
}

function getActionDesc(data: Data[]): string[] {
    return data.map(item => item.action.description ? item.action.description : "Missing description");
}

function getReactionDesc(data: Data[]): string[] {
    return data.map(item => item.reaction.description ? item.reaction.description : "Missing description");
}


function updateArray(index: number, array: any[]): any[] {
    const newArray = [...array];
    newArray.splice(index, 1)
    return newArray;
}

type TypeViewArea = {
    setModify: Function;
    setAreaId: Function;
}

export default function ViewArea(props: TypeViewArea) {
    const [action, setAction] = useState<string[]>([]);
    const [reaction, setReaction] = useState<string[]>([]);
    const [actionDescr, setActionDescr] = useState<string[]>([]);
    const [reactionDescr, setReactionDescr] = useState<string[]>([]);
    const [areaIds, setAreaIds] = useState<number[]>([]);
    const [status, setStatus] = useState<boolean[]>([]);
    

    const deleteData = async (index: number) => {
        const data = {
            areaId: areaIds[index]
        }
        const token = localStorage.getItem("token");
        try {
            setAction(updateArray(index, action))
            setReaction(updateArray(index, reaction))
            setActionDescr(updateArray(index, actionDescr))
            setReactionDescr(updateArray(index, reactionDescr))
            setAreaIds(updateArray(index, areaIds))
            const area = await axios.delete('http://localhost:8080/areas', {headers: {Authorization: token}, data})
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const area = await axios.get(`http://localhost:8080/elements/areas`,{headers: {'Authorization': token}});
            setAction(getActionTitles(area.data));
            setReaction(getReactionTitles(area.data));
            setReactionDescr(getReactionDesc(area.data));
            setActionDescr(getActionDesc(area.data));
            setAreaIds(getIdAreas(area.data));
            setStatus(getStatus(area.data));
        }
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, [action])
    return (
        <>
            <Menu navigate={true} greyButtonName='Add an area' greyButtonUrl='dashboard/add-area' greyButtonFunction={() => {}} />
            <DashboardBox actionDescr={actionDescr} reactionDescr={reactionDescr} action={action} reaction={reaction} deleteData={deleteData} status={status} setStatus={setStatus} areaIds={areaIds} setAreaId={props.setAreaId} setModify={props.setModify}/>
        </>
    )
}