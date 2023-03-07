
const fontDescr: React.CSSProperties = {
        fontSize: '1.2rem',
        color: 'white',
        marginLeft: '4vw',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: '275',
        textAlign: 'start',
}

type TypeDisplayServiceDescription = {
        text: string;
        descr: string;
}

const DisplayServiceDescr = (props: TypeDisplayServiceDescription) => {
        return (
            <div style={{alignItems: 'start', wordWrap: 'break-word'}}>
                <p style={fontDescr}>{props.text}</p>
                <p style={fontDescr}>{props.descr}</p>
            </div>
        )
}

    export default DisplayServiceDescr;