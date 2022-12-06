import Button from '../components/elements/Button';
import '../main.scss';

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        buttonLabel: { type: "string", defaultValue: 'Button' }
    }
}

const Template = ({ buttonLabel, ...args }) => <Button {...args}>{ buttonLabel }</Button>

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    buttonLabel: 'Primary Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
    size: 'regular',
    variant: 'secondary',
    buttonLabel: 'Secondary Button'
}

export const Outline = Template.bind({})
Outline.args = {
    size: 'regular',
    variant: 'primary',
    buttonLabel: 'Outline Button',
    outline: true
}

export const Rounded = Template.bind({})
Rounded.args = {
    size: 'regular',
    variant: 'primary',
    buttonLabel: 'Rounded Button',
    rounded: true
}

export const Loading = Template.bind({})
Loading.args = {
    size: 'regular',
    variant: 'primary',
    loading: true,
    buttonLabel: 'Loading Button'
}