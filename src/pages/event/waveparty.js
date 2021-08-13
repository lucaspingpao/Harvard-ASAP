import * as React from "react"
import {Image, Box, Link} from 'theme-ui'
import NavBar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import '../../styles/styles.css'
import WaveParty from '../../images/WaveParty.jpg'

// local styles

// markup
const WaveParty = () => {
  return (
    <main className="pageStyles">
      <title>Wave Launch Party</title>
      <NavBar/>
      <Box className="textBoxStyles">
        <h1 className="headingStyles">Wave Launch Party</h1>
        <h2>February 2020</h2>
        <p>The Wave is Harvard's Asian literary & arts magazine. Check out more of their work </p><Link href="https://www.waveartsmagazine.com">here</Link>!
        <Image style={{ width: "100%", maxWidth: "500px" }} src={WaveParty}/>
      </Box>
      <Footer/>
    </main>
  )
}

export default WaveParty
