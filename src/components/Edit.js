import React, {useState, useEffect} from "react";
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees";
import {useNavigate} from 'react-router-dom'

function Edit(){
    const[Name, setName] = useState('');
    const[LastName, setLastName] = useState('');
    const[Address, setAddress] = useState('');
    const[City, setCity] = useState('');
    const[Country, setCountry] = useState('');
    const[Email, setEmail] = useState('');
    const[Number, setNumber] = useState('');
    const [id, setId] = useState("");

    let history = useNavigate();

     var index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        const handleSubmit =(e) => {
        e.preventDefault();

        let a = Employees[index];
        a.Name = Name;
        a.LastName = LastName;
        a.Address = Address;
        a.City = City;
        a.Country = Country;
        a.Email = Email;
        a.Number = Number;

        history("/");
    }

useEffect(()=>{
    setName(localStorage.getItem('Name'))
    setLastName(localStorage.getItem('LastName'))
    setAddress(localStorage.getItem('Address'))
    setCity(localStorage.getItem('City'))
    setCountry(localStorage.getItem('Country'))
    setEmail(localStorage.getItem('Email'))
    setNumber(localStorage.getItem('Number'))
    setId(localStorage.getItem('Id'))
},[])


        return(
        <div>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign:'left' }}>
                <h1>PhoneBook</h1>
            </div>
            <Form className="d-grid gap-2" style={{margin:"15rem", marginTop:'50px'}}>
                <h2 style={{textAlign:'left'}}>Update the contact</h2>
            <Form.Group className="mb-3" controlId="Name">
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>Name:</h6>
                <Form.Control type="text" placeholder="Enter Name" value={Name} required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>Last Name:</h6>
            <Form.Group className="mb-3" controlId="LastName">
                <Form.Control type="text" placeholder="Enter Last Name" value={LastName} required onChange={(e) => setLastName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>Address:</h6>
            <Form.Group className="mb-3" controlId="Address">
                <Form.Control type="text" placeholder="Enter Address" value={Address} required onChange={(e) => setAddress(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>City:</h6>
            <Form.Group className="mb-3" controlId="City">
                <Form.Control type="text" placeholder="Enter City" value={City} required onChange={(e) => setCity(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>Country:</h6>
            <Form.Group className="mb-3" controlId="Country">
                <Form.Control type="text" placeholder="Enter Country" value={Country} required onChange={(e) => setCountry(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>Email:</h6>
            <Form.Group className="mb-3" controlId="Email">
                <Form.Control type="text" placeholder="Enter the Email" value={Email} required onChange={(e) => setEmail(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <h6 style={{textAlign:'left',fontWeight: 'bold',marginBottom: '0'}}>Number:</h6>
            <Form.Group className="mb-3" controlId="Number">
                <Form.Control type="text" placeholder="Enter the Number" value={Number} required onChange={(e) => setNumber(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit" style={{height: '40px', width: '80px'}}>Update</Button>
        </Form>
            </div>
        )

}

export default Edit;