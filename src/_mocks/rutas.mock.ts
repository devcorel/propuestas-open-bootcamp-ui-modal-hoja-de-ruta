import { HojaRuta } from '../models/hojaRuta.class';

import toDev from '../assets/devicon-original.svg';
import fullstackImage from '../assets/fullstack_white.png';
import frontedImage from '../assets/frontend_white.png';
import backendImage from '../assets/backend_white.png';
import mobileImage from '../assets/mobile_white.png';
import testerImage from '../assets/tester_white.png';
import gameDevImage from '../assets/videogames_white.png';
import roadMap from '../assets/road_map.png';

import {
   cursos0Dev,
   cursosFullstack,
   cursosFrontend,
   cursosFrontendReact,
   cursosFrontendAngular,
   cursosBackend,
   cursosBackendNet,
   cursosBackendNode,
   cursosMobileMobile,
} from './cursos.mock';

export const rutas = [
   new HojaRuta(
      'De 0 a Dev',
      cursos0Dev,
      'Si no sabes nada de programación, este curso es especial para ti!',
      toDev,
      '',
      '0dev'
   ),
   new HojaRuta(
      'Fullstack',
      cursosFullstack,
      'Aprende tanto las tecnologias frontend y backend. Recomendada para la mayoría de alumnos.',
      fullstackImage,
      '',
      'fullstack'
   ),
   new HojaRuta(
      'Frontend',
      cursosFrontend,
      'Aprende a crear interfaces web dinámicas con las tecnologías modernas',
      frontedImage,
      '',
      'frontend'
   ),
   new HojaRuta(
      'ReactJs',
      cursosFrontendReact,
      'Especializate en ReactJs, el lenguaje que utiliza Facebook para crear las interfaces de sus productos.',
      '',
      'devicon-react-original',
      'frontend'
   ),
   new HojaRuta(
      'Angular',
      cursosFrontendAngular,
      'Aprende de una tecnología muy popular mantenida por Google',
      '',
      'devicon-angularjs-plain',
      'frontend'
   ),
   new HojaRuta(
      'Backend',
      cursosBackend,
      'Aprende a crear soluciones excepcionales',
      backendImage,
      '',
      'backend'
   ),
   new HojaRuta(
      'Backend .NET',
      cursosBackendNet,
      'El lenguaje mantenido por Microsoft desde hace muchos años.',
      '',
      'devicon-dot-net-plain-wordmark',
      'backend'
   ),
   new HojaRuta(
      'Backend Node',
      cursosBackendNode,
      'Aprende NodeJs una tecnología reciente para crear apis y servers con Javascript',
      '',
      'devicon-nodejs-plain',
      'backend'
   ),
   new HojaRuta(
      'Mobile',
      cursosMobileMobile,
      'Aprende a crear aplicaciones para smartphones y tablets',
      mobileImage,
      '',
      'mobile'
   ),
   new HojaRuta(
      'Game Developer',
      cursosBackendNet,
      'Si te gustan los videojuegos, con ésta ruta aprenderás a crear uno por tí mismo.',
      gameDevImage,
      '',
      'videogames'
   ),
];
