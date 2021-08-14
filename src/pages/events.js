import * as React from "react"
import {Box, Link, Card, Image, Text, Grid, Heading} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import '../styles/styles.css'
import Sushi from "../images/Sushi.jpeg"
import Wave from "../images/Wave.png"

// local styles

// data
const projectInfos = [
  {
    title: "Sushi & Samosas: Open Mic Night",
    date: "September 2019",
    photo: Sushi,
    link: 'sushisamosas'
  },
  {
    title: "Wave Launch Party: Open Mic Night",
    date: "February 2020",
    photo: Wave,
    link: 'waveparty'
  }
]

// markup
const events = () => {

  const projectCards = projectInfos.map((project) => 
    <Card className="cardStyles">
      <Link href={project.link} style={{textDecoration: "none", color: "inherit"}}>
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
      <title>Events</title>
      <NavBar/>
      <h1 className="headingStyles">Events</h1>
      <Box className="cardBoxStyles">{projectCards}</Box>
      <Footer/>
    </main>
  )
}

export default events