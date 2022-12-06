import Heading from '../components/elements/Heading';
import '../main.scss';

export default {
    title: "Components/Heading",
    component: Heading
}

const Template = ({ ...args }) => <Heading {...args} />

export const HeadingOne = Template.bind({})
HeadingOne.args = {
    accent: "Our",
    text: "hot sauce recipes"
}

