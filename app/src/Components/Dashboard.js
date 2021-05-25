import React, { useState, useRef, useEffect }  from 'react'
import { Card, Button, Alert, Form, CardDeck } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useAuth } from "../Contexts/AuthContext"
import { db } from '../firebase'


export default function  Dashboard() {

    const nameRef = useRef()
    const pincodeRef = useRef()
    const contactRef = useRef()

    const [name, setName] = useState("")
    const [pincode, setPincode] = useState("")
    const [contact, setContact] = useState("")

    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()
    
    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        }
        catch{
            setError("Logout function failed")
        }
    }

    const[helpers,setHelpers] = useState([])
    const[helpees,setHelpees] = useState([])

    useEffect(() => {
        getHelpers();
        getHelpees();
      }, []); // blank to run only on first launch
    
      function getHelpers() {
        
        db.collection("users").onSnapshot(function (querySnapshot) {
          setHelpers(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().Name,
              pin: doc.data().Pincode,
            }))
          );
        });
      }

      function getHelpees() {
        
        db.collection("helpees").onSnapshot(function (querySnapshot) {
          setHelpees(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              name: doc.data().Name,
              pin: doc.data().Pincode,
            }))
          );
        });
      }

      function handleSubmit(e) {
          e.preventDefault()
          const h=!document.getElementById('help').checked
          db.collection("users").add({
            Name : name,
            Pincode : pincode,
            Contact : contact,
            Type : h
          })
      }

    
    return (
        <>
         <Card>
            <Card.Body>
                <h2 className="text-center">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="name">
                         <Form.Label>Name</Form.Label>
                         <Form.Control type="Name" ref={nameRef} name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </Form.Group>
                    <Form.Group id="pincode">
                          <Form.Label>Pincode</Form.Label>
                          <Form.Control type="text" ref={pincodeRef} name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                    </Form.Group>
                    <Form.Group id="contact">
                          <Form.Label>Phone number</Form.Label>
                          <Form.Control type="text" ref={contactRef} name="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
                    </Form.Group>
                    <div key="inline-radio" className="mb-2 w-100">
                        <Form.Check inline label="Looking for help" name="group1" type="radio" id="help" />
                        <Form.Check inline label="Looking to Help" name="group1" type="radio" id="tohelp" checked />
                        
                    </div>
                    <Button className="w-100" type="Submit">
                            Submit
                    </Button>
                    
                </Form>
            </Card.Body>
         </Card>
         <CardDeck>
         <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Helpers available</h2>
                <div id="user-list">
                {helpers.map((helper) => (
                    <p>{helper.name}{helper.pin}</p>
          ))}
                </div>
            </Card.Body>
         </Card>
         <Card>
            <Card.Body>
                <h2 className="text-center mb-4">People looking for help</h2>
                <div id="user-list">
                {helpees.map((helpee) => (
                    <p>{helpee.name}{helpee.pin}</p>
                ))}
                </div>
            </Card.Body>
         </Card>
         </CardDeck>
         
         <div className="w-100 text-center mt-2">
                <Button variant = "link" onClick= { handleLogout}>Log Out</Button>
            </div>
        </>
    )
}
