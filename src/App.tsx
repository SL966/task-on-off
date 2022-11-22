import React, {useEffect, useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import SelfControlAccordion from "./components/SelfControlAccordion/SelfControlAccordion";
import {SelfControlRating} from "./components/SelfControlRating/SelfControlRating";
import {Rating, RatingValueType} from "./components/Reting/Rating";
import SelfControlOnOff from "./components/SelfControlOnOff/SelfControlOnOff";
import {Accordion} from "./components/Accordion/Accordion";
import {clearInterval} from "timers";


export function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [switchOn, setOn] = useState<boolean>(true);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);


    return (
        <div className={"App"}>
            <OnOff onChange={setOn} on={switchOn}/> {switchOn.toString()}
            <SelfControlOnOff on={switchOn} onChange={(on) => {
                setOn(on)
            }}/>
            <SelfControlAccordion titleValue={'--Menu'}/>
            <SelfControlAccordion titleValue={'--Users'}/>
            <SelfControlRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'--Menu--'} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }} onClick={setAccordionCollapsed} items={[]}/>
        </div>
    );
}


export default App;
