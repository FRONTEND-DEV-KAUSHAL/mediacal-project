import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function BookAppointment(props) {

    const history = useHistory()
    const [update, setUpdate] = useState(false)
0
    let schema = yup.object().shape({
        name: yup.string().required("Enter your name"),
        email: yup.string().email("Enter Your Email ID").required("Enter Valid Email ID!"),
        phone: yup.string().required("enter your number"),
        date: yup.string().required("enter your appointment date"),
        department: yup.string().required("enter department"),
        message: yup.string().required("enter department"),
    });

    const handleUpdate = (values) => {
        let localData = JSON.parse(localStorage.getItem('BookAppointment'));

        let uData = localData.map((d) => {
            if (d.id === values.id) {
                return values;
            } else {
                return d;
            }
        });

        localStorage.setItem('BookAppointment', JSON.stringify(uData));

        history.replace();
        setUpdate(false);
        formikobj.resetForm();
        history.push('/list_apt')

    }

    const insertData = (values) => {
        let localData = JSON.parse(localStorage.getItem('BookAppointment'));

        let id = Math.floor(Math.random() * 1000);

        let data = {
            id: id,
            ...values
        }

        console.log(data);

        if (localData === null) {
            localStorage.setItem('BookAppointment', JSON.stringify([data]))
        } else {
            localData.push(data)
            localStorage.setItem('BookAppointment', JSON.stringify(localData))
        }
        history.push("list_apt");

    }
    const formikobj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update) {
                handleUpdate(values)
            } else {
                insertData(values);
            }
        },
    });

    useEffect(() => {

        let localData = JSON.parse(localStorage.getItem('BookAppointment'));
        
        if (props.location.state && localData !== null) {
            let fData = localData.filter((d) => d.id === props.location.state.id);
            console.log(fData[0]);
            formikobj.setValues(fData[0])
            setUpdate(true)
        }


        // console.log(fData[0]);

    }
        , [])

    const { handleChange, errors, handleSubmit, handleBlur, touched, values } = formikobj

    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                    </div>
                    <div className='row'>
                        <div className='col-6'>
                            <NavLink exact to='/book_apt'>Book Appointment</NavLink>
                        </div>
                        <div className='col-6'>
                            <NavLink exact to='/list_apt'>List Appointment</NavLink>
                        </div>
                    </div>
                    <Formik values={formikobj}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        value={values.name}
                                        id="name"
                                        placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.name && touched.name ? errors.name : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        value={values.email}
                                        placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.email && touched.email ? errors.email : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        value={values.phone}
                                        placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input
                                        type="date"
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        value={values.date}
                                        placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.date && touched.date ? errors.date : ''}</p>
                                    <div className="validate" />
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select
                                        name="department"
                                        id="department"
                                        value={values.department}
                                        className="form-select"
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    <p>{errors.department && touched.department ? errors.department : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea
                                    className="form-control"
                                    name="message"
                                    value={values.message}
                                    rows={5}
                                    placeholder="Message (Optional)" defaultValue={""}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <p>{errors.message && touched.message ? errors.message : ''}</p>
                                <div className="validate" />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center">
                                {
                                    update ?
                                        <button type="submit">Update an Appointment</button>
                                        :
                                        <button type="submit">Make an Appointment</button>
                                }

                            </div>
                        </Form>
                    </Formik>
                </div>
            </section>

        </div>
    );
}

export default BookAppointment;