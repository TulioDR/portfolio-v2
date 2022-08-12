import { useRef, useState } from "react";
import {
   mainSkillsArray,
   otherSkillsArray,
} from "../../assets/constants/skills";
import Language from "./Language";
import SkillsGrid from "./SkillsGrid";
import SkillsTab from "./SkillsTab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import useLanguageContext from "../../context/LanguageContext";
type Props = {};

export default function SkillsShowcase({}: Props) {
   const mainSkillsRef = useRef<HTMLButtonElement>(null);
   const otherSkillsRef = useRef<HTMLButtonElement>(null);

   const [currentSkills, setCurrentSkills] = useState<number>(0);

   const { currentIdiom } = useLanguageContext();

   const { mainSkills, otherSkills } = currentIdiom.about;
   return (
      <div className="flex flex-col justify-center items-center p-3 md:p-0 max-w-full w-80 md:w-96">
         <div className="px-4 xl:px-3 2xl:px-2 w-full">
            <ul className="flex space-x-5 mb-5 2xl:mb-6 text-lg border-b border-gray-400 skills-pagination">
               <SkillsTab
                  tabRef={mainSkillsRef}
                  currentSkills={currentSkills}
                  index={0}
               >
                  {mainSkills}
               </SkillsTab>
               <SkillsTab
                  tabRef={otherSkillsRef}
                  currentSkills={currentSkills}
                  index={1}
               >
                  {otherSkills}
               </SkillsTab>
            </ul>
         </div>

         <Swiper
            speed={500}
            slidesPerView={1}
            spaceBetween={20}
            onInit={(swiper) => {
               swiper.pagination.bullets[0] = mainSkillsRef?.current!;
               swiper.pagination.bullets[1] = otherSkillsRef?.current!;
            }}
            pagination={{
               el: ".skills-pagination",
               clickable: true,
               type: "custom",
            }}
            onSlideChange={(e) => {
               setCurrentSkills(e.activeIndex);
            }}
            centeredSlides={true}
            modules={[Pagination]}
            className="w-full"
         >
            <SwiperSlide>
               <SkillsGrid>
                  {mainSkillsArray.map((skill) => (
                     <Language key={skill.name} skill={skill} />
                  ))}
               </SkillsGrid>
            </SwiperSlide>
            <SwiperSlide>
               <SkillsGrid>
                  {otherSkillsArray.map((skill) => (
                     <Language key={skill.name} skill={skill} />
                  ))}
               </SkillsGrid>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
