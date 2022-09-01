import Tag from "../Sections/Tag";

type Props = {
   children: React.ReactNode;
};

export default function SidebarTags({ children }: Props) {
   return (
      <>
         <div className="hidden xl:block">
            <Tag>aside</Tag>
         </div>
         <div className="xl:hidden translate-y-[2px]">
            <Tag>footer</Tag>
         </div>
         {children}
         <div className="hidden xl:block">
            <Tag closing>aside</Tag>
         </div>
         <div className="xl:hidden translate-y-[2px]">
            <Tag closing>footer</Tag>
         </div>
      </>
   );
}
