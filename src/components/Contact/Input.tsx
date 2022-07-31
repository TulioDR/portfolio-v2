type Props = {
   placeholder: string;
};

export default function Input({ placeholder }: Props) {
   return (
      <input
         type="text"
         placeholder={placeholder}
         className="w-1/2 rounded-md px-3 py-2 bg-primary"
      />
   );
}
