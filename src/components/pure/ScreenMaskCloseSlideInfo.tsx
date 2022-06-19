import React, { FC } from 'react';

interface ScreenMaskCloseSlideInfoProps {
   isOpenRutaInfo: boolean;
   setIsOpenRutaInfo: (isOpen: boolean) => void;
}

export const ScreenMaskCloseSlideInfo: FC<ScreenMaskCloseSlideInfoProps> = ({
   isOpenRutaInfo,
   setIsOpenRutaInfo,
}) => {
   return (
      <div
         onClick={() => setIsOpenRutaInfo(false)}
         className={`
         bg-black 
          opacity-0
         absolute top-0 left-0
         w-full h-full
         -z-50
         lg:hidden
         transition-all duration-300 ease-in-out
         ${isOpenRutaInfo ? 'opacity-50 z-50' : ''}
      `}
      ></div>
   );
};
