import { useNavigate } from "react-router-dom";
import LeftArrow from "../../../../components/LeftArrow";
import Menu from "../../components/Menu";
import ServicesList from "./components/ServicesList";

const ServicesBoxStyle: React.CSSProperties = {
  position: 'relative',
  width: '60vw',
  height: '65vh',
  border: '1px solid white',
  borderRadius: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}

const backArrowStyle: React.CSSProperties = {
  position: 'absolute',
  left: '2%',
  margin: '0',
  width: '25px',
  height: '25px'
}

const titleStyle: React.CSSProperties = {
  font: 'Poppins',
  fontSize: '2rem',
  fontWeight: 200,
  margin: 0
}

const headerContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '2%'
}

const ServicesManager = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <>
      <Menu navigate={true} greyButtonName='Add an area' greyButtonUrl='dashboard/add-area'/>
      <div className="dashboard-frame">
        <div style={ServicesBoxStyle}>
          <div style={headerContainerStyle}>
            <LeftArrow style={backArrowStyle} onClick={() => navigate('/dashboard')} />
            <p style={titleStyle}>SERVICES MANAGER</p>
          </div>
          <ServicesList />
        </div>
      </div>
    </>
  );
}
export default ServicesManager;
