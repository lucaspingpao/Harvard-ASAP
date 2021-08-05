import * as React from "react"
import {Link, Flex, NavLink, Image} from 'theme-ui'
import Icon from '../images/icon.png'

// local styles
const footerStyles = {
  textAlign: "center",
  color: "gray",
  padding: 50
}

const iconStyles = {
  width: "20px",
  height: "20px",
  margin: "0px 0px -4px 8px"
}

const hrStyles = {
  opacity: 0.5,
  width: "75%"
}

// markup
const Footer = () => {
  return (
    <div style={footerStyles}>
    <hr style={hrStyles}/><br/>

    <br/>Asian Students Arts Project
    <br/>© 2018 - 2021
    <br/>Built with GatsbyJS
    <Link href="https://www.gatsbyjs.com">
      <Image style={iconStyles} src={Icon}/>
    </Link>
      
    </div>
  )
}

export default Footer
