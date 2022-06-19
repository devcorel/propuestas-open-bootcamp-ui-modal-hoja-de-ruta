import React from 'react';
import { BiCodeBlock } from 'react-icons/bi';
import { CgGames, CgScreen } from 'react-icons/cg';
import { FiDatabase } from 'react-icons/fi';
import { ImMobile, ImStack } from 'react-icons/im';
import { TStackType } from '../../models/hojaRuta.class';

export const GetIcon = ({ type }: { type: TStackType }) => {
   switch (type) {
      case '0dev':
         return <BiCodeBlock />;
      case 'fullstack':
         return <ImStack />;
      case 'frontend':
         return <CgScreen />;
      case 'backend':
         return <FiDatabase />;
      case 'mobile':
         return <ImMobile />;
      case 'videogames':
         return <CgGames />;

      default:
         return <></>;
   }
};
