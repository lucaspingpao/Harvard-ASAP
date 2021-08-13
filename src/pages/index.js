import * as React from "react"
import {Image} from 'theme-ui'
import Welcome from '../images/welcome.png'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import {Box, Flex, Link, NavLink} from 'theme-ui'
import * as Styles from '../styles/styles.js'
import '../styles/styles.css'

// local styles
const headingStyles = {
  fontSize: "60px",
  textAlign: "center"
}

const imageStyles = {
  width: "50%",
  textAlign: "center"
}

// markup
const IndexPage = () => {
  return (
    <main className="pageStyles">
      <title>Home Page</title>

      <NavBar/>
      <Box className="textBoxStyles">
      <h1 className="headingStyles">Welcome to ASAP!</h1>
        <Image style={{ width: "100%", maxWidth: "500px" }} src={Welcome}/>
      </Box>
      <Footer/>

    </main>
  )
}

export default IndexPage
