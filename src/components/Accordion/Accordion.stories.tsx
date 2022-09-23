import React, {useState} from "react";
import {Accordion, AccordionPropsType, AccordionTitlePropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {ComponentStory, ComponentMeta, Story} from '@storybook/react';

const GetCategoryObj = (categoryName: 'Colors' | 'Event' | 'Objects' | 'Main') => ({
    table: {
        category: categoryName
    }

});

export default {
    title: 'Accordion',
    component: Accordion,

    argTypes: {
        color: {...GetCategoryObj('Colors')},
        onChange: {...GetCategoryObj('Event')},
        onClick: {...GetCategoryObj('Event')},
        items: {...GetCategoryObj('Objects')},
        titleValue: {...GetCategoryObj('Main')},
        collapsed: {...GetCategoryObj('Main')}

    },
} as ComponentMeta<typeof Accordion>;
const callback = action('accordion mode change event fired');
const onClickCCallback = action('some item was clicked');

const Template: ComponentStory<typeof Accordion> = (args: AccordionPropsType) => <Accordion {...args} />;

const callbackProps = {
    onChange: callback,
    onClick: onClickCCallback
}

export const MenuCollapsedMode = Template.bind({});

MenuCollapsedMode.args = {
    ...callbackProps,
    titleValue: '--Menu--',
    collapsed: true,
    items: [{title: 'GGG', value: 1}, {title: 'HHH', value: 2}
        , {title: 'OOO', value: 3}, {title: 'EEE', value: 4}],

};

export const UsersUncallapsedMode = Template.bind({});
UsersUncallapsedMode.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: true,
    items: [{title: 'GGG', value: 1}, {title: 'HHH', value: 2}
        , {title: 'OOO', value: 3}, {title: 'EEE', value: 4}],
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {

    const [value, setValue] = useState<boolean>(false);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'GGG', value: 1}, {title: 'HHH', value: 2}
                          , {title: 'OOO', value: 3}, {title: 'EEE', value: 4}]} onClick={onClickCCallback}
                      titleValue={'Users'}/>
};
ModeChanging.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: true,
    items: [{title: 'GGG', value: 1}, {title: 'HHH', value: 2}
        , {title: 'OOO', value: 3}, {title: 'EEE', value: 4}],
    onClick: (value) => {
        alert(`user ${value} happy`)
    }
};

export const ModeAccordion = (args: AccordionTitlePropsType) => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'GGG', value: 1}, {title: 'HHH', value: 2}
                          , {title: 'OOO', value: 3}, {title: 'EEE', value: 4}]} onClick={onClickCCallback}
                      titleValue={'Users'}/>
};
ModeAccordion.args = {
    ...callbackProps,
    titleValue: 'Users',
    collapsed: true,
    items: [{title: 'GGG', value: 1}, {title: 'HHH', value: 2}
        , {title: 'OOO', value: 3}, {title: 'EEE', value: 4}],
};