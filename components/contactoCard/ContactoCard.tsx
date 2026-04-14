import Image from 'next/image';

interface ContactoCardProps {
   contacto: {
      imagen: string;
      label: string;
      dato: string;
   };
}

const ContactoCard = ({ contacto }: ContactoCardProps) => {
   const { imagen, label, dato } = contacto;

   return (
      <div className="flex flex-col justify-around items-center lg:gap-4 min-h-20 h-fit text-center">
         <Image
            src={imagen}
            alt="Ícono"
            width={50}
            height={50}
            className="transform scale-50 lg:scale-100 invert dark:invert-0 transition-[filter] duration-700"
         />
         <h3 className="text-xl text-gray-600 dark:text-gray-100 font-bold">
            {label}
         </h3>
         <p className="text-lg text-gray-600 dark:text-gray-100">{dato}</p>
      </div>
   );
};

export default ContactoCard;
