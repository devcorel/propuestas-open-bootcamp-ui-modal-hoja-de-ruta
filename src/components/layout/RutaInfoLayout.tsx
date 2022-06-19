import React, { FC } from 'react';
import { IHojaRuta } from '../../models/hojaRuta.class';
import { ImageRutaInfo } from '../pure/ImageRutaInfo';
import { TextMutedRutaInfo } from '../pure/TextMutedRutaInfo';
import { DescriptionRutaInfo } from '../pure/DescriptionRutaInfo';
import { CursosList } from '../containers/CursosList';
import { LogoOpenBootcamp } from '../pure/LogoOpenBootcamp';

interface RutaInfoLayoutProps {
   ruta: IHojaRuta | null;
}

export const RutaInfoLayout: FC<RutaInfoLayoutProps> = ({ ruta }) => {
   if (!ruta) {
      return <LogoOpenBootcamp />;
   }

   return (
      <div className="flex flex-col p-5 text-zinc-200">
         <div
            className={`
               flex justify-start items-center gap-4
               bg-stone-900
               border-b border-stone-600 lg:border-none
               sticky top-0 z-10 py-2 lg:static lg:z-0 lg:py-0
               `}
         >
            <ImageRutaInfo
               imagen={ruta?.imagen}
               iconClass={ruta?.iconClass}
               titleAlt={ruta?.nombre}
               stackType={ruta?.stackType}
            />
            <TextMutedRutaInfo
               nombre={ruta?.nombre}
               totalCursos={ruta?.cursos.length}
               duracion={131}
            />
         </div>

         <DescriptionRutaInfo descripcion={ruta?.descripcion} />

         <div className="flex-grow ">
            <CursosList cursos={ruta?.cursos} />
         </div>
      </div>
   );
};
