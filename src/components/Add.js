import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom';

function Add() {
    const [Name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Country, setCountry] = useState('');
    const [Emails, setEmails] = useState(['']);
    const [Numbers, setNumbers] = useState(['']); 

    const handleAddEmail = () => {
        setEmails([...Emails, '']); // Add an empty string to the emails array
    };

    const handleChangeEmail = (index, value) => {
        const updatedEmails = [...Emails];
        updatedEmails[index] = value;
        setEmails(updatedEmails);
    };

    const handleAddNumber = () => {
        setNumbers([...Numbers, '']); // Add an empty string to the numbers array
    };

    const handleChangeNumber = (index, value) => {
        const updatedNumbers = [...Numbers];
        updatedNumbers[index] = value;
        setNumbers(updatedNumbers);
    };

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = Name,
            b = LastName,
            c = Address,
            d = City,
            l = Country,
            f = Emails,
            g = Numbers;

        Employees.push({ id: uniqueId, Name: a, LastName: b, Address: c, City: d, Country: l, Email: f, Number: g });

        history("/");
    }

    return (
        <div>
            <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'left' }}>
                <h1>PhoneBook</h1>
            </div>
            <Form className="d-grid gap-2" style={{ margin: "15rem", marginTop: '50px' }} onSubmit={handleSubmit}>
                <h2 style={{ textAlign: 'left' }}>Register new contact</h2>
                <Form.Group className="mb-3" controlId="Name">
                    <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '5px' }}>Name:</h6>
                    <Form.Control style={{ marginBottom: '1px' }} type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0' }}>Last Name:</h6>
                <Form.Group className="mb-3" controlId="LastName">
                    <Form.Control type="text" placeholder="Enter Last Name" required onChange={(e) => setLastName(e.target.value)} />
                </Form.Group>
                <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0' }}>Address:</h6>
                <Form.Group className="mb-3" controlId="Address">
                    <Form.Control type="text" placeholder="Enter Address" required onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>
                <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0' }}>City:</h6>
                <Form.Group className="mb-3" controlId="City">
                    <Form.Control type="text" placeholder="Enter City" required onChange={(e) => setCity(e.target.value)} />
                </Form.Group>
                <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0' }}>Country:</h6>
                <Form.Group className="mb-3" controlId="Country">
                    <Form.Control type="text" placeholder="Enter Country" required onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>
                <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0' }}>Email:</h6>
                <Form.Group className="mb-3" controlId="Email">
                    {Emails.map((email, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <Form.Control type="text" placeholder="Enter the Email" value={email} onChange={(e) => handleChangeEmail(index, e.target.value)} style={{ marginBottom: '5px' }} />
                        </div>
                    ))}
                    <Button variant="secondary" onClick={handleAddEmail} style={{ marginBottom: '10px', backgroundColor: 'blue', float: 'right' }}>Add</Button>
                </Form.Group>
                <h6 style={{ textAlign: 'left', fontWeight: 'bold', marginBottom: '0' }}>Number:</h6>
                <Form.Group className="mb-3" controlId="Number">
                    {Numbers.map((number, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <Form.Control type="text" placeholder="Enter the Number" value={number} onChange={(e) => handleChangeNumber(index, e.target.value)} style={{ marginBottom: '5px' }} />
                        </div>
                    ))}
                    <Button variant="secondary" onClick={handleAddNumber} style={{ marginBottom: '10px', backgroundColor: 'blue', float: 'right' }}>Add</Button>
                </Form.Group>
                <Button type="submit" style={{ height: '40px', width: '80px' }}>Save</Button>
            </Form>
        </div>
    );
}

export default Add;