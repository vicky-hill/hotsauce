import Navbar from '../components/elements/Navbar';
import '../main.scss';

export default {
    title: "Components/Navbar",
    component: Navbar
}

const Template = ({ ...args }) => <Navbar {...args} />

export const NavbarDefault = Template.bind({})
NavbarDefault.args = {

}

