import { Curso } from '../models/curso.class';

const cursosInicio = [
   new Curso(
      'Introducción a la programación',
      11,
      '9h 33min',
      '',
      'devicon-devicon-plain colored',
      true
   ),
   new Curso('GIT', 10, '5h 18min', '', 'devicon-git-plain colored', true),
];
const cursosHtml = [
   new Curso(
      'HTML y CSS',
      15,
      '17h 43min',
      '',
      'devicon-html5-plain colored',
      true
   ),
];

const cursosJavaScript = [
   new Curso(
      'JavaScript Básico',
      17,
      '15h 24min',
      '',
      'devicon-javascript-plain colored',
      true
   ),
];

const cursosPyton = [
   new Curso(
      'Python',
      15,
      '17h 43min',
      '',
      'devicon-python-plain colored',
      false
   ),
   new Curso('Django', 19, '14h 25min', '', 'devicon-django-plain', false),
];

const cursosJava = [
   new Curso('JAVA', 17, '15h 24min', '', 'devicon-java-plain colored', false),
   new Curso(
      'Spring',
      29,
      '30h 9min',
      '',
      'devicon-spring-plain colored',
      false
   ),
   new Curso('Jest', 29, '31h 42min', '', 'devicon-jest-plain colored', false),
];

const cursosReact = [
   new Curso(
      'ReactJS',
      29,
      '30h 9min',
      '',
      'devicon-react-original colored',
      true
   ),
   new Curso(
      'ReactJS Avanzado',
      29,
      '31h 42min',
      '',
      'devicon-react-original-wordmark colored',
      false
   ),
];

const cursosAngular = [
   new Curso('Angular', 25, '30h 9min', '', 'devicon-angularjs-plain', false),
   new Curso(
      'Angular Avanzado',
      20,
      '31h 42min',
      '',
      'devicon-angularjs-plain colored',
      false
   ),
];

const cursosNode = [
   new Curso(
      'NodeJS',
      15,
      '30h 9min',
      '',
      'devicon-nodejs-plain colored',
      false
   ),
   new Curso(
      'Exrpess',
      14,
      '31h 42min',
      '',
      'devicon-express-original colored',
      false
   ),
   new Curso(
      'AdonisJs',
      18,
      '42h 23min',
      '',
      'devicon-adonisjs-original colored',
      false
   ),
];

const cursosCsharp = [
   new Curso('C#', 15, '30h 9min', '', 'devicon-csharp-plain colored', false),
   new Curso(
      'C# Avanzado',
      14,
      '31h 42min',
      '',
      'devicon-csharp-plain colored',
      false
   ),
   new Curso(
      '.NET',
      10,
      '5h 18min',
      '',
      'devicon-dotnetcore-plain colored',
      false
   ),
];

const cursosMobile = [
   new Curso(
      'Kotlin',
      15,
      '30h 9min',
      '',
      'devicon-kotlin-plain colored',
      false
   ),
   new Curso(
      'XCode',
      14,
      '31h 42min',
      '',
      'devicon-xcode-plain colored',
      false
   ),
   new Curso(
      'IONIC',
      23,
      '21h 11min',
      '',
      'devicon-ionic-original colored',
      false
   ),
   new Curso(
      'React Native',
      14,
      '31h 42min',
      '',
      'devicon-react-original colored',
      false
   ),
];

export const cursosFullstack = [
   ...cursosInicio,
   ...cursosHtml,
   ...cursosJavaScript,
   ...cursosPyton,
];
export const cursos0Dev = [...cursosInicio, ...cursosHtml, ...cursosJavaScript];

export const cursosFrontend = [
   ...cursosInicio,
   ...cursosHtml,
   ...cursosJavaScript,
];
export const cursosFrontendReact = [...cursosFrontend, ...cursosReact];
export const cursosFrontendAngular = [...cursosFrontend, ...cursosAngular];

export const cursosBackend = [...cursosInicio, ...cursosPyton, ...cursosJava];
export const cursosBackendNode = [...cursosInicio, ...cursosNode];
export const cursosBackendNet = [...cursosInicio, ...cursosCsharp];

export const cursosMobileMobile = [...cursosInicio, ...cursosMobile];
