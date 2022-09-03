type Props = {
   href: string;
   children: React.ReactNode;
};

export default function ContactLink({ href, children }: Props) {
   return (
      <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
         <a href={href} target="_blank" rel="noreferrer">
            {children}
         </a>
      </div>
   );
}
