import * as React from "react"
import {Link, Flex, NavLink, Image} from 'theme-ui'
import Icon from '../images/icon.png'
import Instagram from '../images/Instagram.png'
import Facebook from '../images/Facebook.jpeg'

// local styles
const footerStyles = {
  textAlign: "center",
  color: "gray",
  padding: 50
}

const iconStyles = {
  width: "15px",
  height: "15px",
  margin: "0px 0px -2px 6px"
}

const socialmediaStyles = {
  width: "25px",
  height: "25px",
  margin: "5px 10px 0px 10px"
}


const hrStyles = {
  opacity: 0.5,
  width: "75%",
  marginTop: 20,
  marginBottom: 20
}

// markup
const Footer = () => {
  return (
    <div style={footerStyles}>
      <hr style={hrStyles}/><br/>

      <br/>Asian Student Arts Project
      <br/>© 2018 - 2021
      <br/>Built with GatsbyJS
      <Link href="https://www.gatsbyjs.com">
        <Image style={iconStyles} src={Icon}/>
      </Link>

      <br/><br/>Sign up for our mailing list <Link href='/contact'>here</Link>!
      <br/>Follow us on social media!<br/>
      <Link href="https://www.instagram.com/harvardasap/">
        <Image style={socialmediaStyles} src={Instagram}/>
      </Link>
      <Link href="https://www.facebook.com/HarvardASAP/">
        <Image style={socialmediaStyles} src={Facebook}/>
      </Link>

    </div>
  )
}

export default Footer
