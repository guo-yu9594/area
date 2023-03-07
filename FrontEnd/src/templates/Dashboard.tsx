const menubg: React.CSSProperties = {
  backgroundColor: 'rgba(34, 34, 34, 0.70)',
  width: '86%',
  height: '80%',
  borderRadius: '55px',
  marginTop: '7%',
  marginBottom: '-39%'
}

const areatxt: React.CSSProperties = {
  marginTop: '0%',
  position: 'absolute',
  fontWeight: 100,
  fontSize: '5.5rem'
}

const DashboardTemplate = ({ child }: { child: JSX.Element }): JSX.Element => {  
  return (
    <div className='dashboard'>
      <div style={menubg}>
        <div style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          {child}
        </div>
      </div>
      <h1 style={areatxt}>Area</h1>
    </div>
  )
}

export default DashboardTemplate;
