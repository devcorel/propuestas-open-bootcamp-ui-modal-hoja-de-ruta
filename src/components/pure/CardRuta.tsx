import { FC, useEffect, useRef } from 'react';
import { IHojaRuta } from '../../models/hojaRuta.class';

import { TbRoute } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';

interface CardRutaProps {
   ruta: IHojaRuta;
   isSelected: boolean;
   onSelect: (ruta: IHojaRuta) => void;
}
export const CardRuta: FC<CardRutaProps> = ({ ruta, isSelected, onSelect }) => {
   const selectButtonRef = useRef<HTMLDivElement | null>(null);

   return (
      <div
         onClick={() => onSelect(ruta)}
         className={`
            overflow-hidden
            flex justify-between items-center gap-3
            text-zinc-200
            border  rounded-lg
            ${
               isSelected
                  ? 'bg-gray-800 border-teal-500'
                  : 'bg-stone-800 hover:bg-stone-700 border-stone-500 '
            }
            p-4 mb-3
            relative 
            cursor-pointer
            transition-all duration-300 ease-in-out
        `}
      >
         <div
            className={`
               flex-shrink-0 
               flex justify-center items-center
               text-zinc-200
               text-4xl
               rounded-lg 
               w-11 h-11 
               p-1
            `}
         >
            {/**
             * //Todo: ésta implementación debe mejorarse
             *
             * Estaba usando imagenes hasta que encontré los iconos css,
             *  asi que lo implementé así para dejar las dos opciones.
             *  No quise entrar más en detalle.
             */}
            {ruta.iconClass !== '' ? (
               <i className={ruta.iconClass} />
            ) : (
               <img src={ruta.imagen} alt={ruta.nombre} />
            )}
         </div>
         <div className="flex-grow">
            <h2 className="font-bold">{ruta.nombre}</h2>
            <p className="text-sm">{ruta.descripcion}</p>
         </div>
         <div
            ref={selectButtonRef}
            className={`
                  flex-shrink-0
                  flex justify-center items-center
                  rounded-full 
                  bg-teal-500 
                  text-zinc-900
                  font-bold
                  w-6 h-6
                  transition-translate duration-150 ease-in-out
                  ${isSelected ? '' : '-translate-x-full opacity-0'}
               `}
         >
            <IoIosArrowForward />
         </div>
      </div>
   );
};
