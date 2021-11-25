import React from 'react'

const footerStyle= {

    display:"flex",
    justifyContent:"center",
    backgroundColor:"#2c437d",
    color:"white",
    padding:"1rem",
    letterSpacing:".05rem",
    marginTop:"1rem"

}


const Footer = () => {

    const year =new Date().getFullYear();

    return (
        <footer style ={footerStyle}>
            <p>
                copyright &copy; {year},Made by CodeWeb.
            </p>
        </footer>
    )
}

export default Footer;
