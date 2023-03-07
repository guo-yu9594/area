import UserInfos from "./UserInfos"
import ButtonsNavigate from "./ButtonsNavigate";
import Forms from "./Forms"

const menuDiv: React.CSSProperties = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    height: '86%',
    marginTop: '2%',
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center'
}


type TypeMenu = {
    actionForms?: Map<string, string>;
    reactionForms?: Map<string, string>;
    navigate: boolean;
    greyButtonName: string;
    greyButtonUrl?: string;
    greyButtonDisabled?: boolean;
    greyButtonFunction?: Function;
    blackButtonFunction?: Function;
    sendData?: any;
}

const Menu = (props: TypeMenu) => {
    return (
        <div style={menuDiv}>
            <UserInfos/>
            {props.navigate ? (
                <ButtonsNavigate
                    greyButtonDisabled={props.greyButtonDisabled ? true : false}
                    greyButtonName={props.greyButtonName}
                    greyButtonUrl={props.greyButtonUrl || ''}
                    greyButtonFunction={props.greyButtonFunction || (() => {})}
                    />
            ) : <Forms
                    greyButtonDisabled={props.greyButtonDisabled || false}
                    greyButtonName={props.greyButtonName}
                    greyButtonFunction={props.greyButtonFunction || (() => {})}
                    blackButtonFunction={props.blackButtonFunction || (() => {})}
                    actionForms={props.actionForms || new Map<string, string>()}
                    reactionForms={props.reactionForms || new Map<string, string>()}
                    sendData={props.sendData}
                />
            }
        </div>
    )
}


export default Menu;