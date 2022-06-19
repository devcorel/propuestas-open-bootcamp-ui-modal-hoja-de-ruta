import React, { FC, useEffect, useState } from 'react';
import { ICategoria } from '../../models/categoria.class';
import { IHojaRuta } from '../../models/hojaRuta.class';

import { CardRuta } from '../pure/CardRuta';
import { TextSeleccionarCategoria } from '../pure/TextSeleccionarCategoria';

interface RutasListProps {
   rutas: IHojaRuta[];
   rutaSelected: IHojaRuta | null;
   setRutaSelected: (rutaSelected: IHojaRuta) => void;
   categoriaSelected: ICategoria | null;
   setIsOpenRutaInfo: (isOpenRutaInfo: boolean) => void;
}

export const RutasList: FC<RutasListProps> = ({
   rutas,
   rutaSelected,
   setRutaSelected,
   categoriaSelected,
   setIsOpenRutaInfo,
}) => {
   const [rutasList, setRutasList] = useState<IHojaRuta[]>([]);

   const handleSelect = (ruta: IHojaRuta) => {
      if (!rutaSelected || rutaSelected.id !== ruta.id) {
         setRutaSelected(ruta);
      }
      setIsOpenRutaInfo(true);
   };

   useEffect(() => {
      if (categoriaSelected) {
         setRutasList(
            rutas.filter((ruta) => ruta.stackType === categoriaSelected.type)
         );
      }
   }, [categoriaSelected]);

   if (!categoriaSelected) {
      return <TextSeleccionarCategoria />;
   }

   return (
      <div className="pt-2 pb-14 px-4">
         {rutasList.map((ruta, index) => (
            <CardRuta
               key={`${index}-${ruta}`}
               ruta={ruta}
               isSelected={rutaSelected ? rutaSelected.id === ruta.id : false}
               onSelect={handleSelect}
            />
         ))}
      </div>
   );
};
