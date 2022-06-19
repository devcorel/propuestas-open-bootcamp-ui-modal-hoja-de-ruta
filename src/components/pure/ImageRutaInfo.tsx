import React, { FC } from 'react';

interface ImageRutaInfoProps {
   titleAlt?: string;
   imagen?: string;
   iconClass?: string;
}
export const ImageRutaInfo: FC<ImageRutaInfoProps> = ({
   titleAlt = 'Ruta de Aprendizaje',
   imagen = '..¿defaultImagen url?',
   iconClass = '',
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
          *  asi que lo implementé así para dejar las dos opciones.
          *  No quise entrar más en detalle.
          */}
         {iconClass !== '' ? (
            <i className={iconClass} />
         ) : (
            <img src={imagen} alt={titleAlt} />
         )}
      </div>
   );
};
