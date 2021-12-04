import React from 'react';
import { CloseIcon, Icon, SideBarContainer, SideBarLink, SideBarMenu, SideBarWrapper } from '../Styles';

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}> À propos </SideBarLink>
                    <SideBarLink to="certifications" onClick={toggle}> Certifications </SideBarLink>
                    <SideBarLink to="projects" onClick={toggle}> Projets </SideBarLink>
                    <SideBarLink to="skills" onClick={toggle}> Compétences </SideBarLink>
                    <SideBarLink to="contacts" onClick={toggle}> Conctacts </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
    );
};

export default SideBar;