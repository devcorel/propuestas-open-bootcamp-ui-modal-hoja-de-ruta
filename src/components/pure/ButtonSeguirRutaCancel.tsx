import React, { useContext } from 'react';
import { RutasContext } from '../../context';

export const ButtonSeguirRutaCancel = () => {
   const { setRutaSelected, setCategoriaSelected, setIsOpenRutaInfo } =
      useContext(RutasContext);

   const handleClick = () => {
      setRutaSelected(null);
      setCategoriaSelected(null);
      setIsOpenRutaInfo(false);
   };

   return (
      <button
         onClick={handleClick}
         className={`
            bg-slate-600 
            rounded-lg 
            pt-2 pb-2 pl-5 pr-5 
            sm:w-auto w-full
            hover:bg-slate-500 
         `}
      >
         <span className="text-zinc-200 font-bold">Cancelar</span>
      </button>
   );
};
