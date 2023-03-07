import UserIcon from "./UserIcon";
import axios from "axios";
import { useEffect, useState } from "react";

const emailfont: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: 'white',
    fontSize: '33%',
    fontWeight: '275',
    marginTop: '0%',
    marginBottom: '31%',
}

const userInfos: React.CSSProperties = {
    width: '100%',
    wordBreak: 'break-all',
}

const UserInfos = () => {
    const [email, setEmail] = useState<string>('Waiting...')

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://localhost:8080/elements/emails`,{headers: {'Authorization': token}});
            setEmail(response.data)
        }
        try {
            fetchData();
        } catch (error) {
            console.log(error);
            setEmail('ERROR');
        }
      }, []);
    return (
        <div style={userInfos}>
            <UserIcon/>
            <h6 style={emailfont}>{email}</h6>
        </div>
    )
}


export default UserInfos;