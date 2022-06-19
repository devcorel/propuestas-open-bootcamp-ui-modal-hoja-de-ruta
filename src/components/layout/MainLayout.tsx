import React, { useContext, useEffect, useRef, useState } from 'react';
import { RutasContext, RutasProvider } from '../../context';
import { MainTitle } from '../pure/MainTitle';
import { ButtonSeguirRutaCancel } from '../pure/ButtonSeguirRutaCancel';
import { ButtonSeguirRutaSelect } from '../pure/ButtonSeguirRutaSelect';
import { LetfContainer } from './LetfContainer';
import { RightContainer } from './RightContainer';

export const MainLayout = () => {
   return (
      <div className="bg-stone-900 flex flex-col items-center justify-between rounded-3xl h-full w-screen sm:h-4/5 sm:w-4/5">
         <MainTitle text="Selecciona una hoja de ruta" />
         <RutasProvider>
            <Containers />
            <Actions />
         </RutasProvider>
      </div>
   );
};

function Containers() {
   return (
      <div className="flex flex-grow w-full h-3/6 relative overflow-hidden">
         <LetfContainer />
         <RightContainer />
      </div>
   );
}

function Actions() {
   return (
      <div className="bg-slate-700 flex flex-wrap justify-end gap-2 sm:gap-5 w-full rounded-b-3xl p-3 relative">
         <ButtonSeguirRutaCancel />
         <ButtonSeguirRutaSelect />
      </div>
   );
}
