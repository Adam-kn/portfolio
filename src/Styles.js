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
    color: #113CFC;
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
    border-bottom: 3px solid #113CFC;
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

 @media screen and (max-width: 768px) {
   font-size: 35px;
 }
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

export const TypicalStyled = styled.div`
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
    font-weight: 600;
  }
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
  border-width: 4px;
  cursor: pointer;
  border-color: #2E4C6D;
  background: #fff;

  &:hover {
    background: #113CFC;
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


export const Container = styled.div`
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
`;


export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;


export const Row = styled.div`
  display: grid;
  padding-top: -250px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => ( imgStart ? `'col2 col1'`:`'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => ( imgStart ? `'col1 col2'`:`'col1 col1' 'col2 col2'`)} 
  }
`;


export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;


export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;


export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;


export const TopLine = styled.h4`
  color: #113CFC;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  align-items: center;
  text-align: center;
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606':'#fff') };
`;


export const ImgWrapper = styled.div`
 max-width: 555px;
 justify-content: flex-start;
`;


export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const TitleWrap = styled.ul`
  font-size: 20px;
`;


export const Title = styled.li`
 color: #fff;
`;

export const LinkC = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #113CFC;
`;


export const Card = styled.div`
   background:#fff ;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-radius: 10px;
   max-height: 400px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
   transition: all 0.2s ease-in-out;

   &:hover {
     transform: scale(1.05);
     transition: all 0.2s ease-in-out;
     cursor: pointer;
   }

   @media screen and (max-width: 480px) {
     padding-bottom: 10px;
     display: flex;
     height: 100%;
     width: 100%;
     flex-direction: column;
   }

`;


export const ProjectIcon = styled.img`
  height: 300px;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
`;


export const ProjectTitle = styled.h2`
  font-size: 1rem;
  color: #000;
  margin-bottom: 10px;

`;

export const ProjectContainer = styled.div`
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const ProjectWrp = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  padding-bottom: 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const ProjectP = styled.p`
  font-size: 1rem;
  text-align: center;
`;


export const SkillsP = styled.div`
  @media screen and (max-width: 768px) {
    padding-right: 0;
    padding-left: 0;
    width: 100%;
  }
`;


export const SkillsTitle = styled.h2`
  color: #fff;
`;

export const Progress = styled.div`
  background-color: #d8d8d8;
  border-radius: 20px;
  height: 20px;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 200px;
  }

  @media screen and (max-width: 1000px) {
    width: 350px;
  }
`;


export const ProgressDone = styled.div`
  background-color: #113CFC;
  border-radius: 20px;
  height: 100%;
`;


export const ContactLab = styled.label`
  color: #fff;
`;


export const Input = styled.input`
  border-color: #113CFC;
  border-width: 4px;
  border-radius: 18px;
  font-size: 1.2rem;
  text-indent: 10px;
  width: 300px;
  height: 50px;
`;


export const Textarea = styled.textarea`
 border-radius: 15px;
 border-width: 3px;
 font-size: 1.2rem;
 text-indent: 10px;
 border-color: #113CFC;
 width: 300px;
 height: 250px;
`;

export const ContactForm = styled.form`
  align-items: center;
  text-align: center;
`;

export const BtnSubmit = styled.input`
  width: 200px;
  height: 40px;
  border-radius: 24px;
  font-size: 20px;
`;


export const FromWarp = styled.p`

`;


export const ErrorMs = styled.span`
  color: red;
`;