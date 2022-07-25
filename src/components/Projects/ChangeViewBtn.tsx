type Props = {
   onClick: any;
   icon: string;
   showCarousel: boolean;
};

export default function ChangeViewBtn({ onClick, icon, showCarousel }: Props) {
   return (
      <button
         onClick={onClick}
         className={`material-icons text-5xl duration-300 ${
            showCarousel ? "pointer-events-none" : "text-gray-500 "
         }`}
      >
         {icon}
      </button>
   );
}
