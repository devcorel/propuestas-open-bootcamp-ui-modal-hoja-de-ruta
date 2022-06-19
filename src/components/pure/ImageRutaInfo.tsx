import React, { FC } from 'react';
import { GetIcon } from './GetIcon';
import { TStackType } from '../../models/hojaRuta.class';

interface ImageRutaInfoProps {
   titleAlt?: string;
   imagen?: string;
   iconClass?: string;
   stackType: TStackType;
}
export const ImageRutaInfo: FC<ImageRutaInfoProps> = ({
   titleAlt = 'Ruta de Aprendizaje',
   imagen = '..¿defaultImagen url?',
   iconClass = '',
   stackType = '0dev',
}) => {
   return (
      <div
         className={`
                     flex-shrink-0
                     flex justify-center items-center
                     rounded-lg
                     text-5xl
                     w-14 h-14 
                  `}
      >
         {/**
          * //Todo: ésta implementación debe mejorarse
          *
          * Estaba usando imagenes hasta que encontré los iconos css,
          *  asi que lo implementé así para dejar las tres opciones.
          *  No quise entrar más en detalle.
          */}

         {iconClass !== '' ? (
            <i className={iconClass} />
         ) : imagen !== '' ? (
            <img src={imagen} alt={titleAlt} />
         ) : (
            <GetIcon type={stackType} />
         )}
      </div>
   );
};
