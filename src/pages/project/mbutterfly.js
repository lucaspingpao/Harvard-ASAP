import * as React from "react"
import {Image, Box} from 'theme-ui'
import NavBar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import '../../styles/styles.css'
import MButterflyCast from '../../images/MButterflyCast.jpg'

// local styles

// markup
const MButterfly = () => {
  return (
    <main className="pageStyles">
      <title>M Butterfly</title>
      <NavBar/>
      <Box className="textBoxStyles">
        <h1 className="headingStyles">M Butterfly</h1>
        <h2>Fall 2019</h2>
        <p>M. Butterfly tells the story of a French diplomat posted in China, Rene Gallimard, who is brought to ruin and eventually convicted for espionage after a twenty-year affair with a Beijing Opera diva. The diva, citing her Chinese modesty, manages to never appear naked in front of Gallimard. Thus, not only had Gallimard failed to recognize that this lover was a spy; he’d also failed to recognize that “she” was in fact a he. The singer spies on Gallimard for the Chinese government, using Gallimard’s own fantasies of submissive oriental femininity to deceive and manipulate him.
Loosely based on the real-life relationship between a French diplomat and male Peking opera singer, David Henry Hwang’s Tony-winning drama is a deconstruction and critique of Puccini’s Madama Butterfly.</p>
        <Image style={{ width: "100%", maxWidth: "500px" }} src={MButterflyCast}/>
      </Box>
      <Footer/>
    </main>
  )
}

export default MButterfly
