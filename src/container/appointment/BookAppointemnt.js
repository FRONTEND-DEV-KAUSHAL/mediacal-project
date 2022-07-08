import React, { useState } from 'react';
import * as yup from 'yup';
import {useFormik ,Form ,Formik} from "formik";
import {NavLink, useHistory} from 'react-router-dom';

 
function BookAppointment(props) {
    let schema = yup.object().shape({
        name: yup.string().required("Enter your name"),
        email: yup.string().email("Enter valid email").required("Enter your email"),
        phone :yup.string().required("Enter your number"),
        date :yup.string().required("Enter your appointment date"),
        department :yup.string().required("Select your department"),
        message :yup.string().required("Enter your message"),
      });
 
      const insertData = (values) => {
        let localData = JSON.parse(localStorage.getItem('BookAppointment'));
   
        let id = Math.floor(Math.random() * 1000);
   
        let data = {
          id: id,
          ...values
        }
   
        console.log(data);
   
        if (localData === null) {
          localStorage.setItem("BookAppointment", JSON.stringify([data]));
        } else {
          localData.push(data);
          localStorage.setItem("BookAppointment", JSON.stringify(localData));
        }
 
      history.push("/ListAppointment");
 
    }
 
      const formikObj = useFormik({
        initialValues: {
          email: '',
          name : '',
          phone : '',
          date : '',
          department :'',
          message : ''
        },
        validationSchema:schema,
        onSubmit: values => {
            insertData(values);
        },
      });
 
      const {handleChange ,errors ,handleSubmit ,handleBlur ,touched} = formikObj
      
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Manage an Appointment</h2>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <NavLink to='/BookAppointment'>BookAppointment</NavLink>
                    </div>
                    <div className='col-6'>
                        <NavLink to='/ListAppointment'>ListAppointment</NavLink>
                    </div>         
                </div>
                <Formik values={formikObj}>
                <Form onSubmit={handleSubmit} action method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                            onChange={handleChange}
                            onBlur={handleBlur}
                             />
                             <p className='text-danger'>{errors.name && touched.name ? errors.name :''}</p>
                            <div className="validate" />
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                             />
                              <p className='text-danger'>{errors.email && touched.email ? errors.email:''}</p>
                            <div className="validate" />
                        </div>
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            <p className='text-danger'>{errors.phone && touched.phone ? errors.phone:''}</p>
                            <div className="validate" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form-group mt-3">
                            <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  onChange={handleChange} onBlur={handleBlur}/>
                            <p className='text-danger'>{errors.date && touched.date ? errors.date:''}</p>
                            <div className="validate" />
                        </div>
                        <div className="col-md-4 form-group mt-3">
                            <select name="department" id="department" className="form-select" onChange={handleChange} onBlur={handleBlur}>
                                <option value>Select Department</option>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                                <option value="Department 3">Department 3</option>
                            </select>
                            <p className='text-danger'>{errors.department && touched.department ? errors.department:''}</p>
                            <div className="validate" />
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""}  onChange={handleChange} onBlur={handleBlur}/>
                        <p className='text-danger'>{errors.message && touched.message ? errors.message:''}</p>
                        <div className="validate" />
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Make an Appointment</button></div>
                </Form>
                </Formik>
            </div>
        </section>
 
    );
}
 
export default BookAppointment;
