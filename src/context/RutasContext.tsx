import { createContext } from 'react';
import { ICategoria } from '../models/categoria.class';
import { IHojaRuta } from '../models/hojaRuta.class';

interface ContextProps {
   rutas: IHojaRuta[];
   rutaSelected: IHojaRuta | null;
   isOpenRutaInfo: boolean;
   categorias: ICategoria[];
   categoriaSelected: ICategoria | null;
   setRutas: (rutas: IHojaRuta[]) => void;
   setRutaSelected: (rutaSelected: IHojaRuta | null) => void;
   setIsOpenRutaInfo: (open: boolean) => void;
   setCategorias: (categorias: ICategoria[]) => void;
   setCategoriaSelected: (categoriaSelected: ICategoria | null) => void;
}

export const RutasContext = createContext({} as ContextProps);
