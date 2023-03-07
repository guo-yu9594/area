
import { useState } from "react";
import ViewArea from "./components/ViewArea";
import ModifyArea from "./components/ModifyArea";


export default function DashboardPage() {
    const [modify, setModify] = useState<boolean>(false)
    const [areaId, setAreaId] = useState<number>(0)
    return (
        <>
            { modify ? <ModifyArea setModify={setModify} areaId={areaId}/>: <ViewArea setModify={setModify} setAreaId={setAreaId}/>
            }
        </>
    )
}