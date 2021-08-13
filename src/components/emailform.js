import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {Box, Input, Button} from 'theme-ui'
import '../styles/emailform.css'

const EmailForm = () => {
const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email, {
        FNAME: firstname,
        LNAME: lastname
    })
    .then((data) => {
        alert(data.result);
    })
};

const handleFirstnameChange = (event) => {
    setFirstname(event.currentTarget.value);
};

const handleLastnameChange = (event) => {
    setLastname(event.currentTarget.value);
};

const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
};

return (
    <div className="formBox">
        <form onSubmit={handleSubmit}>
        <h2 style={{margin: "25px"}}>Subscribe to our Email list!</h2>
        <Box>
            <Input
                sx={{marginLeft: "10%", marginRight: "10%", width: "80%"}}
                placeholder="First name"
                name="firstname"
                onChange={handleFirstnameChange}
            />
            <Input
                sx={{marginLeft: "10%", marginRight: "10%", width: "80%"}}
                placeholder="Last name"
                name="email"
                onChange={handleLastnameChange}
            />
            <Input
                sx={{marginLeft: "10%", marginRight: "10%", width: "80%"}}
                placeholder="Email address"
                name="email"
                onChange={handleEmailChange}
            />
            
        </Box>
        <br/>
        <Button sx={{backgroundColor: "#307cfc"}} type="submit">Subscribe</Button>
        </form>
    </div>
  );
};

export default EmailForm