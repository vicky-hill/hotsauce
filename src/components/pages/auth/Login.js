import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Container from '../../layout/Container';
import Button from '../../elements/Button';

import { checkUserSession } from '../../../actions/user.actions';

const Login = ({ checkUserSession, currentUser }) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        currentUser && navigate('/account');
    }, [currentUser]);

    const initialValues = {
        email: "vicky.ungemach95@gmail.com",
        password: "123456"
    }

    const onSubmit = async ({ email, password }, { resetForm }) => {
        try {
            setLoading(true);
            const { user } = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('token', user.accessToken);

            checkUserSession();
            resetForm();
            setLoading(false)

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <Container content="extra-narrow fit-screen" center>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ handleChange, handleSubmit, values }) => (
                    <form className='form' onSubmit={handleSubmit}>
                        <h1 className='form__title'>Login</h1>
                        <p className='form__text'>Please enter your email and password:</p>
                        <div className="form__item">
                            <input value={values.email} onChange={handleChange} name="email" type="text" className='form__item-input' placeholder='Email' required />
                            <label htmlFor="email" className="form__item-label--floating">Email</label>
                        </div>
                        <div className="form__item">
                            <input value={values.password} onChange={handleChange} name="password" type="password" className='form__item-input' placeholder='Password' required />
                            <label htmlFor="password" className="form__item-label--floating">Password</label>
                        </div>
                        <Button type="submit" rounded block className="mt-2">Login</Button>
                        {loading && <p className='mt-3'>loading</p>}
                        <p className='form__text mt-5'>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                )}
            </Formik>
        </Container>
    )
}


const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
