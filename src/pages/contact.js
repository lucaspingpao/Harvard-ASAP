import * as React from "react"
import {Box, Flex, Link, NavLink} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import * as Styles from '../styles/styles.js'

// styles
const boxStyles = {
  paddingLeft: "20%",
  paddingRight: "20%",
  textAlign: "center"
}

// markup
const contact = () => {
  console.log("about here")
  return (
    <main style={Styles.pageStyles}>
      <title>Contact</title>
      
      <NavBar/>

      <h1 style={Styles.headingStyles}>Contact</h1>

      <Box style={boxStyles}>
        <p>Reach us at <Link href="mailto: asianstudentartsproject@gmail.com">asianstudentartsproject@gmail.com </Link>
        or check out some of our latest projects <Link href="/projects">here</Link>! We are always welcome to new ideas for projects, events, and collaborations.</p>
        </Box>
      
      <Footer/>
    </main>
  )
}

export default contact
