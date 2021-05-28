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
  padding: "20px"
}

// data
const boardInfos = [
  {
    position: "Tech & Media Chair",
    name: "Lucas Pao",
    year: "Junior",
    art: "Music",
    funFact: "likes to shred",
    photo: Twisted
  },
  {
    position: "Royal Vizier",
    name: "Jafar",
    year: "Grad student",
    art: "Art",
    funFact: "is sad right now uwu",
    photo: Twisted
  }
]

// markup
const events = () => {

  const boardCards = boardInfos.map((member) => 
    <Card style={cardStyles}>
      <Image src={member.photo} style={{borderRadius: "10px"}}/>
      <Box p={3}>
      <Heading variant='styles.h3'>{member.position}</Heading>
        <Heading variant='styles.h4'>{member.name}</Heading>
        <br/><Text>Year: {member.year}</Text>
        <br/><Text>Favorite Art: {member.art}</Text>
        <br/><Text>Fun Fact: {member.funFact}</Text>
      </Box>
    </Card>
  )

  return (
    <main style={pageStyles}>
      <title>Board</title>
      <NavBar/>
      <h1 style={headingStyles}>Board</h1>
      
      <Box style={boxStyles}><h2>Current Board: 2021-2022</h2></Box>
      <Box style={boxStyles}>{boardCards}</Box>
      <Box style={boxStyles}><h2>Alumni: 2021-2022</h2></Box>
      <Box style={boxStyles}>{boardCards}</Box>
      <Footer/>
    </main>
  )
}

export default events