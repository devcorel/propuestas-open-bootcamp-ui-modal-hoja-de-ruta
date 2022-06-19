import generateId from '../utils/generateId';
import { ICurso } from './curso.class';

export type TStackType =
   | '0dev'
   | 'frontend'
   | 'backend'
   | 'fullstack'
   | 'react'
   | 'angular'
   | 'node'
   | 'net'
   | 'videogames'
   | 'mobile';

export interface IHojaRuta {
   id: string;
   nombre: string;
   cursos: ICurso[];
   descripcion: string;
   imagen: string;
   iconClass: string;
   stackType: TStackType;
}

export class HojaRuta implements IHojaRuta {
   id = '';
   nombre = '';
   cursos: ICurso[] = [];
   descripcion = '';
   imagen = '';
   iconClass = '';
   stackType: TStackType = '0dev';

   constructor(
      nombre: string,
      cursos: ICurso[],
      descripcion: string,
      imagen: string,
      iconClass: string,
      stackType: TStackType
   ) {
      this.id = generateId();
      this.nombre = nombre;
      this.cursos = cursos;
      this.descripcion = descripcion;
      this.imagen = imagen;
      this.iconClass = iconClass;
      this.stackType = stackType;
   }
}
