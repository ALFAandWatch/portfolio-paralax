import Image from 'next/image';

type ContactKey = 'email' | 'phone' | 'location';

interface ContactoCardProps {
   contacto: {
      key: ContactKey;
      label: string;
      value: string;
   };
}

const ContactoCard = ({ contacto }: ContactoCardProps) => {
   const { key, label, value } = contacto;

   const iconMap = {
      email: '/mail.svg',
      phone: '/phone.svg',
      location: '/location.svg',
   };

   return (
      <div className="flex flex-col justify-around items-center lg:gap-4 min-h-20 h-fit text-center">
         <Image
            src={iconMap[key]}
            alt="Ícono"
            width={50}
            height={50}
            className="transform scale-50 lg:scale-100 invert dark:invert-0 transition-[filter] duration-700"
         />
         <h3 className="text-xl text-gray-600 dark:text-gray-100 font-bold">
            {label}
         </h3>
         <p className="text-lg text-gray-600 dark:text-gray-100">{value}</p>
      </div>
   );
};

export default ContactoCard;
