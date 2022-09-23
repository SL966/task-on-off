import React, {useState} from "react";
import {OnOff, OnOffType} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";


const GetCategoryObj = (categoryName: 'Event') => ({
    table: {
        category: categoryName
    }

});

export default {
    title: 'OnOff',
    component: OnOff,

    argTypes: {
        backgroundColor: {control: 'color'},
        onChange: {...GetCategoryObj('Event')}


    },
} as ComponentMeta<typeof OnOff>;



const Template: ComponentStory<typeof OnOff> = (args: OnOffType) => <OnOff {...args} />;

const callback = action('on or off clicked');

export const OnOffMode = Template.bind({});

OnOffMode.args = {
    on: true,
    onChange: callback,
};



export const OnMode = () => <OnOff on={true} onChange={callback} />;

export const OffMode = () => <OnOff on={false} onChange={callback} />;

export const ControlledOnOff: Story = () => {
   const [value, setValue] = useState<boolean>(false);

    return <OnOff on={value} onChange={setValue} />
};

ControlledOnOff.args = {
    on: true,
    onChange: callback,
}