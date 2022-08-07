import { useRef, useState } from "react";
import { mainSkills, otherSkills } from "../../assets/constants/skills";
import Language from "./Language";
// import SkillsGrid from "./SkillsGrid";
import SkillsTab from "./SkillsTab";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
type Props = {};

export default function SkillsShowcase({}: Props) {
   const mainSkillsRef = useRef<HTMLButtonElement>(null);
   const otherSkillsRef = useRef<HTMLButtonElement>(null);

   const [currentSkills, setCurrentSkills] = useState<number>(0);

   return (
      <div className="flex flex-col justify-center items-center p-3 md:p-0 max-w-full w-80 md:w-96">
         <div className="px-4 w-full">
            <ul className="flex space-x-5 mb-5 text-lg border-b border-gray-400 skills-pagination">
               <SkillsTab
                  tabRef={mainSkillsRef}
                  currentSkills={currentSkills}
                  index={0}
               >
                  Main Skills
               </SkillsTab>
               <SkillsTab
                  tabRef={otherSkillsRef}
                  currentSkills={currentSkills}
                  index={1}
               >
                  Other Skills
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
               <div className="grid grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-full">
                  {mainSkills.map((skill) => (
                     <Language key={skill.name} skill={skill} />
                  ))}
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="grid grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-4 w-full">
                  {otherSkills.map((skill) => (
                     <Language key={skill.name} skill={skill} />
                  ))}
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
