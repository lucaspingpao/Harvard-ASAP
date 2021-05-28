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
const about = () => {
  console.log("about here")
  return (
    <main style={pageStyles}>
      <title>About</title>
      
      <NavBar/>

      <h1 style={headingStyles}>About</h1>

      <Box style={boxStyles}>
        <p>The Asian Students Arts Project (or ASAP for short!) is an organization and community at Harvard bringing together Pan-Asian artists of all disciplines, from visual arts and media to performing arts, music, creative writing, film, and more!</p>
        <br/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j6PZ2r0Cyco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br/>
        <p>Check out some of our latest projects <Link href="/projects">here</Link>! We are always welcome to new ideas for projects, events, and collaborations. Fill out the form below to submit an idea you would like to see happen!</p>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4RpbjvOlUFUyXGeSRQVExggYX7TgbDDuLqKBgHYzYXbHUkA/viewform?embedded=true" width="640" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </Box>
      
      <Footer/>
    </main>
  )
}

export default about
