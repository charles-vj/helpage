import React from 'react'
import { Card, Form, Button, Alert} from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { useHistory } from 'react-router-dom'


export default function LoginModal() {
 
    const emailRef = useRef()
    const passwordRef = useRef()

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history= useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
    
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Log In failed")
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log in</h2>
                   
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label className="text-center">Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        
                        <Card.Text></Card.Text>
                        <Button disabled={loading} className="w-100" type="Submit" variant="danger">
                            Log in
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            
        </div>
    )
}
