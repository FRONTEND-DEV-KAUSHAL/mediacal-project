import React, { useState } from 'react';
import * as yup from 'yup'
import { useFormik, Form, Formik } from 'formik'
import { SIGN_UP_ACTION } from '../../redux/ActionTypes';
import { signUpAction } from '../../redux/action/Auth.action';
import { useDispatch } from 'react-redux';

function Auth(props) {
    let [usertype, setUsertype] = useState('login');
    let [reset, setReset] = useState(false);

    let setschema, setInit;
    if (usertype === 'login') {
        setschema = {
            email: yup.string().email("Enter valid Email").required("Enter Email id"),
            password: yup.string().required("Hmmm....Looks Like Your Password is Wrong")
        }

        setInit = {
            email: '',
            password: ''
        }
    } else if (usertype === 'signup') {
        setschema = {
            name: yup.string().required("Enter Your Name"),
            email: yup.string().email("Enter valid Email").required("Enter Email id"),
            password: yup.string().required("Hmmm....Looks Like Your Password is Wrong")
        }
        setInit = {
            name: '',
            email: '',
            password: ''
        }
    }
    const handleLogin = () => {
        localStorage.setItem("user","123")
    }
    let data = [];
    let schema = yup.object().shape(setschema);
    const getdata = (values) => {


        console.log(values);
        let localdata = JSON.parse(localStorage.getItem("user"));
        if (localdata === null) {
            localStorage.setItem("user", JSON.stringify([values]))
        } else {
            data.push(values);
            localStorage.setItem("user", JSON.stringify(data))
        }

    }
    const dispatch = useDispatch() 
    const formik = useFormik({
        initialValues: setInit,
        validationSchema: schema,
        enableReinitialize: true,
        onSubmit: values => {
            if (usertype === "login") {
                handleLogin();
            } else {
                getdata(values);
            }
            dispatch(signUpAction(values))
            // localStorage.setItem("user", JSON.stringify(values))
        },
    });

    const { handleChange, errors, handleSubmit, handleBlur, touched } = formik;
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    {
                        reset === true ?
                            <h2>Forget Password</h2>
                            :
                            usertype === 'login' ?
                                <h2>Login</h2>
                                :
                                <h2>Signup</h2>
                    }
                </div>
                <Formik values={formik}>
                    <Form onSubmit={handleSubmit} className="php-email-form">
                        <div>
                            {
                                reset === true ?
                                    null
                                    :
                                    usertype === 'login' ?
                                        null
                                        :
                                        <div className="col-md-4 form-group mt-3 mt-md-0">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Your name" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} onBlur={handleBlur} />
                                            <div className="validate" />
                                            <p>{errors.name && touched.name ? errors.name : ''}</p>
                                        </div>
                            }
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={handleChange} onBlur={handleBlur} />
                                <div className="validate" />
                                <p>{errors.email && touched.email ? errors.email : ''}</p>
                            </div>

                        </div>
                        <div>
                            {
                                reset === true ?
                                    null
                                    :
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="password" className="form-control" name="password" id="password" placeholder="Your password" data-rule="password" data-msg="Please enter a valid password" onChange={handleChange} onBlur={handleBlur} />
                                        <div className="validate" />
                                        <p>{errors.password && touched.password ? errors.password : ''}</p>
                                    </div>
                            }
                        </div>
                        <div>
                            {
                                reset === true ?
                                    <>
                                        <p className='d-inline-block'>Already Have An Account</p><button onClick={() => { setReset(false); setUsertype('login') }}>Login</button>
                                    </>
                                    :
                                    usertype === 'login' ?
                                        <>
                                            <p className='d-inline-block'>New User? Create An Account</p><button className='ms-3' onClick={() => setUsertype('signup')}>Signup</button>
                                            <button className='ms-3' onClick={() => setReset(true)}>Forget Password ?</button>
                                        </>
                                        :
                                        <>
                                            <p className='d-inline-block'>Already Have An Account</p><button onClick={() => { setReset(false); setUsertype('login') }}>Login</button>
                                        </>
                            }
                        </div>
                        <div className="text-center">
                            {
                                reset === true ?
                                    <button type="submit">Submit</button>
                                    :
                                    usertype === 'login' ?
                                        <button type="submit">Login</button>
                                        :
                                        <button type="submit">Signup</button>
                            }
                        </div>
                    </Form>
                </Formik>
            </div>
        </section>


    );
}

export default Auth;