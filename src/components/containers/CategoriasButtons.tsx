import React, { FC, useRef } from 'react';
import { ICategoria } from '../../models/categoria.class';

import { ButtonCategoria } from '../pure/ButtonCategoria';
import { CategoriasButtonsNavigation } from './CategoriasButtonsNavigation';

interface CategoriasButtonsProps {
   categorias: ICategoria[] | [];
   categoriaSelected: ICategoria | null;
   setCategoriaSelected: (categoriaSelected: ICategoria | null) => void;
}

export const CategoriasButtons: FC<CategoriasButtonsProps> = ({
   categorias,
   categoriaSelected,
   setCategoriaSelected,
}) => {
   const $containerButtons = useRef<HTMLDivElement>(null);

   const handleSelect = (categoria: ICategoria) => {
      if (!categoriaSelected || categoriaSelected.id !== categoria.id) {
         setCategoriaSelected(categoria);
      }
   };

   // border-b  border-stone-600
   return (
      <div
         className={`
            bg-black 
            pt-2 mb-1 
            relative
         `}
      >
         <h3 className="text-zinc-200 font-bold pl-2">Categorias</h3>
         <div
            ref={$containerButtons}
            className={`
               overflow-x-scroll scroll-smooth 
               flex w-full gap-3 
               mt-2 pb-4 pl-2 pr-2 lg:pl-14 lg:pr-14
            `}
         >
            {categorias.map((categoria, index) => (
               <ButtonCategoria
                  key={`${index}-${categoria}`}
                  categoria={categoria}
                  onSelect={handleSelect}
                  isSelected={
                     categoriaSelected
                        ? categoriaSelected.id === categoria.id
                        : false
                  }
                  index={index}
                  container={$containerButtons}
               />
            ))}
         </div>

         <CategoriasButtonsNavigation container={$containerButtons} />
      </div>
   );
};
