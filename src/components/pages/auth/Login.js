import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Container from '../../layout/Container';
import Button from '../../elements/Button';

import { checkUserSession, resetError } from '../../../actions/user.actions';

const Login = ({ checkUserSession, currentUser, loginError, resetError }) => {
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        currentUser && navigate('/account');
    }, [currentUser]);

    const resetErrors = () => {
        resetError();
        setError(null);
    }

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
            setError(error.message)
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
                            <input value={values.email} onChange={handleChange} onFocus={resetErrors} name="email" type="text" className='form__item-input' placeholder='Email' required />
                            <label htmlFor="email" className="form__item-label--floating">Email</label>
                        </div>
                        <div className="form__item">
                            <input value={values.password} onChange={handleChange} onFocus={resetErrors} name="password" type="password" className='form__item-input' placeholder='Password' required />
                            <label htmlFor="password" className="form__item-label--floating">Password</label>
                        </div>

                        <p className='form__err'>{ error && error }</p>
                        <p className='form__err'>{ loginError && loginError }</p>
                        <p className='mt-3'>{ loading && loading }</p> 

                        <Button size="big" type="submit" rounded block className="mt-2">Login</Button>
                        <p className='form__text mt-5'>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                )}
            </Formik>
        </Container>
    )
}


const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
    resetError: () => dispatch(resetError())
});

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser,
    loginError: state.userReducer.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
