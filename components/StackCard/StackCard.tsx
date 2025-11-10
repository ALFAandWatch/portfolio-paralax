import Image from 'next/image';

interface StackCardsProps {
   name: string;
   url: string;
}

const StackCard = ({ name, url }: StackCardsProps) => {
   return (
      <div className="flex flex-col items-center justify-between gap-4 bg-gray-800 p-4 rounded-md h-fit w-32">
         <div className="relative h-18 aspect-square">
            <Image src={url} alt={name} fill sizes="10vh" />
         </div>
         <p className="text-white text-sm text-center font-semibold">{name}</p>
      </div>
   );
};

export default StackCard;
