import React, {useState} from "react";
import {Rating, RatingValueType, StarPropsType} from "./Rating";
import {ComponentMeta, ComponentStory, Story} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {ModeChanging} from "../Accordion/Accordion.stories";



export default {
    title: 'Rating',
    component: Rating,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Rating>;
const onClickCCallback = action('some item was clicked');

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const EmptyRating = Template.bind({});

EmptyRating.args = {
    onClick:onClickCCallback,
    value: 0
};


export const Rating1 = () => <Rating value={1} onClick={onClickCCallback} />;
export const Rating2 = () => <Rating value={2} onClick={x=>x} />;
export const Rating3 = () => <Rating value={3} onClick={x=>x} />;
export const Rating4 = () => <Rating value={4} onClick={x=>x} />;
export const Rating5 = () => <Rating value={5} onClick={x=>x} />;


export const RatingChanging:Story<StarPropsType> = (args) => {
   const [rating, setRating] = useState<RatingValueType>(0);

    return <Rating {...args} value={rating} onClick={setRating} />
};
ModeChanging.args = {

};