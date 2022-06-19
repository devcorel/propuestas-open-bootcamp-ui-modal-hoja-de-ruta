import React, { FC } from 'react';

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

interface ButtonNavigationProps {
   direction: string;
   onClick: () => void;
}
/*
   Button with hover:

      text-stone-900  hover:text-orange-900 
      bg-stone-200 hover:bg-orange-300 


   Orange Active:

      active:bg-orange-700 active:text-orange-400
*/

export const ButtonNavigation: FC<ButtonNavigationProps> = ({
   direction,
   onClick,
}) => {
   return (
      <div
         className={`
         flex 
         ${direction === 'left' ? 'justify-end' : 'justify-start'}
         items-center
         w-12  
      `}
      >
         <button
            onClick={onClick}
            className={`
               flex justify-center items-center
               text-5xl
               text-stone-900 lg:hover:text-amber-900
               bg-stone-200 
               ${direction === 'left' ? 'active:mr-1' : 'active:ml-1'}
               active:bg-orange-100 active:text-orange-700 lg:active:text-orange-700 
               rounded-full
               w-11 h-11
               p-0.5
               relative
               cursor-pointer
               select-none
               transition-all duration-150 ease-in-out
               z-10
            `}
         >
            {direction === 'left' ? (
               <FaArrowAltCircleLeft />
            ) : (
               direction === 'right' && <FaArrowAltCircleRight />
            )}
         </button>
      </div>
   );
};
