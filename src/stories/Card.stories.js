import Card from '../components/elements/Card';
import '../main.scss';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';


export default {
    title: "Components/Card",
    component: Card
}

const Template = ({ ...args }) => <Card {...args} />

export const CardWithImage1 = Template.bind({})
CardWithImage1.args = {
    image: img1,
    title: "Ribeye Steak",
    time: "1 hour 20 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithImage2 = Template.bind({})
CardWithImage2.args = {
    image: img2,
    title: "Spicy Tacos",
    time: "30 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithImage3 = Template.bind({})
CardWithImage3.args = {
    image: img3,
    title: "Avocado Toast",
    time: "20 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithImage4 = Template.bind({})
CardWithImage4.args = {
    image: img4,
    title: "Spice Mixes",
    time: "1 hour",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}

export const CardWithImage5 = Template.bind({})
CardWithImage5.args = {
    image: img5,
    title: "Grilled Ribs",
    time: "2 hour 30 min",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci repellat repellendus."
}


