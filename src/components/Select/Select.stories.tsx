import React, {ChangeEvent, useState} from "react";
import {Select, SelectPropsType} from "./Select";
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select',
    component: Select,

    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectPropsType) => <Select {...args} />;
const callback = action('callback action');

export const EmptySelect = Template.bind({});


EmptySelect.args = {

    value: '2',
    onChange: callback,
    items: [{title: 'Minsk', value: '1'},
        {title: 'Moscow', value: '2'},
        {title: 'Kiev', value: '3'},],
};

export const BaseExample = (args: SelectPropsType) => {
    return <>
        <Select
            value={'1'}
            onChange={callback}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'},
            ]}/>
    </>;
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
   return <Select
        onChange={setValue}
        value={value}
        items={[
            {title: 'Minsk', value: 1},
            {title: 'Moscow', value: 2},
            {title: 'Kiev', value: 3},
        ]}/>
};


export const ModeSelected: Story = () => {
    const [parentValue, setValue] = useState(' ');

    const ChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return <select value={parentValue} onChange={ChangeSelect}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Kiev</option>
    </select>
};
ModeSelected.args = {};


export const SelectValue = (args: SelectPropsType) => {
    const [value, setValue] = useState('Moscow');
    const callback = action('callback action');

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {value: 'Minsk', title: 'Minsk'},
                       {value: 'Moscow', title: 'Moscow'},
                       {value:'Kiev', title: 'Kiev'},]}/>
};
