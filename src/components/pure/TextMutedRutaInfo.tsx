import React, { FC } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';

interface TextMutedRutaInfoProps {
   nombre?: string;
   totalCursos?: number;
   duracion?: number;
}

export const TextMutedRutaInfo: FC<TextMutedRutaInfoProps> = ({
   nombre = 'Ruta de Aprendizaje',
   totalCursos = 0,
   duracion = 0,
}) => {
   return (
      <div className="flex-grow ">
         <h2 className=" text-2xl font-bold">{nombre}</h2>
         <div className="flex justify-start items-center gap-2 text-zinc-300 text-sm">
            {/** N CURSOS */}
            <BsFillJournalBookmarkFill />
            <span>{totalCursos} cursos</span>

            {/** SEPARADOR */}
            <span> | </span>

            {/** N HORAS */}
            <AiOutlineClockCircle />
            <span>{duracion} horas</span>
         </div>
      </div>
   );
};
