import React from 'react';
import { AboutContainer, AboutRow, AboutWrapper, Col1, Col2, Img, ImgWrapper, Subtitle, TextWrapper, TopLine } from '../Styles';
import about from '../imges/about.svg'
const About = ({lightBg , imgStart, id, darkText}) => {
    return (
        <>
           <AboutContainer lightBg={false} id='À propos'>
               <AboutWrapper>
                   <AboutRow imgStart={false}>
                       <Col1>
                          <TextWrapper>
                              <TopLine> À propos</TopLine>
                              <Subtitle darkText={false}> Etant etudiant</Subtitle>
                          </TextWrapper>
                       </Col1>
                       <Col2>
                          <ImgWrapper>
                             <Img src={about} alt=""/>
                          </ImgWrapper>
                       </Col2>
                   </AboutRow>
               </AboutWrapper>
           </AboutContainer> 
        </>
    );
};

export default About;