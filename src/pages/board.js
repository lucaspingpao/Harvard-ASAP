import * as React from "react"
import {Box, Flex, Card, NavLink, Image, Text, Grid, Heading} from 'theme-ui'
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import '../styles/styles.css'
import KarinaCowperthwaite from "../images/KarinaCowperthwaite.jpeg"
import VincentPan from "../images/VincentPan.jpg"
import NikitaNair from "../images/NikitaNair.jpeg"
import LucasPao from "../images/LucasPao.jpg"
import SophieKim from "../images/SophieKim.jpeg"
import JuliaGrullon from "../images/JuliaGrullon.jpg"
import JuliaRiew from "../images/JuliaRiew.jpeg"

// local styles


// data
const boardInfos = [
  {
    position: "President",
    name: "Karina Cowperthwaite",
    year: "Junior",
    art: "Theater",
    photo: KarinaCowperthwaite
  },
  {
    position: "Vice President",
    name: "Vincent Pan",
    year: "Senior",
    art: "Visual Arts, Music, Theater, Photography, Creative Writing",
    photo: VincentPan
  },
  {
    position: "Vice President",
    name: "Nikita Nair",
    year: "Sophomore",
    art: "Music, Theater, Dance",
    photo: NikitaNair
  },
  {
    position: "Tech & Media Chair",
    name: "Lucas Pao",
    year: "Junior",
    art: "Music",
    photo: LucasPao
  },
  {
    position: "Sophomore Rep",
    name: "Sophie Kim",
    year: "Sophomore",
    art: "Theater, Creative Writing",
    photo: SophieKim
  },
  {
    position: "Sophomore Rep",
    name: "Julia Grullon",
    year: "Sophomore",
    art: "Theater",
    photo: JuliaGrullon
  },
  {
    position: "President Emeritus",
    name: "Julia Riew",
    year: "Senior",
    art: "Music, Theater",
    photo: JuliaRiew
  }
]

const alumniInfos = [
  
]

// markup
const events = () => {

  const boardCards = boardInfos.map((member) => 
    <Card className="boardcardStyles">
      <Image src={member.photo} style={{borderRadius: "10px", width: 250, height: 250, objectFit: "cover"}}/>
      <Box p={3}>
        <Heading className="titleFont">{member.position}</Heading>
        <Heading className="titleFont">{member.name}</Heading>
        <Heading className="descriptionFont"><b>Year:</b> {member.year}</Heading>
        <Heading className="descriptionFont"><b>Art:</b> {member.art}</Heading>
      </Box>
    </Card>
  )

  const alumniCards = alumniInfos.map((member) => 
    <Card>
      <Image src={member.photo} style={{borderRadius: "10px"}}/>
      <Box p={3}>
      <Heading className="titleFont">{member.position}</Heading>
        <Heading className="titleFont">{member.name}</Heading>
        <br/><Text className="descriptionFont">Year: {member.year}</Text>
        <br/><Text className="descriptionFont">Art: {member.art}</Text>
      </Box>
    </Card>
  )

  return (
    <main className="pageStyles">
      <title>Board</title>
      <NavBar/>
      <h1 className="headingStyles">Board</h1>
      <h2 style={{textAlign: "center"}}>Current Board: 2021-2022</h2>
      <Box className="cardBoxStyles">{boardCards}</Box>
      <Footer/>
    </main>
  )
}

export default events
