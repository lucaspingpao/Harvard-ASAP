import * as React from "react"
import {Box, Flex, Link, Button, Label, Input, Form} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import '../styles/styles.css'
import EmailForm from '../components/emailform.js'

// styles
const boxStyles = {
  paddingLeft: "20%",
  paddingRight: "20%",
  textAlign: "center"
}

// markup
const contact = () => {
  return (
    <main className="pageStyles">
      <title>Contact</title>
      
      <NavBar/>

      <h1 className="headingStyles">Contact</h1>

      <Box style={boxStyles}>
        <p>
          Reach us at <Link href="mailto: asianstudentartsproject@gmail.com">asianstudentartsproject@gmail.com </Link>
          or check out some of our latest projects <Link href="/projects">here</Link>!
          We are always welcome to new ideas for projects, events, and collaborations.
          Fill out the form below to sign up for our mailing list to receive regular updates on ASAP's latest projects and events!
        </p>
        <EmailForm/>
      </Box>
      
      <Footer/>
    </main>
  )
}

export default contact