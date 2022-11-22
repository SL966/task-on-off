import React from "react";
import {inspect} from "util";


export type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Element that are showed when is opened.
     */
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
    color?: string
}

export function Accordion(props: AccordionPropsType) {
    console.log('Accordion 1')
    return <div>
        <AccordionTitle type={props.titleValue}
                        onChange={props.onChange}
                        color={props.color}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>
}

export type AccordionTitlePropsType = {
    type: string
    onChange: () => void
    color?: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion 2')
    const Color = {
        color: 'blue',
    }
    return (
        <h3 style={{color: props.color ? props.color : 'black'}}
            onClick={(e) => props.onChange()}>{props.type}</h3>
    );
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    console.log('Accordion 3')

    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                props.onClick(i.value)
            }} key={index}>{i.title}</li>)}
        </ul>
    );

}

