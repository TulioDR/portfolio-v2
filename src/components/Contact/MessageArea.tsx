type Props = {
   placeholder: string;
};

export default function MessageArea({ placeholder }: Props) {
   return (
      <textarea
         placeholder={placeholder}
         className="w-full rounded-md h-48 2xl:h-60 px-3 py-2 bg-primary"
      />
   );
}
