# Propuesta ui - modal Seleción de hoja de Ruta

## Para [Open Bootcamp](https://open-bootcamp.com/)

<br/>

## Descripción

<br/>
A continuación comparto algunos cambios que me gustarían añadieran al componente modal de selección de hoja de ruta.

Al final de éste documento se muestra una **Demo** funcional y un **CodeSandbox** para interactuar con el código.

---

<br/>

## Tecnologías y librerías utilizadas

<br/>

-  [React](https://reactjs.org/) - Para el desarrollo de la interfaz

-  [Typescript](https://www.typescriptlang.org/) - Para el desarrollo del código

-  [Tailwind CSS](https://tailwindcss.com/) - Para el diseño de la interfaz

-  [React Icons](https://react-icons.github.io/react-icons) - Para los iconos de los botones

-  [DevIcon ❤️](https://devicon.dev/) - Para los iconos de las tecnologías

---

<br/>

## Implementaciones

<br/>

### **_Slide Info_**

<br/>

<h4 style="color:gray">OLD</h4>

En el modo mobile. Al seleccionar una ruta, no se muestra la información de la ruta ni tampoco el listado de los cursos que contiene.

<br/>

<h4 style="color:green">FIXED</h4>

Se implementó una ventana _**slide**_ para mostrarse cada que se haga click en una ruta.

Se añade un efecto _**blur**_, un _div_ _**mask**_ y un botón _**close**_ para cerrar el slide.

Tanto el _div_ _**mask**_ como el botón _**close**_ al hacer click en ellos, cerrarán el slide.

<br/>

| OLD                                                                      | FIXED                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| ![Old Click Nothing](./design_fixes_images/old_click_nothing_edited.png) | ![Fix Open Slide](./design_fixes_images/fix_click_open_slide_edited.png) |

<br/>
<br/>

### **_Scroll_ Horizontal en Categorias**

<br/>

<h4 style="color:gray">OLD</h4>

Al hacer _scroll_ horizontalmente en el componente de categorías, se arrastra también la sección de listado de rutas.

<br/>

<h4 style="color:green">FIXED</h4>

La sección de listado de rutas ya no se moverá al hacer _scroll_ horizontalmente en el componente de categorías.

<br/>

| OLD                                                                              | FIXED                                                                            |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| ![Old Scroll Categories](./design_fixes_images/old_scroll_categories_edited.png) | ![Fix Scroll Categories](./design_fixes_images/fix_scroll_categories_edited.png) |

<br/>
<br/>

### **_Scroll_ Vertical en Listado de Rutas**

<br/>

<h4 style="color:gray">OLD</h4>

Al hacer _scroll_ verticalmente en el listado de rutas, el componente de categorías se mueve con el listado haciendolo desaparecer al hacer _scroll_ hacia abajo.

<br/>

<h4 style="color:green">FIXED</h4>

La sección categorías ya no se moverá al hacer _scroll_ verticalmente en el listado de rutas.

Así mismo, se han implementado unos botones de navegación para poder navegar entre las categorías sin hacer _scroll_.

<br/>

| OLD                                                                                                                 | FIXED                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Old Categories Disappear on Scroll Down](./design_fixes_images/old_categories_disapear_on_scroll_down_edited.png) | ![Fix Categories Persists on Scroll Donw](./design_fixes_images/fix_categories_persist_on_scroll_down_edited.png) |

<br/>
<br/>

### **Botones de navegación en modo _mobile_ (UX)**

<br/>

<h4 style="color:gray">OLD</h4>

En el modo para dispositivo móviles, la sección de categorías es difícil de acceder para el pulgar de la mano porque están en la parte superior de la pantalla.

<br/>

<h4 style="color:green">FIXED</h4>

Se implementaron botones de navegación cercanos al dedo pulgar de la mano para poder navegar entre las categorías.

<br/>

| OLD                                                                                                              | FIXED                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Old Categories Big Thumb Distance](./design_fixes_images/old_categories_without_button_navigations_edited.png) | ![Fix Categories Big Thumb Distance](./design_fixes_images/fix_categories_button_navigation_on_mobile_edited.png) |

---

<br/>

## Let's code!

<br/>

[Demo](https://comming.soon/)

[CodeSandBox](https://comming.soon/)

[GitHub](https://comming.soon/)
