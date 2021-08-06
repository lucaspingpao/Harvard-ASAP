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
    title: "Twisted",
    date: "Spring 2020",
    photo: Twisted
  },
  {
    title: "Eastside",
    date: "Spring 2019",
    photo: Twisted
  }
]

// markup
const projects = () => {

  const projectCards = projectInfos.map((project) => 
    <Card style={Styles.cardStyles}>
      <Image src={project.photo}/>
      <Box p={3}>
        <Heading variant='styles.h4'>{project.title}</Heading>
        <Text>{project.date}</Text>
      </Box>
    </Card>
  )

  return (
    <main style={Styles.pageStyles}>
      <title>Projects</title>
      <NavBar/>
      <h1 style={Styles.headingStyles}>Projects</h1>
      <Box style={Styles.cardBoxStyles}>{projectCards}</Box>
      <Footer/>
    </main>
  )
}

export default projects