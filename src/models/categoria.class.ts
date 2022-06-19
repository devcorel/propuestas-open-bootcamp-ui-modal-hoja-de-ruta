import generateId from '../utils/generateId';
import { TStackType } from './hojaRuta.class';

export interface ICategoria {
   id: string;
   name: string;
   type: TStackType;
}

export class Categoria implements ICategoria {
   id = '';
   name = '';
   type: TStackType = '0dev';

   constructor(nombre: string, type: TStackType) {
      this.id = generateId();
      this.name = nombre;
      this.type = type;
   }
}
