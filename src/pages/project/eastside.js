import * as React from "react"
import {Image, Box} from 'theme-ui'
import NavBar from '../../components/navbar.js'
import Footer from '../../components/footer.js'
import '../../styles/styles.css'
import Eastsidefull from '../../images/Eastsidefull.jpg'

// local styles
const videoContainerStyle = {
  position: "relative",
  overflow: "hidden",
  width: "100%",
  paddingTop: "56.25%"
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
const Eastside = () => {
  return (
    <main className="pageStyles">
      <title>Eastside</title>
      <NavBar/>
      <Box className="textBoxStyles">
        <h1 className="headingStyles">Eastside</h1>
        <h2>Spring 2019</h2>
        <div style={videoContainerStyle}>
          <iframe style={itemStyle} src="https://www.youtube.com/embed/KjDRYAJCg4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <Image style={{ width: "100%", maxWidth: "500px" }} src={Eastsidefull}/>
      </Box>
      <Footer/>
    </main>
  )
}

export default Eastside
