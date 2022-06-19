import generateId from '../utils/generateId';

export interface ICurso {
   id: string;
   nombre: string;
   modulos: number;
   duracion: string;
   imagen: string;
   iconClass: string;
   isCompleted: boolean;
}

export class Curso implements ICurso {
   id = '';
   nombre = '';
   modulos = 0;
   duracion = '';
   imagen = '';
   iconClass = '';
   isCompleted = false;

   constructor(
      nombre: string,
      modulos: number,
      duracion: string,
      imagen: string,
      iconClass: string,
      isCompleted: boolean
   ) {
      this.id = generateId();
      this.nombre = nombre;
      this.modulos = modulos;
      this.duracion = duracion;
      this.imagen = imagen;
      this.iconClass = iconClass;
      this.isCompleted = isCompleted;
   }
}
