# Propuesta ui - modal Seleción de hoja de Ruta

## Para [Open Bootcamp](https://open-bootcamp.com/)

<br/>

![Watchers](https://img.shields.io/github/watchers/devcorel/propuestas-open-bootcamp-ui-modal-hoja-de-ruta.svg)
![Visitors](https://visitor-badge.glitch.me/badge?page_id=devcorel.propuestas-open-bootcamp-ui-modal-hoja-de-ruta)
![Starts](https://img.shields.io/github/stars/devcorel/propuestas-open-bootcamp-ui-modal-hoja-de-ruta.svg)
![Forks](https://img.shields.io/github/forks/devcorel/propuestas-open-bootcamp-ui-modal-hoja-de-ruta.svg)
![Follow Me](https://img.shields.io/github/followers/devcorel.svg?style=social&label=Follow&maxAge=2592000)<br/>
<br/>

## Descripción

<br/>
A continuación comparto algunos cambios que me gustarían añadieran al componente modal de selección de hoja de ruta.

Al final de éste documento se muestra una **_Demo_** funcional y un **_CodeSandbox_** para interactuar con el código en tiempo real.

---

<br/>

## Tecnologías y librerías utilizadas

<br/>

-  [Vite](https://vitejs.dev/) - Para la creación del proyecto.

-  [React](https://reactjs.org/) - Para el desarrollo de la interfaz

-  [Typescript](https://www.typescriptlang.org/) - Para el desarrollo del código

-  [Tailwind CSS](https://tailwindcss.com/) - Para el diseño de la interfaz

-  [React Icons](https://react-icons.github.io/react-icons) - Para los iconos de los botones

-  [DevIcon ❤️](https://devicon.dev/) - Para los iconos de las tecnologías

<br/>

---

<br/>

## Implementaciones

<br/>

### **_Slide Info_**

<br/>

#### PROBLEM

En el modo mobile. Al seleccionar una ruta, no se muestra la información de la ruta ni tampoco el listado de los cursos que contiene.

#### FIXED

Se implementó una ventana _**slide**_ para mostrarse cada que se haga click en una ruta.

Se añade un efecto _**blur**_, un _div_ _**mask**_ y un botón _**close**_ para cerrar el slide.

Tanto el _div_ _**mask**_ como el botón _**close**_ al hacer click en ellos, cerrarán el slide.

<br/>

| PROBLEM                                                                      | FIXED                                                                    |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Problem Click Nothing](./design_fixes_images/old_click_nothing_edited.png) | ![Fix Open Slide](./design_fixes_images/fix_click_open_slide_edited.png) |

<br/><br/>

### **_Scroll_ Horizontal en Categorias**

<br/>

#### PROBLEM

Al hacer _scroll_ horizontalmente en el componente de categorías, se arrastra también la sección de listado de rutas.

#### FIXED

La sección de listado de rutas ya no se moverá al hacer _scroll_ horizontalmente en el componente de categorías.

<br/>

| PROBLEM                                                                              | FIXED                                                                            |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- |
| ![Problem Scroll Categories](./design_fixes_images/old_scroll_categories_edited.png) | ![Fix Scroll Categories](./design_fixes_images/fix_scroll_categories_edited.png) |

<br/><br/>

### **_Scroll_ Vertical en Listado de Rutas**

<br/>

#### PROBLEM

Al hacer _scroll_ verticalmente en el listado de rutas, el componente de categorías se mueve con el listado haciendolo desaparecer al hacer _scroll_ hacia abajo.

#### FIXED

La sección categorías ya no se moverá al hacer _scroll_ verticalmente en el listado de rutas.

Así mismo, se han implementado unos botones de navegación para poder navegar entre las categorías sin hacer _scroll_.

| PROBLEM                                                                                                                 | FIXED                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Problem Categories Disappear on Scroll Down](./design_fixes_images/old_categories_disapear_on_scroll_down_edited.png) | ![Fix Categories Persists on Scroll Donw](./design_fixes_images/fix_categories_persist_on_scroll_down_edited.png) |

<br/><br/>

### **Botones de navegación en modo _mobile_ (UX)**

<br/>

#### PROBLEM

En el modo para dispositivo móviles, la sección de categorías es difícil de acceder para el pulgar de la mano porque están en la parte superior de la pantalla.

#### FIXED

Se implementaron botones de navegación cercanos al dedo pulgar de la mano para poder navegar entre las categorías.

<br/>

| PROBLEM                                                                                                              | FIXED                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Problem Categories Big Thumb Distance](./design_fixes_images/old_categories_without_button_navigations_edited.png) | ![Fix Categories Big Thumb Distance](./design_fixes_images/fix_categories_button_navigation_on_mobile_edited.png) |

---

<br/>

## Let's code!

<br/>

[Demo](https://ui-modal-hoja-de-ruta.vercel.app/)

[Play in CodeSandBox](https://codesandbox.io/s/component-ui-hoja-de-ruta-9cl08i)

[GitHub](https://github.com/devcorel/propuestas-open-bootcamp-ui-modal-hoja-de-ruta)

<br/>

---

<br/>

![Open Bootcamp](https://badgen.net/badge/Thanks!/OpenBootcamp/blue?icon=kofi)

<br/><br/><br/><br/>

![With Love <3](https://forthebadge.com/images/badges/built-with-love.svg)

---

![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Zorin Os](https://img.shields.io/badge/Zorin%20OS-0CC1F3?style=for-the-badge&logo=zorin&logoColor=white)
![Visual Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ReactJs](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
