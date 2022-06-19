import React, { useContext, useEffect, useRef } from 'react';
import { RutasContext } from '../../context';
import { ButtonCloseSlideInfo } from '../pure/ButtonCloseSlideInfo';
import { RutaInfoLayout } from './RutaInfoLayout';

export const RightContainer = () => {
   const { rutaSelected, isOpenRutaInfo, setIsOpenRutaInfo } =
      useContext(RutasContext);
   const $rightContainer = useRef<HTMLDivElement>(null);

   useEffect(() => {
      $rightContainer.current!.scrollTo({ top: 0, behavior: 'smooth' });
   });

   return (
      <>
         <div
            ref={$rightContainer}
            className={`
               ${rutaSelected ? 'overflow-y-scroll' : 'overflow-y-hidden'}
             bg-stone-900
               border-l  border-stone-600
               w-full max-w-md lg:w-6/12 lg:max-w-lg 
               h-full 
               absolute lg:relative
               right-0 lg:right-0
               lg:translate-x-0
               ${isOpenRutaInfo ? '' : 'translate-x-full'}
               transition-translate duration-500 ease-in-out
            `}
         >
            <RutaInfoLayout ruta={rutaSelected} />
         </div>
         <ButtonCloseSlideInfo
            isOpenRutaInfo={isOpenRutaInfo}
            setIsOpenRutaInfo={setIsOpenRutaInfo}
         />
      </>
   );
};
