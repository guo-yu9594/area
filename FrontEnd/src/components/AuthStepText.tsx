const AuthStepTextStyle: React.CSSProperties = {
    color: 'white',
    fontWeight: 100,
    paddingTop: '7vh',
    paddingBottom: '15vh',
    fontSize: '2rem'
}

interface AuthStepTextParams {
    value: string
}

const AuthStepText = ({ value }: AuthStepTextParams) => {
    return (
        <p style={AuthStepTextStyle}>{value}</p>
    )
}

export default AuthStepText;