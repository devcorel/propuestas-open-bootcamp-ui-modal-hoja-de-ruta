import React, { FC, useContext } from 'react';
import { ICurso } from '../../models/curso.class';
import { CardCurso } from '../pure/CardCurso';

interface CursosListProps {
   cursos?: ICurso[];
}

export const CursosList: FC<CursosListProps> = ({ cursos = [] }) => {
   return (
      <div>
         <h3 className="mt-6 text-sm font-bold">Cursos</h3>
         <div className="bg-zinc-800 rounded-lg p-4 mt-3 ">
            {cursos.map((curso) => (
               <CardCurso key={curso.id} curso={curso} />
            ))}
         </div>
      </div>
   );
};
