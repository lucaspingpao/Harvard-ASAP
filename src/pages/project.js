import * as React from "react"
import {Box, Link, Card, Image, Text, Grid, Heading} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import '../styles/styles.css'
import Twisted from "../images/twisted.jpg"
import MButterfly from "../images/MButterfly.jpg"
import Eastside from "../images/Eastside.jpg"

// local styles

// data
const projectInfos = [
  {
    title: "Twisted",
    date: "Spring 2020",
    photo: Twisted,
    link: 'twisted'
  },
  {
    title: "M Butterfly",
    date: "Fall 2019",
    photo: MButterfly,
    link: 'mbutterfly'
  },
  {
    title: "Eastside",
    date: "Spring 2019",
    photo: Eastside,
    link: 'eastside'
  }
]

// markup
const projects = () => {

  const projectCards = projectInfos.map((project) => 
    <Card className="cardStyles">
      <Link href={"project/"+project.link} style={{textDecoration: "none", color: "inherit"}}>
        <Image src={project.photo}/>
        <Box p={3}>
          <Heading className="titleFont">{project.title}</Heading>
          <Text className="descriptionFont">{project.date}</Text>
        </Box>
      </Link>
    </Card>
  )

  return (
    <main className="pageStyles">
      <title>Projects</title>
      <NavBar/>
      <h1 className="headingStyles">Projects</h1>
      <Box className="cardBoxStyles">{projectCards}</Box>
      <Footer/>
    </main>
  )
}

export default projects