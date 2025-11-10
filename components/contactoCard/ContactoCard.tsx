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
      <div className="flex flex-col justify-around items-center gap-4 w-80 min-h-20 h-fit text-center">
         <Image src={imagen} alt="Ícono" width={50} height={50} />
         <h3 className="text-xl text-gray-200 font-bold">{label}</h3>
         <p className="text-lg text-gray-200">{dato}</p>
      </div>
   );
};

export default ContactoCard;
