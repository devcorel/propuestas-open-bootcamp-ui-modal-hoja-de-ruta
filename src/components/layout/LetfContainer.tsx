import React, { useContext } from 'react';
import { RutasContext } from '../../context';
import { CategoriasButtons } from '../containers/CategoriasButtons';
import { RutasList } from '../containers/RutasList';
import { ScreenMaskCloseSlideInfo } from '../pure/ScreenMaskCloseSlideInfo';
import { ButtonNavigation } from '../pure/ButtonNavigation';

export const LetfContainer = () => {
   const {
      rutas,
      rutaSelected,
      setRutaSelected,
      categorias,
      categoriaSelected,
      setCategoriaSelected,
      isOpenRutaInfo,
      setIsOpenRutaInfo,
   } = useContext(RutasContext);

   const handleSelectCategoriaOnMobile = (dir: 'next' | 'prev') => {
      if (categoriaSelected) {
         const index = categorias.findIndex(
            (categoria) => categoria.id === categoriaSelected.id
         );
         if (index !== -1) {
            const newIndex = dir === 'next' ? index + 1 : index - 1;
            if (newIndex >= 0 && newIndex < categorias.length) {
               setCategoriaSelected(categorias[newIndex]);
            } else if (dir === 'next') {
               setCategoriaSelected(categorias[0]);
            } else if (dir === 'prev') {
               setCategoriaSelected(categorias[categorias.length - 1]);
            }
         }
      } else if (dir === 'next') {
         setCategoriaSelected(categorias[0]);
      } else if (dir === 'prev') {
         setCategoriaSelected(categorias[categorias.length - 1]);
      }
   };

   return (
      <div
         className={`
         flex-grow 
         flex flex-col
         bg-black 
         w-6/12
         lg:blur-none
         ${isOpenRutaInfo ? 'blur-sm ' : ''}}
         transition-blur duration-150 ease-in-out
      `}
      >
         <div className="flex-shrink-0">
            <CategoriasButtons
               categorias={categorias}
               categoriaSelected={categoriaSelected}
               setCategoriaSelected={setCategoriaSelected}
            />
         </div>
         <div
            className={`
            flex-grow
            ${categoriaSelected ? 'overflow-y-scroll' : ''}
         `}
         >
            <RutasList
               rutas={rutas}
               rutaSelected={rutaSelected}
               setRutaSelected={setRutaSelected}
               categoriaSelected={categoriaSelected}
               setIsOpenRutaInfo={setIsOpenRutaInfo}
            />
         </div>

         <ScreenMaskCloseSlideInfo
            isOpenRutaInfo={isOpenRutaInfo}
            setIsOpenRutaInfo={setIsOpenRutaInfo}
         />

         <div className="flex-shrink-0 flex justify-center mb-2 relative lg:hidden">
            <div className="flex justify-center gap-5 absolute bottom-2 ">
               <ButtonNavigation
                  direction="left"
                  onClick={() => handleSelectCategoriaOnMobile('prev')}
               />
               <ButtonNavigation
                  direction="right"
                  onClick={() => handleSelectCategoriaOnMobile('next')}
               />
            </div>
         </div>
      </div>
   );
};
