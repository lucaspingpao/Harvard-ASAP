import * as React from "react"
import {Box, Flex, Link, NavLink} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Button
} from 'theme-ui'

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  fontSize: "72px",
  textAlign: "center"
}

const boxStyles = {
  paddingLeft: "20%",
  paddingRight: "20%",
  textAlign: "center"
}

// markup
const contact = () => {
  console.log("about here")
  return (
    <main style={pageStyles}>
      <title>Contact</title>
      
      <NavBar/>

      <h1 style={headingStyles}>Contact</h1>

      <Box style={boxStyles}>
        <p>Reach us at <Link href="mailto: asianstudentartsproject@gmail.com">asianstudentartsproject@gmail.com </Link>
        or check out some of our latest projects <Link href="/projects">here</Link>! We are always welcome to new ideas for projects, events, and collaborations. Fill out the form below to submit an idea you would like to see happen!</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4RpbjvOlUFUyXGeSRQVExggYX7TgbDDuLqKBgHYzYXbHUkA/viewform?embedded=true" width="640" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Box>
      
      <Footer/>
    </main>
  )
}

export default contact
