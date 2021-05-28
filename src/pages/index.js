import * as React from "react"
import {Image} from 'theme-ui'
import Welcome from '../images/welcome.png'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

// styles
const pageStyles = {
  color: "#232129",
  textAlign: "center",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  fontSize: "72px",
  textAlign: "center"
}

const imageStyles = {
  width: "50%",
  textAlign: "center"
}

// markup
const IndexPage = () => {
  console.log("index here")
  return (
    <main style={pageStyles}>
      <title>Home Page</title>

      <NavBar/>
      <h1 style={headingStyles}>Welcome to ASAP!</h1>
      <Image style={imageStyles} src={Welcome}/>
      <Footer/>

    </main>
  )
}

export default IndexPage
