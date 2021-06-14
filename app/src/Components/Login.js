import React from 'react'
import { Card, Form, Button, Alert, Media} from 'react-bootstrap'
import { useRef, useState } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import NavbarC from './Navbar.js'
import Landing from './Landing.js'


export default function Login() {
 
    

    return (
        <div>
            <NavbarC />
            <Landing />
            
        </div>
    )
}
