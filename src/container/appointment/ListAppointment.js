import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


function ListAppointment(props) {

    const history = useHistory();
    let [data, setData] = useState([]);

    const getData = () => {
        let localData = JSON.parse(localStorage.getItem("BookAppointment"));

        setData(localData);
    }

    useEffect(() => {
        
        getData();
    }, []);

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem("BookAppointment"));

        let fData = localData.filter((f) => f.id !== id);

        localStorage.setItem("BookAppointment", JSON.stringify(fData));

        console.log(fData, localData);
        getData();
    }

    const handleEdit = (id) => {
        console.log(id);
        history.push('/book_apt', {id: id})
    }

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
                    <div>
                        {
                            data.map((d,i) => {
                                return (
                                    <Card key={i}>
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                {d.name}
                                            </CardTitle>
                                            <CardSubtitle
                                                className="mb-2 text-muted"
                                                tag="h6">
                                                {d.email}
                                            </CardSubtitle>
                                            <CardText>
                                                {d.phone}
                                            </CardText>
                                            <Button className='me-5' onClick={() => handleEdit(d.id)}>
                                                Edit
                                            </Button>
                                            <Button onClick={() => handleDelete(d.id)}>
                                                Delete
                                            </Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListAppointment;