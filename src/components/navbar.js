import * as React from "react"
import {Link, Flex, NavLink, Image} from 'theme-ui'
import Title from '../images/title.png'
import Name from '../images/name.png'

// styles
const pageStyles = {
  textAlign: "center"
}

const logoStyles = {
  width: "60px",
  height: "20px",
  margin: "6px 5px 0px 5px"
}

const bannerStyles = {
  width: "30%",
  textAlign: "center"
}



// markup
const NavBar = () => {
  return (
    <div style={pageStyles}>
      <Image style={bannerStyles} src={Title}></Image>
      <hr/>
      <Flex as="nav">
      <Link href="/"><Image src={Name} style={logoStyles}></Image></Link>
        <NavLink href="/" p={2}>Home</NavLink>
        <NavLink href="/about" p={2}>About</NavLink>
        <NavLink href="/project" p={2}>Projects</NavLink>
        <NavLink href="/events" p={2}>Events</NavLink>
        <NavLink href="/board" p={2}>Board</NavLink>
        <NavLink href="/contact" p={2}>Contact</NavLink>
      </Flex>
      <hr/>
    </div>
  )
}

export default NavBar
