import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom'

function Home(){

    let history = useNavigate();

    const handleEdit = (id, Name, LastName, Address, City, Country, Email, Number) => {
        localStorage.setItem('Name',Name);
        localStorage.setItem('LastName',LastName);
        localStorage.setItem('Address',Address);
        localStorage.setItem('City',City);
        localStorage.setItem('Country',Country);
        localStorage.setItem('Email',Email);
        localStorage.setItem('Number',Number);
        localStorage.setItem('Id',id);
    }

    const handleDelete = (id) => {
        var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        Employees.splice(index,1);

        history('/');
    }

    return(
        <Fragment>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign:'left' }}>
                <h1>PhoneBook</h1>
            </div>
            <div style={{margin:"10rem"}}>
            <h2 style={{textAlign:'left'}}>Contacts</h2>
                <Link className="d-grid gap-2" to="/create" style={{height: '50px', width: '150px', float: 'right', textAlign: 'right', marginBottom: '50px'}}>
                    <Button size="lg">Add Contact</Button>
                <br></br>
                <br></br>
                </Link>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0
                            ?
                            Employees.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.Name}
                                        </td>                                   
                                        <td>
                                            {item.LastName}
                                        </td>
                                        <td>
                                            {item.Address}
                                        </td>
                                        <td>
                                            {item.City}
                                        </td>
                                        <td>
                                            {item.Country}
                                        </td>
                                        <td>
                                            {item.Email}
                                        </td>
                                        <td>
                                            {item.Number}
                                        </td>
                                        <td>
                                        <Link to={`/edit`}>
                                            <Button onClick={() => handleEdit(item.id, item.Name, item.LastName, item.Address, item.City, item.Country, item.Email, item.Number)}style={{background: 'green'}}>Edit</Button>
                                        </Link>
                                        </td>
                                        <td>
                                            <Button onClick={() => handleDelete(item.id)} style={{background: 'red'}}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </Table>
            </div>
        </Fragment>
    )
}

export default Home;