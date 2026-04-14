import Image from 'next/image';

interface StackCardsProps {
   name: string;
   url: string;
}

const StackCard = ({ name, url }: StackCardsProps) => {
   return (
      <div className="flex flex-col items-center justify-center lg:justify-between gap-4 bg-[rgb(225,245,235)] dark:bg-gray-800 p-2 lg:p-4 rounded-md h-26 lg:w-32">
         <div className="relative h-8 lg:h-18 aspect-square">
            <Image src={url} alt={name} fill sizes="10vh" />
         </div>
         <p className="text-gray-600 dark:text-gray-100 text-xs lg:text-sm text-center font-semibold">
            {name}
         </p>
      </div>
   );
};

export default StackCard;
