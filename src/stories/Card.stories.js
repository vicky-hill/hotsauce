import Card from '../components/elements/Card';
import '../main.scss';
import img1 from '../assets/img1.png';
import level1 from '../assets/level1.png';
import bottle1 from '../assets/bottle1.png';

export default {
    title: "Components/Card",
    component: Card
}

const Template = ({ ...args }) => <Card {...args} />

export const RecipeCard = Template.bind({})
RecipeCard.args = {
    type: 'recipe',
    image: img1,
    title: "Ribeye Steak",
    time: "1 hour 20 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus.",
    className: "w-25"
}

export const AddtoCartCard = Template.bind({})
AddtoCartCard.args = {
    type: 'product',
    image: bottle1,
    title: "Ribeye Steak",
    price: "$17.95",
    productName: "Chilli Sauce Exotic",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    className: "w-25"
}

export const HeatLevelCard = Template.bind({})
HeatLevelCard.args = {
    type: 'heat',
    image: level1,
    text: 'Our mildest sauces, ideal for anyone who doesn\'t want to get burned',
    highlight: 'mildest sauces',
    heatlevel: 'mild',
    className: "w-25"
}


