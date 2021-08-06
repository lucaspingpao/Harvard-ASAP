import * as React from "react"
import {Box, Flex, Card, NavLink, Image, Text, Grid, Heading} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import * as Styles from '../styles/styles.js'
import Twisted from "../images/twisted.jpg"

// local styles

// data
const projectInfos = [
  {
    title: "Sushi & Samosas: Open Mic Night",
    date: "February 2020",
    photo: Twisted
  },
  {
    title: "Wave Launch Party: Open Mic Night",
    date: "Spring 2019",
    photo: Twisted
  }
]

// markup
const events = () => {

  const projectCards = projectInfos.map((project) => 
    <Card style={Styles.cardStyles}>
      <Image src={project.photo}/>
      <Box p={3}>
        <Heading variant='styles.h4' style={{fontSize: "2vw"}}>{project.title}</Heading>
        <Text style={{fontSize: "1.5vw"}}>{project.date}</Text>
      </Box>
    </Card>
  )

  return (
    <main style={Styles.pageStyles}>
      <title>Events</title>
      <NavBar/>
      <h1 style={Styles.headingStyles}>Events</h1>
      <Box style={Styles.cardBoxStyles}>{projectCards}</Box>
      <Footer/>
    </main>
  )
}

export default events