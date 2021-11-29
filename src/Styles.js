import styled from "styled-components";
import { NavLink as LinkR } from "react-router-dom";
import { Link as LinkS} from 'react-scroll';
import {FaTimes} from 'react-icons/fa';


export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  display: grid;
  top: 0;
  background-color: #0d0d0d;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;



export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;


export const Icon = styled.div`
 position: absolute;
 background-color: transparent;
 cursor: pointer;
 top: 1.2rem;
 right: 1.5rem;
 font-size: 2rem;
 outline: none;
`;


export const Nav = styled.nav`
  background-color: #142F43;
  height: 80px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: sticky;
  top:0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;


export const SideBarWrapper = styled.div`
  color: #fff;
`;


export const SideBarMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(6, 80px);
   text-align:center;

   @media screen and (max-width: 480px) {
     grid-template-rows: repeat(6, 60px);
   }
`;

export const SideBarLink = styled(LinkS)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf72;
    transition: 0.2s ease-in-out;
  }
`;


export const NavContainer = styled.div`
 display: flex;
 padding: 0 24px;
 justify-content: space-between;
 z-index: 1;
 width: 100%;
 max-width: 1100px;
`;


export const NavLogo = styled(LinkR)`
 color: #fff;
 display: flex;
 text-decoration: none;
 justify-self: flex-start;
 margin-left: 24px;
 justify-content: center;
 align-items: center;
 font-size: 1.5rem;
 cursor: pointer;
`;


export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;

  &.active {
    border-bottom: #01bf71;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-100%, 60%);
    cursor: pointer;
    color: #fff;
  }
`;


export const SocialIcon = styled.a`
 padding: 25px;
 cursor: pointer;
 text-decoration: none;
 color: #fff;
`;


export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 600px;
  padding: O 30px;
  z-index: 1;
`;


export const ProfileWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;


export const ProfileImg = styled.img`
 height: 100%;
 width: 100%;
 -o-object-fit: cover;
 object-fit: cover;
 background: #232a34;
`;


export const ProfileContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  padding: 8px 24px;
`;


export const ProfileH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const ProfileLink = styled.a`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;


export const ProfileBtn = styled.button`
  font-size: 20px;
  padding: 14px 48px;
  border-radius: 50px;
  cursor: pointer;
  background: #2E4C6D;

  &:hover {
    background: #49FF00;
    transition: 0.2s ease-in-out;
  }
`;

export const ProfileP = styled.p`
  margin-top: -20px;
  color: #fff;
  font-size: 40px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-right: -22px;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavItem = styled.li`
  height: 80px;
`;

