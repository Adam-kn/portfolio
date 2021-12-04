import React from 'react';
import { Card, ProjectContainer, ProjectIcon, ProjectTitle, ProjectWrp, ProjectP, TopLine } from '../Styles';
import reco from '../imges/reco.png';
import Synth from '../imges/Synth.png';
import Geo from '../imges/Geo.png';
import portfolio from '../imges/portfolio.png';
import webpentest from '../imges/webpentest.png';

const Projects = () => {
    return (
        <>
            <ProjectContainer lightBg={false} id='projects'>
                <TopLine>Projets</TopLine>
                <ProjectWrp>
                    <Card>
                        <ProjectIcon src={reco}/>
                        <ProjectTitle> Reconnaissance Faciale </ProjectTitle>
                        <ProjectP> 
                            L'objectif c'est de se poser devant la webcame du laptop et voir si le programme vous reconnait ou pas.
                        </ProjectP>
                        <ProjectP> Stack : Python, OpenCV </ProjectP> 
                    </Card>
                    <Card>
                        <ProjectIcon src={Synth}/>
                        <ProjectTitle> Synthèse Vocale </ProjectTitle>
                        <ProjectP> 
                            L'objectif c'est d'écrire une phrase et cela produit une note vocale qui correspond à la phrase écrite.
                        </ProjectP>
                        <ProjectP>Stack : Python, Tensorflow, Numpy ...</ProjectP>
                    </Card>
                    <Card>
                        <ProjectIcon src={Geo}/>
                        <ProjectTitle> Geolocalisation </ProjectTitle>
                        <ProjectP>
                            Le but c'est d'enregistré la position d'un user dans l'admin Django et de le faire apparaître au niveau front react.
                        </ProjectP>
                        <ProjectP> Stack: Django, Djangorestframework, React Js, Leaflet ... </ProjectP>
                    </Card>
                    <Card>
                        <ProjectIcon src={portfolio}/>
                        <ProjectTitle> Portfolio </ProjectTitle>
                        <ProjectP> Stack: React js, Styled-components, React-scroll ... </ProjectP>
                    </Card>
                    <Card>
                        <ProjectIcon src={webpentest}/>
                        <ProjectTitle> Webpentest </ProjectTitle>
                        <ProjectP>
                            Dans le cadre de la sécurité informatique, le but ici c'est de d'observer la platform de simulation afin de trouver des failles de plusieurs types.
                        </ProjectP>
                        <ProjectP>Stack: BurpSuite</ProjectP>
                    </Card>
                </ProjectWrp>
            </ProjectContainer>
        </>
    );
};

export default Projects;