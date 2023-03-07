import AuthStepText from '../../../components/AuthStepText';
import '../../../styles/App.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const authBtn: React.CSSProperties = {
    fontFamily: 'Poppins',
    fontWeight: 300,
    borderRadius: 50,
    width: '18vw',
    height: '7vh',
    marginTop: '3vh',
    marginBottom: '3vh',
    fontSize: '1.7rem',
    textTransform: 'none',
    backgroundColor: '0085FF'
};

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar">
            <AuthStepText value='AUTHENTIFICATION' />
            <Button variant="contained" style={authBtn} onClick={() => navigate('/register')}>Register</Button>
            <Button variant="contained" style={authBtn} onClick={() => navigate('/login')}>Login</Button>
        </div>
    );
}

export default Sidebar;
