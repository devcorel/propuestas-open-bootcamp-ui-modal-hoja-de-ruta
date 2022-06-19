import React from 'react';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';

export const TextSeleccionarCategoria = () => {
   return (
      <div className="flex justify-center items-center gap-4 h-full w-full text-zinc-200 text-3xl text-center">
         <ImArrowUp className="hidden lg:block" />
         <ImArrowDown className="lg:hidden" />
         <span className="w-3/5 max-w-sm">Selecione una categoría</span>
      </div>
   );
};
