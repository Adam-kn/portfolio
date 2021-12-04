import React from 'react';
import { Col1, Col2, Container, Progress, ProgressDone, Row, SkillsP, SkillsTitle, TextWrapper, TopLine, Wrapper } from '../Styles';

const Skills = () => {
    return (
        <>
            <Container lightBg={false} id="skills">
                <Wrapper>
                    <TopLine> Compétences </TopLine>
                    <Row>
                        <Col1>
                            <TextWrapper>
                                <SkillsP>
                                    <SkillsTitle> Python </SkillsTitle>
                                    <Progress>
                                        <ProgressDone  style={{width: "80%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> HTML </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "85%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> JavaScript </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "50%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> CSS </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "60%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> Anglais </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "50%"}}/>
                                    </Progress>
                                </SkillsP>
                            </TextWrapper>
                        </Col1>
                        <Col2>
                            <TextWrapper>
                                <SkillsP>
                                    <SkillsTitle> Django </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "70%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> React js </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "65%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> Tensorflow </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "50%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> Scikit-Learn </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "55%"}}/>
                                    </Progress>
                                </SkillsP>
                                <SkillsP>
                                    <SkillsTitle> Français </SkillsTitle>
                                    <Progress>
                                        <ProgressDone style={{width: "80%"}}/>
                                    </Progress>
                                </SkillsP>
                            </TextWrapper>
                        </Col2>
                    </Row>
                </Wrapper>
            </Container>
        </>
    );
};

export default Skills;