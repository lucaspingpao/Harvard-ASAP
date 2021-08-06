import * as React from "react"
import {Box, Flex, Link, NavLink} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import * as Styles from '../styles/styles.js'

// local styles

const videoContainerStyle = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingTop: "56.25%"
}

const formContainerStyle = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingTop: "70%"
}

const itemStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
}

// markup
const about = () => {
  return (
    <main style={Styles.pageStyles}>
      <title>About</title>
      
      <NavBar/>

      <h1 style={Styles.headingStyles}>About</h1>

      <Box style={Styles.textBoxStyles}>
        <p>The Asian Students Arts Project (or ASAP for short!) is an organization and community at Harvard bringing together Pan-Asian artists of all disciplines, from visual arts and media to performing arts, music, creative writing, film, and more!</p>
        <br/>
        <div style={videoContainerStyle}>
          <iframe style={itemStyle} src="https://www.youtube.com/embed/j6PZ2r0Cyco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <br/>
        <p>Check out some of our latest projects <Link href="/project">here</Link>! We are always welcome to new ideas for projects, events, and collaborations. Fill out the form below to submit an idea you would like to see happen!</p>
        <div style={formContainerStyle}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4RpbjvOlUFUyXGeSRQVExggYX7TgbDDuLqKBgHYzYXbHUkA/viewform?embedded=true" style={itemStyle} frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
      </Box>
      
      <Footer/>
    </main>
  )
}

export default about
