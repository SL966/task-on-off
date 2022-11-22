import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string
    /* collapsed: boolean*/
}

function SelfControlAccordion(props: AccordionPropsType) {

    //let [collapsed, setCollapsed] = useState(false);

    let [state, dispatch] = useReducer (reducer, {collapsed:false});

    return <div>
        <AccordionTitle type={props.titleValue} onClick={() => {dispatch({type: TOGGLE_COLLAPSED})}}/>
        {!state.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    type: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {


    return (
        <h3 onClick = { () => {props.onClick()}}> {props.type} </h3>
    );
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default SelfControlAccordion;