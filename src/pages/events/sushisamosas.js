import * as React from "react"
import {Image, Box} from 'theme-ui'
import NavBar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import '../../styles/styles.css'
import TwistedCast from '../../images/TwistedCast.jpg'

// local styles

// markup
const SushiSamosas = () => {
  return (
    <main className="pageStyles">
      <title>Sushi & Samosas</title>
      <NavBar/>
      <Box className="textBoxStyles">
        <h1 className="headingStyles">Twisted</h1>
        <h2>September 2019</h2>
        <p>Twisted is a musical parody of the famous Disney show Aladdin, but told from the point of view of Ja'far, the Royal Vizier. Unforutnately due to the pandemic, our show was cut early, but here is one final picture of our cast rehearsing for the last time.</p>
        <Image style={{ width: "100%", maxWidth: "500px" }} src={TwistedCast}/>
      </Box>
      <Footer/>
    </main>
  )
}

export default SushiSamosas
