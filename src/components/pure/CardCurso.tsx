import { FC, useEffect, useRef, useState } from 'react';
import { IHojaRuta } from '../../models/hojaRuta.class';

import { TbRoute } from 'react-icons/tb';
import { IoIosArrowForward } from 'react-icons/io';
import { ICurso } from '../../models/curso.class';
import { BiCheck } from 'react-icons/bi';

interface CardCursoProps {
   curso: ICurso;
}
export const CardCurso: FC<CardCursoProps> = ({ curso }) => {
   return (
      <div
         className={`
            flex justify-between items-center gap-3
            bg-stone-800 
            text-zinc-200
            border border-stone-500 rounded-lg 
            shadow-lg 
            p-4 mb-3
            relative overflow-hidden
        `}
      >
         <div
            className={`
               flex-shrink-0 
               flex justify-center items-center
               text-4xl
               rounded-lg 
               w-11 h-11 
            `}
         >
            {/**
             * //Todo: ésta implementación debe mejorarse
             *
             * Estaba usando imagenes hasta que encontré los iconos css,
             *  asi que lo implementé así para dejar las dos opciones.
             *  No quise entrar más en detalle.
             */}
            {curso.iconClass !== '' ? (
               <i className={curso.iconClass} />
            ) : (
               <img src={curso.imagen} alt={curso.nombre} />
            )}
         </div>
         <div className="flex-grow">
            <h2 className="font-bold">{curso.nombre}</h2>
            <div className="flex gap-2 text-gray-400">
               <p className="text-sm">{curso.modulos} modulos</p>
               <span> | </span>
               <p className="text-sm">{curso.duracion}</p>
            </div>
         </div>
         {curso.isCompleted && (
            <div
               className={`
                     flex-shrink-0
                     flex justify-center items-center
                     rounded-full 
                     bg-teal-500 
                     text-zinc-900
                     font-bold
                     w-6 h-6
                  `}
            >
               <BiCheck />
            </div>
         )}
      </div>
   );
};
