import React, { FC } from 'react';

interface DescriptionRutaInfoProps {
   descripcion?: string;
}
export const DescriptionRutaInfo: FC<DescriptionRutaInfoProps> = ({
   descripcion,
}) => {
   return (
      <>
         <h3 className="mt-6 text-sm font-bold">Descripción</h3>
         <p className="mt-1 text-base">{descripcion}</p>
      </>
   );
};
