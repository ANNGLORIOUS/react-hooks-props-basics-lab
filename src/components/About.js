// About.js
import React from 'react';
import Links from './Links';

const About = (props) => {
  return (
    <div id='about'>
      {props.bio && <p>{props.bio}</p>}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
};

export default About;
