import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from '../../layout/Container';
import Button from '../../elements/Button';

import { login } from '../../../actions/user.actions';

const Login = ({ login }) => {

    const initialValues = {
        email: "vicky.ungemach95@gmail.com",
        password: "123456"
    }

    const onSubmit = async (values, { resetForm }) => {
        console.log(values);
        const res = await login(values.email, values.password);
        console.log(res);
        resetForm();
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
                        <p className='form__text mt-5'>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </form>
                )}
            </Formik>
        </Container>
    )
}


const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(login(email, password)),
});

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
