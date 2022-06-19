import React, { FC } from 'react';

import { RiCloseCircleFill } from 'react-icons/ri';

interface ButtonCLoseSlideInfoProps {
   isOpenRutaInfo: boolean;
   setIsOpenRutaInfo: (isOpen: boolean) => void;
}

export const ButtonCloseSlideInfo: FC<ButtonCLoseSlideInfoProps> = ({
   isOpenRutaInfo,
   setIsOpenRutaInfo,
}) => {
   return (
      <div
         onClick={() => setIsOpenRutaInfo(false)}
         className={`
               lg:hidden
               flex-shrink-0 
             text-red-500 
               text-5xl 
               absolute bottom-0 right-5 
               pb-4 
               cursos-pointer
               ${isOpenRutaInfo ? 'translate-y-0 ' : 'translate-y-full'}
               transition-all duration-300 ease-in-out
            `}
      >
         <div className="bg-zinc-200 h-5 w-5  absolute top-3 left-3 -z-10"></div>
         <RiCloseCircleFill />
      </div>
   );
};
