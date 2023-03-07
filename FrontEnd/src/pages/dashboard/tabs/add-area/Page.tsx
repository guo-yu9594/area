import axios from "axios";
import { useState } from "react";
import Menu from "../../components/Menu";
import BoxList from "./components/BoxList"


const extractField = (fields : Map<string, string>) => {
    const filteredField = new Map<string, string>();
    if (Object.keys(fields).length === 0) {
        return filteredField;
    } else {
        for (let [key, value] of Object.entries(fields)) {
            if (key !== "nbFields") {
                filteredField.set(key, value);
            }
        }
    }
    return filteredField
}

export default function AddAreaPage() {
    const [actionId, setActionId] = useState<number[]>([]);
    const [reactionId, setReactionId] = useState<number[]>([]);
    const [actionField, setActionField] = useState<any>([]);
    const [actionForms, setActionForms] = useState(new Map<string, any>());
    const [reactionForms, setReactionForms] = useState(new Map<string, any>());
    const [actionIndex, setActionIndex] = useState<number>(-1);
    const [reactionIndex, setReactionIndex] = useState<number>(-1);
    const [reactionField, setReactionField] = useState<any>([]);
    const [greyButton, setGreyButton] = useState<boolean>(true);

    const createForms = () => {
        setActionForms(extractField(actionField[actionIndex]))
        setReactionForms(extractField(reactionField[reactionIndex]))
    }
    const sendData = async () => {
        const token = localStorage.getItem('token');
        const data = {
            actionId: {
                id: Number(actionId),
                extraData: Object.fromEntries(actionForms.entries())
            },
            reactionId: {
                id: Number(reactionId),
                extraData: Object.fromEntries(reactionForms.entries())
            }
        }
        try {
            console.log(data);
            await axios.post('http://localhost:8080/areas', data, {headers: {Authorization: token}});
        } catch (error) {
            console.log(error);
        };
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%'}}>
            <Menu
                actionForms={actionForms}
                reactionForms={reactionForms}
                navigate={false}
                sendData={sendData}
                greyButtonDisabled={greyButton}
                greyButtonName='Continue'
                greyButtonFunction={createForms}
            />
            <BoxList
                actionId={actionId}
                reactionId={reactionId}
                changeAction={setActionId}
                changeReaction={setReactionId}
                setActionField={setActionField}
                setReactionField={setReactionField}
                setActionIndex={setActionIndex}
                setReactionIndex={setReactionIndex}
                actionIndex={actionIndex}
                reactionIndex={reactionIndex}
                enableButton={setGreyButton}
            />
        </div>
    )
}