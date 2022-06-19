import { FC, useEffect, useReducer } from 'react';
import { RutasContext, rutasReducer } from '.';
import { ICategoria } from '../models/categoria.class';
import { IHojaRuta } from '../models/hojaRuta.class';

import { categorias } from '../_mocks/categorias.mock';
import { rutas } from '../_mocks/rutas.mock';

interface RutaProviderProps {
   children: React.ReactNode;
}

export interface rutasState {
   rutas: IHojaRuta[];
   rutaSelected: IHojaRuta | null;
   isOpenRutaInfo: boolean;
   categorias: ICategoria[];
   categoriaSelected: ICategoria | null;
}

const RUTAS_INITIAL_STATE: rutasState = {
   rutas: [],
   rutaSelected: null,
   isOpenRutaInfo: false,
   categorias: [],
   categoriaSelected: null,
};

export const RutasProvider: FC<RutaProviderProps> = ({ children }) => {
   const [state, dispatch] = useReducer(rutasReducer, RUTAS_INITIAL_STATE);

   useEffect(() => {
      setRutas(rutas);
      setCategorias(categorias);
   }, []);

   const setRutas = (rutas: IHojaRuta[]) => {
      dispatch({
         type: '[RUTA] - Set Rutas',
         payload: rutas,
      });
   };
   const setRutaSelected = (rutaSelected: IHojaRuta | null) => {
      dispatch({
         type: '[RUTA] - Select Ruta',
         payload: rutaSelected,
      });
   };
   const setIsOpenRutaInfo = (isOpenRutaInfo: boolean) => {
      dispatch({
         type: '[RUTA] - Set OpenRutaInfo',
         payload: isOpenRutaInfo,
      });
   };
   const setCategorias = (categorias: ICategoria[]) => {
      dispatch({
         type: '[RUTA] - Set Categorias',
         payload: categorias,
      });
   };
   const setCategoriaSelected = (categoriaSelected: ICategoria | null) => {
      dispatch({
         type: '[RUTA] - Select Categoria',
         payload: categoriaSelected,
      });
   };
   return (
      <RutasContext.Provider
         value={{
            ...state,
            setRutas,
            setRutaSelected,
            setIsOpenRutaInfo,
            setCategorias,
            setCategoriaSelected,
         }}
      >
         {children}
      </RutasContext.Provider>
   );
};
