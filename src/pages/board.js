import * as React from "react"
import {Box, Flex, Card, NavLink, Image, Text, Grid, Heading} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import * as Styles from './styles.js'
import Twisted from "../images/twisted.jpg"

// local styles
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
    funFact: "has a pet parrot",
    photo: Twisted
  }
]

// markup
const events = () => {

  const boardCards = boardInfos.map((member) => 
    <Card style={cardStyles}>
      <Image src={member.photo} style={{borderRadius: "10px"}}/>
      <Box p={3}>
      <Heading variant='styles.h3' style={{fontSize: "2vw"}}>{member.position}</Heading>
        <Heading variant='styles.h4' style={{fontSize: "2vw"}}>{member.name}</Heading>
        <br/><Text style={{fontSize: "1.5vw"}}>Year: {member.year}</Text>
        <br/><Text style={{fontSize: "1.5vw"}}>Favorite Art: {member.art}</Text>
        <br/><Text style={{fontSize: "1.5vw"}}>Fun Fact: {member.funFact}</Text>
      </Box>
    </Card>
  )

  return (
    <main style={Styles.pageStyles}>
      <title>Board</title>
      <NavBar/>
      <h1 style={Styles.headingStyles}>Board</h1>
      
      <Box style={Styles.cardBoxStyles}><h2>Current Board: 2021-2022</h2></Box>
      <Box style={Styles.cardBoxStyles}>{boardCards}</Box>
      <Box style={Styles.cardBoxStyles}><h2>Alumni: 2021-2022</h2></Box>
      <Box style={Styles.cardBoxStyles}>{boardCards}</Box>
      <Footer/>
    </main>
  )
}

export default events