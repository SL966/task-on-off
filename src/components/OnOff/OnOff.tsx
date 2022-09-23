import s from './OnOff.module.css'
import {useState} from "react";

export type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void
}


export function OnOff(props: OnOffType) {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '5px',
        marginTop: '10px',
        backgroundColor: on ? 'red' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        marginLeft: '2px',
        backgroundColor: on ? 'white' : 'yellow',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'red' : 'yellow',
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On
            </div>
            <div style={offStyle} onClick={offClicked}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>

    );
};

