import AboutInfoContainer from "../../components/About/AboutInfoContainer";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import TagContainer from "../../components/Sections/TagContainer";
import useLanguageContext from "../../context/LanguageContext";
import Jumbotron from "../Parts/Jumbotron";
import Title from "../Parts/Title";
import aboutImage from "../../assets/images/skills.jpg";
type Props = {};

export default function AboutD({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, description1, description2, description3, checkMySkills } =
      currentIdiom.about;

   return (
      <>
         <InfoContainer>
            <Title>{title}</Title>
            <TagContainer tag="p">
               <Info about>
                  <AboutInfoContainer>{description1}</AboutInfoContainer>
               </Info>
               <Info about>
                  <AboutInfoContainer>{description2}</AboutInfoContainer>
               </Info>
               <Info about>
                  <AboutInfoContainer>{description3}</AboutInfoContainer>
               </Info>
            </TagContainer>
            <SlideNextBtn text={checkMySkills} />
         </InfoContainer>
         <div className="w-3/5 hidden sm:block">
            <Jumbotron
               tag="table"
               imgSrc={aboutImage}
               imgAlt="about-background"
            >
               <SkillsShowcase />
            </Jumbotron>
         </div>
      </>
   );
}
