import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../../actions/user.actions';

import Button from '../../elements/Button';
import Container from '../../layout/Container';


const Account = ({ logout, currentUser }) => {
    const navigate = useNavigate();

    useEffect(() => {
        !currentUser && navigate('/login');
    }, [currentUser])

    return (
        <Container>
           <p>My account</p> 
            <Button onClick={logout}>Logout</Button>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Account)
