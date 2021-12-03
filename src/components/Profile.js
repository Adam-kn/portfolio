import { ProfileBtn, ProfileContainer, ProfileContent, ProfileH1, ProfileImg, ProfileLink, ProfileP, ProfileWrapper, SocialIcon } from '../Styles';
import ecran from '../imges/ecran.jpg';
import CV_Adam_Konan from '../document/CV_Adam_Konan.pdf'
import Typical from 'react-typical';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
    return (
        <ProfileContainer>
            <ProfileWrapper>
                <ProfileImg src={ecran} alt="" />
            </ProfileWrapper>
            <ProfileContent>
                <ProfileP>
                    <SocialIcon href="https://www.linkedin.com/in/adam-konan/" alt="">
                        <FaLinkedin />
                    </SocialIcon>
                    <SocialIcon href="https://github.com/Adam-kn">
                        <FaGithub />
                    </SocialIcon>
                </ProfileP>
                <ProfileH1> Salut, Je suis Adam Konan votre </ProfileH1>
                <ProfileP>
                    <Typical
                        steps={['Dev Machine Learning', 3000, 'Développeur Django', 3000, 'Développeur React js', 3000, 'Web Pentester', 3000]}
                        loop={Infinity} 
                        wrapper="h3"/>
                </ProfileP>
                <ProfileLink href={CV_Adam_Konan} download>
                    <ProfileBtn>
                        Télécharger le Cv
                    </ProfileBtn>
                </ProfileLink>
            </ProfileContent>
        </ProfileContainer>
    );
};

export default Profile;