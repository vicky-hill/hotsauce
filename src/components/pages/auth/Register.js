import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Container from '../../layout/Container';
import Button from '../../elements/Button';

import { register, resetError } from '../../../actions/user.actions';

const Register = ({ register, currentUser, registerError, resetError }) => {
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
        email: "pm+@excersys.com",
        password: "123456",
        password2: "123456"
    }

    const onSubmit = async ({ email, password }, { resetForm }) => {
        try {
            setLoading(true);

            const { user } = await createUserWithEmailAndPassword(auth, email, password);

            const payload = { _id: user.uid, email }
            register(payload);

            localStorage.setItem('token', user.accessToken);

            // const lsCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;

            // if (lsCart) {
            //     addToCart(lsCart, res.payload);
            // }

            resetForm();
            setLoading(false);

        } catch (error) {
            setError(error.message)
            setLoading(false);
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
                        <h1 className='form__title'>Register</h1>
                        <p className='form__text'>Please enter your email and password:</p>
                        <div className="form__item">
                            <input value={values.email} onChange={handleChange} onFocus={resetErrors} name="email" type="text" className='form__item-input' placeholder='Email' required />
                            <label htmlFor="email" className="form__item-label--floating">Email</label>
                        </div>
                        <div className="form__item">
                            <input value={values.password} onChange={handleChange} onFocus={resetErrors} name="password" type="password" className='form__item-input' placeholder='Password' required />
                            <label htmlFor="password" className="form__item-label--floating">Password</label>
                        </div>
                        <div className="form__item">
                            <input value={values.password2} onChange={handleChange} onFocus={resetErrors} name="password2" type="password" className='form__item-input' placeholder='Confirm Password' required />
                            <label htmlFor="password" className="form__item-label--floating">Confirm Password</label>
                        </div>

                        <p className='form__err'>{error && error}</p>
                        <p className='form__err'>{registerError && registerError}</p>
                        <p className='mt-3'>{loading && loading}</p>

                        <Button size="big" type="submit" rounded block className="mt-2">Register</Button>
                        <p className='form__text mt-5'>Alreay have an account? <Link to="/login">Login</Link></p>
                    </form>
                )}
            </Formik>
        </Container>
    )
}

const mapDispatchToProps = dispatch => ({
    register: (email, password) => dispatch(register(email, password)),
    resetError: () => dispatch(resetError())
});

const mapStateToProps = state => ({
    currentUser: state.userReducer.currentUser,
    registerError: state.userReducer.error
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
