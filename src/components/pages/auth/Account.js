import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../../actions/user.actions';
import { clearCart } from '../../../actions/cart.actions';

import Button from '../../elements/Button';
import Container from '../../layout/Container';

const Account = ({ logout, currentUser, clearCart }) => {
    const navigate = useNavigate();

    useEffect(() => {
        !currentUser && navigate('/login');
    }, [currentUser]);

    const handleLogout = () => {
        logout();
        clearCart();
    }

    return (
        <Container content="fit-screen extra-narrow" center>
           <p className='m-5'>My account</p> 
            <Button onClick={handleLogout}>Logout</Button>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearCart: () => dispatch(clearCart()),
    
});

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)
