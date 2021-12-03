import React from 'react';
import { Col1, Col2, Container, LinkC, Row, Subtitle, TextWrapper, Title, TitleWrap, TopLine, Wrapper } from '../Styles';

const Certifications = () => {
    return (
        <>
            <Container lightBg={false} id="certifications">
                <Wrapper>
                    <TopLine> Certifications </TopLine>
                    <Row>
                        <Col1>
                            <TextWrapper>
                                <TitleWrap>
                                    <div>
                                        <Title>
                                            Certification de Data Science Methodology
                                        </Title>
                                        <Subtitle>
                                            Avril 2021 sur Coursera de IBM <br />
                                            <LinkC href="https://www.coursera.org/account/accomplishments/certificate/43J9FNZUDE4U">
                                                Lien de la certification
                                            </LinkC>
                                        </Subtitle>
                                    </div>
                                    <div>
                                        <Title>
                                            Certification de Python for Data Science, AI & Development
                                        </Title>
                                        <Subtitle>
                                            Avril 2021 sur Coursera de IBM <br />
                                            <LinkC href="https://www.coursera.org/account/accomplishments/certificate/LGVTTR7MVJGB">
                                                Lien de la certification
                                            </LinkC>
                                        </Subtitle>
                                    </div>
                                    <div>
                                        <Title>
                                            Certiﬁcation de Spécialisation en Mathematics for machine Learning
                                        </Title>
                                        <Subtitle>
                                            Mars 2021 Coursera Collège de London <br />
                                            <LinkC href="https://www.coursera.org/account/accomplishments/specialization/certificate/ZYND27PT7QWL">
                                                Lien de la certification
                                            </LinkC>
                                        </Subtitle>
                                    </div>
                                </TitleWrap>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <TextWrapper>
                                <TitleWrap>
                                    <div>
                                        <Title>
                                            Certiﬁcation de Développement de site web avec le Framework Django
                                        </Title>
                                        <Subtitle>
                                            Juillet 2020 Openclassrooms <br />
                                            <LinkC href="https://openclassrooms.com/fr/course-certificates/3295184181">
                                                Lien de la certification
                                            </LinkC>
                                        </Subtitle>
                                    </div>
                                    <div>
                                        <Title>
                                            Certiﬁcation de Spécialisation en Machine Learning
                                        </Title>
                                        <Subtitle>
                                            Juin 2020 Coursera University of Washington <br />
                                            <LinkC href="https://www.coursera.org/account/accomplishments/specialization/certificate/KP6NTW5E47CD">
                                                Lien de la certification
                                            </LinkC>
                                        </Subtitle>
                                    </div>
                                    <div>
                                        <Title>
                                            Certiﬁcation de Spécialisation en Deep Learning
                                        </Title>
                                        <Subtitle>
                                            Juin 2020 Coursera  <br />
                                            <LinkC href="https://www.coursera.org/account/accomplishments/specialization/certificate/SGC589JJUTTJ">
                                                Lien de la certification
                                            </LinkC>
                                        </Subtitle>
                                    </div>
                                </TitleWrap>
                            </TextWrapper>
                        </Col2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    );
};

export default Certifications;