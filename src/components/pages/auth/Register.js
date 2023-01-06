import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import Container from '../../layout/Container';
import Button from '../../elements/Button';

const Register = ({ }) => {

    const initialValues = {
        email: "",
        password: "",
        password2: ""
    }

    const onSubmit = (values, { resetForm }) => {
        console.log(values);
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
                        <h1 className='form__title'>Register</h1>
                        <p className='form__text'>Please enter your email and password:</p>
                        <div className="form__item">
                            <input value={values.email} onChange={handleChange} name="email" type="text" className='form__item-input' placeholder='Email' required />
                            <label htmlFor="email" className="form__item-label--floating">Email</label>
                        </div>
                        <div className="form__item">
                            <input value={values.password} onChange={handleChange} name="password" type="password" className='form__item-input' placeholder='Password' required />
                            <label htmlFor="password" className="form__item-label--floating">Password</label>
                        </div>
                        <div className="form__item">
                            <input value={values.password2} onChange={handleChange} name="password2" type="password" className='form__item-input' placeholder='Confirm Password' required />
                            <label htmlFor="password" className="form__item-label--floating">Confirm Password</label>
                        </div>
                        <Button type="submit" rounded block className="mt-2">Register</Button>
                        <p className='form__text mt-5'>Alreay have an account? <Link to="/login">Login</Link></p>
                    </form>
                )}
            </Formik>
        </Container>
    )
}

export default Register;