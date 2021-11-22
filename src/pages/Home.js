import React from 'react';
import { Column, Container, ImgWrapper, Row, TextWrapper, Img } from '../GlobalStyles';
import Typical from 'react-typical';
import profile from '../imges/profile.jpg';

const Home = () => {
    return (
        <Container>
            <Row>
                <Column>
                    <TextWrapper>
                        <h2>
                            Salut, Je suis Adam KONAN votre freelance
                        </h2>
                        <Typical
                            steps={['Data Scientist', 3000, 'Développeur Django', 3000, "Développeur React JS", 3000]}
                            loop={Infinity}
                            wrapper="h2"/>
                    </TextWrapper>
                </Column>
                <Column>
                    <ImgWrapper>
                        <Img src={profile} alt=""></Img>
                    </ImgWrapper>
                </Column>
            </Row>
        </Container>
    );
};

export default Home;