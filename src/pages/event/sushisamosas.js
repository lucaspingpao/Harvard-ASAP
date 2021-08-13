import * as React from "react"
import {Image, Box} from 'theme-ui'
import NavBar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import '../../styles/styles.css'
import Sushi from '../../images/Sushi.jpeg'

// local styles

// markup
const SushiSamosas = () => {
  return (
    <main className="pageStyles">
      <title>Sushi & Samosas</title>
      <NavBar/>
      <Box className="textBoxStyles">
        <h1 className="headingStyles">Sushi and Samosas</h1>
        <h2>September 2019</h2>
        <p>Our first open mic night of the year with cuisine from all Asian cultures, including some classic sushi and samosas!</p>
        <Image style={{ width: "100%", maxWidth: "500px" }} src={Sushi}/>
      </Box>
      <Footer/>
    </main>
  )
}

export default SushiSamosas
