# Instrucciones para David

> Estos son los pasos a seguir, estructurados con tal de que practiques ciertas habilidades útiles y busques por ti mismo soluciones a problemas sin que yo te los resuelva, convirtiéndote así en un mejor desarrollador.

He cogido un codigo más complejo y he eliminado gran parte de ese codigo que no es relevante para este caso de uso concreto que buscamos.
No lo he eliminado todo, por lo que encontrarás algunas partes del codigo que pensarás que no tienen sentido (porque otros bloques de codigo relacionados han sido eliminados).

## Objetivo

Que desarrolles una pequeña tarea de desarrollo front-end de manera profesional y en un entorno real, que involucre no solo desarrollo de código sobre una base de código ya existente si no también ciertos componentes de trabajo en equipo. No te desanimes cuando no sepas cómo hacerlo, se trata de aprender y mejorar.

## Proceso a seguir

1. **Desde la rama de desarrollo `develop`**, desarrollarás las tareas listadas abajo de manera individual y en orden y adaptando nombres y funcionalidades al objetivo de negocio buscado.
2. Por cada tarea individual deberás crear una rama nueva llamada `feature/<ticket_de_la_tarea>` y trabajar de manera aislada en esa funcionalidad desde esa rama. Si trabajas en varias funcionalidades a la vez (o vuelves a trabajar en alguna pasada), te asegurarás de cambiar a la rama adecuada. El trabajo en proceso puedes guardarlo con `git stash` y volver a ello más tarde.
3. Una vez terminada una tarea, la **marcarás en la lista**, harás **commit** y también **PR (Pull Request)**.
   Yo mismo revisaré y "mergearé" (hacer merge) sobre la rama principal si corresponde, si no, te daré feedback para que lo arregles (deberás arreglarlo en la rama `feature` que corresponda a esa tarea).
4. Cambiarás de rama para el desarrollo de otra de las funcionalidades.
5. Usar el codigo de referencia como referencia unicamente, las nuevas funcionalidades deben desarrollarse en la web que está en producción.

## ¿Qué hacer si no se cómo hacer algo?

Acostumbrarte a esa sensación y tirar palante sin darle tanta importancia. Es el día a día del desarrollador. Nos pagan por solucionar problemas y buscarnos la vida. Google, StackOverflow y en muchísima menor medida ChatGPT, son tus amigos.

## To-do list:

> Puedes usar el formulario actual como referencia de las preguntas que se van a hacer. Pero NO utilizar imágenes de fondo.

- [ ] `#feature/start`: Soy capaz de ejecutar el proyecto en mi pc: Tengo instalado Node, Yarn, SourceTree y dependencias del proyecto con `yarn install` o solo `yarn` (desde la ruta donde alojas el proyecto). He pegado un vistazo al código para intentar entender cómo se relacionan sus diferentes partes y he investigado un poco la documentación sobre MUI (Minimal UI) en Google.
- [ ] `#feature/form-placeholder`: He creado un nuevo componente con el texto "FORMULARIO VA AQUI" y he modificado las rutas de la app para que lo cargue al visitar `/lead-magnets/profit-calculator-gp-001`.
- [ ] `#feature/004`: En ese nuevo componente, he sido capaz de crear un formulario con dos campos usando React MUI dentro de la misma "etapa". He usado el código de referencia para inspirarme.
- [ ] `#feature/005`: He sido capaz de hacer que el formulario tenga múltiples etapas y el usuario pueda navegar entre ellas.
- [ ] `#feature/006`: Agregar validación al formulario para que solo se pueda introducir la info esperada y no otro tipo de datos.
- [ ] `#feature/007`: Con cada avance de etapa, se llamará a una función denominada `onNextStep` (nueva que tendrás que crear) que contendrá un `switch statement` con un case para cada paso/step del formulario. Dentro de cada caso agregaremos un console.log con un texto que nos diga en que etapa estamos.
- [ ] `#feature/008`: Modificaremos los cases del `switch` para ejecutar las comprobaciones u operaciones necesarias en ese punto de ejecución, tales como llamadas a una API. Más detalles serán proporcionados más adelante.
- [ ] `#feature/009`: En ciertos campos, se harán comprobaciones para saber si la respuesta del usuario cumple ciertos requisitos de **cualificación**.
      Si los cumple, continuaremos el flow... pero si no los cumple, le haremos saltar directamente al paso final, mostrándole que NO cualifica, y haciendo una http request de tipo UPDATE a la API.
- [ ] `#feature/010`: Usuario que no cualifique debemos sugerirle que no se va con las manos vacías, que nos escriba por DM en instagram la palabra "3K REGALO" y le ayudaremos a empezar su negocio de manera sólida pasando de 0 a 3000€/mes en ingresos recurrentes mensuales. Agregar boton que dirija al usuario a Instagram.
- [ ] `#feature/011`: Adaptar estilos CSS para que sea **responsive** y se vea bien en móviles y tablets.
- [ ] `#feature/012`: Hacer que los campos sean blanco puro y el fondo del formulario #dedede.
- [ ] `#feature/013`: Comprobar que las validaciones de campos de formulario funcionan correctamente.
- [ ] `#feature/014`: Hacer comprobaciones de **edge cases** y solucionar defectos que vayan surgiendo. Revisar todos los comentarios que inician con `// TODO`.
- [ ] `#feature/cookie-alert`: Investigar la mejor manera de agregar un aviso de cookies (GDPR) con React e implementarlo.
- [ ] ¿Alguna mejora extra que quieras realizar? ¿Tal vez organizar mejor el código?
