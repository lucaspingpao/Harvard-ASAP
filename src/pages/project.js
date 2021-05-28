import * as React from "react"
import {Box, Flex, Card, NavLink, Image, Text, Grid, Heading} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

import Twisted from "../images/twisted.jpg"

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}

const headingStyles = {
  fontSize: "72px",
  textAlign: "center"
}

const boxStyles = {
  paddingLeft: "10%",
  paddingRight: "10%",
  display: "flex",
  justifyContent: 'space-evenly'
}

const cardStyles = {
  maxWidth: 300,
  boxShadow: "7px 7px 10px gray",
  padding: "20px",
  border: "1.5px solid black",
  borderRadius: "10px"
}

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
    <Card style={cardStyles}>
      <Image src={project.photo}/>
      <Box p={3}>
        <Heading variant='styles.h4'>{project.title}</Heading>
        <Text>{project.date}</Text>
      </Box>
    </Card>
  )

  return (
    <main style={pageStyles}>
      <title>Projects</title>
      <NavBar/>
      <h1 style={headingStyles}>Projects</h1>
      <Box style={boxStyles}>{projectCards}</Box>
      <Footer/>
    </main>
  )
}

export default projects