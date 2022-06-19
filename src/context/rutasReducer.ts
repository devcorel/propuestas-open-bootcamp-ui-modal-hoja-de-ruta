import { rutasState } from '.';
import { Categoria } from '../models/categoria.class';
import { HojaRuta } from '../models/hojaRuta.class';

type rutaActionType =
   | { type: '[RUTA] - Set Rutas'; payload: HojaRuta[] }
   | { type: '[RUTA] - Select Ruta'; payload: HojaRuta | null }
   | { type: '[RUTA] - Set OpenRutaInfo'; payload: boolean }
   | { type: '[RUTA] - Set Categorias'; payload: Categoria[] }
   | { type: '[RUTA] - Select Categoria'; payload: Categoria | null };

export const rutasReducer = (
   state: rutasState,
   action: rutaActionType
): rutasState => {
   switch (action.type) {
      case '[RUTA] - Set Rutas':
         return { ...state, rutas: action.payload };

      case '[RUTA] - Select Ruta':
         return { ...state, rutaSelected: action.payload };

      case '[RUTA] - Set OpenRutaInfo':
         return { ...state, isOpenRutaInfo: action.payload };

      case '[RUTA] - Set Categorias':
         return { ...state, categorias: action.payload };

      case '[RUTA] - Select Categoria':
         return { ...state, categoriaSelected: action.payload };

      default:
         return state;
   }
};
