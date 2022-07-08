import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
 
 
function ListAppointment(props) {
    return (
        // <div>
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
                    <div>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6">
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>
                                <Button>
                                    Edit
                                </Button>
                                <Button>
                                    Delete
                                </Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </section>
        // </div>
    );
}
 
export default ListAppointment;
