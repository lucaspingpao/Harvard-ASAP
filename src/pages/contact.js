import * as React from "react"
import {Box, Flex, Link, NavLink, Label, Input} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import * as Styles from '../styles/styles.js'
import addToMailchimp from 'gatsby-plugin-mailchimp'

// styles
const boxStyles = {
  paddingLeft: "20%",
  paddingRight: "20%",
  textAlign: "center"
}

// Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(email, listFields) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  // 2. via `async/await`
  _handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addToMailchimp(email, listFields)
    // I recommend setting `result` to React state
    // but you can do whatever you want
  }

// markup
const contact = () => {
  console.log("updated")
  return (
    <main style={Styles.pageStyles}>
      <title>Contact</title>
      
      <NavBar/>

      <h1 style={Styles.headingStyles}>Contact</h1>

      <Box style={boxStyles}>
        <p>
          Reach us at <Link href="mailto: asianstudentartsproject@gmail.com">asianstudentartsproject@gmail.com </Link>
          or check out some of our latest projects <Link href="/projects">here</Link>!
          We are always welcome to new ideas for projects, events, and collaborations.
          Fill out the form below to sign up for our mailing list to receive regular updates on ASAP's latest projects and events!
        </p>
        <Box as="form" onSubmit={this._handleSubmit(email, {listFields})}>
          <Flex>
            <Label htmlFor="firstname">First Name</Label>
            <Input name="firstname" id="firstname" mb={3}/>
            <Label htmlFor="lastname">Last Name</Label>
            <Input name="lastname" id="lastname" mb={3}/>
          </Flex>
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" mb={3}/>
          <Button>Submit</Button>
        </Box>
      </Box>
      
      <Footer/>
    </main>
  )
}

export default contact
