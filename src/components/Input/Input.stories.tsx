import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import React, {ChangeEvent, useRef, useState} from "react";
import {Input} from "./Input";



type InputPropsType = {
    value: string
}

export default {
    title: 'Input',
    component: Input,

    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputPropsType) => <Input {...args} />;

export const InputControlled = Template.bind({});

InputControlled.args = {
    value: '',
};

export const ModeChanging: Story = () => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return <><input value={value} onChange={onChange}/> {value} </>
};
ModeChanging.args = {

}

export const GetInputButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}> save</button>
        - actual value: {value} </>;
};


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const ChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.value)
    };

    return <input value={parentValue} onChange={ChangeInput}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const ChangeInput = (e: ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.checked)
    };
    return <input type={'checkbox'} checked={parentValue} onChange={ChangeInput}/>
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const ChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    };
    return <select value={parentValue} onChange={ChangeSelect}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select>
};