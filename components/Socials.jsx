'use client';

import {
   RiLinkedinFill,
   RiGithubFill,
   RiInstagramFill,
} from 'react-icons/ri';
import Link from 'next/link';

   const icons = [
      {
         path: 'https://www.linkedin.com/in/yash-goyal-1a35bb208/',
         name: <RiLinkedinFill size={22} />,
      },
   {
      path: 'https://github.com/iyashgoyal',
      name: <RiGithubFill size={22} />,
   },
   {
      path: 'https://www.instagram.com/yash._.goyal_/',
      name: <RiInstagramFill size={22} />,
   },
];

const Socials = ({ containerStyles, iconsStyles }) => {
   return (
      <div className={`${containerStyles}`}>
         {icons.map((icon, index) => {
            return (
               <Link href={icon.path} target="_blank" key={index}>
                  <div className={`${iconsStyles}`}>{icon.name}</div>
               </Link>
            );
         })}
      </div>
   );
};

export default Socials;
