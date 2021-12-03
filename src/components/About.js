import React from 'react';
import { Container, Row, Wrapper, Col1, Col2, Img, ImgWrapper, Subtitle, TextWrapper, TopLine } from '../Styles';
import about from '../imges/about.svg'
const About = () => {
    return (
        <>
           <Container lightBg={false} id='about'>
               <Wrapper>
                   <TopLine> À propos</TopLine>
                   <Row imgStart={false}>
                       <Col1>
                          <TextWrapper>
                              <Subtitle darkText={false}>
                                Avant, pendant et après mes études supérieures en Informique 
                                j'ai fait de la programmation ma passion préférée. Le premier langage utilisé est
                                le python dans le but de faire du Machine Learning (Apprentissage Automatique).
                                J'ai ensuite fait du développement web en utilisant le Framework Django et React JS.
                                Et en fin du web pentesting me permetant de trouver des failles au niveau des sites qu'on me soumet.
                              </Subtitle>
                              <Subtitle darkText={false}>
                                Je suis à présent disponible pour des missions Freelances ou avoir un poste stable en 
                                tant que développeur Web React js Django, Ingénieur Machine Learning ou Web pentester dans une entréprise
                                me permettant d'être plus productif et bien rémunéré.
                              </Subtitle>
                          </TextWrapper>
                       </Col1>
                       <Col2>
                          <ImgWrapper>
                             <Img src={about} alt=""/>
                          </ImgWrapper>
                       </Col2>
                   </Row>
               </Wrapper>
           </Container> 
        </>
    );
};

export default About;