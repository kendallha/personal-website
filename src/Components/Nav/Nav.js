import React from 'react';
import { Navlink } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <Navlink>About</Navlink>
      <Navlink>Portfolio</Navlink>
      <Navlink>Resume</Navlink>
      <Navlink>Blog</Navlink>
      <Navlink>Contact</Navlink>
    </nav>
  )
}