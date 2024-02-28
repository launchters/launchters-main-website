> Repo de la Web oficial publicada en: [https://launchters.com](https://launchters.com).

## Prohibiciones

#### Hacer cambios que afecten a las ramas:

- `main`
- `gh-pages`

#### Ejecutar comandos:

- `deploy` (npm run deploy o yarn deploy)

## Objetivo

Que desarrolles una pequeña tarea de desarrollo front-end de manera profesional y en un entorno real, que involucre no solo desarrollo de código sobre una base de código ya existente si no también ciertos componentes de trabajo en equipo. No te desanimes cuando no sepas cómo hacerlo, se trata de aprender y mejorar y solidificar ciertos conocimientos que reduzcan las dudas de potenciales empleadores para contratarte al reducir sus riesgos.

En este proyecto desarrollarás un formulario multi-etapa en una ruta separada: `lm/profit-calc-gp-001`. Este formulario deberá tener un solo campo en cada etapa.
He agregado un proyecto de referencia para que te inspires. Esa carpeta será eliminada en el futuro pero puedes usarlo ahora para inspirarte y ver como hice un formulario multietapa (para agregar empleados) y que incluía varios campos en cada etapa y que además permitía inyectar otros formularios diferentes (para agregar empresas o clientes también).
Esto podrás verlo dentro de la carpeta `form-by-steps`.
Puedes usar el código que quieras de ahí como referncia, pero esa carpeta y su contenido serán eliminados.

### Instrucciones para David

> Estos son los pasos a seguir, estructurados con tal de que practiques ciertas habilidades útiles y busques por ti mismo soluciones a problemas sin que yo te los resuelva, convirtiéndote así en un mejor desarrollador.

He cogido un codigo más complejo y he eliminado gran parte de ese codigo que no es relevante para este caso de uso concreto que buscamos.
No lo he eliminado todo, por lo que encontrarás algunas partes del codigo que pensarás que no tienen sentido (porque otros bloques de codigo relacionados han sido eliminados).

## Objetivo

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

Ejecuta las siguientes tareas y márcalas como completadas con [x] cuando vayas a hacer el commit.

#### Primeros pasos:

- [x] Hacer `git clone` del proyecto y ejecutarlo en local (`start`) tras haber instalado las dependencias (`install`).
- [x] Asegurarme de haber instalado Node, SourceTree y Yarn en mi pc antes de empezar.
- [x] Posicionarme en la rama `feature/lead-magnets` (usando `git checkout` o SourceTree). Esta será tu rama de trabajo por ahora.
- [x] Agregar algún cambio. Por ejemplo: agregar mi propio script al `package.json` que diga `echo COMPLETADO`.
- [x] Hacer mi primer commit con `git commit` o con SourceTree.
- [x] Traerse los cambios que hubiese en el servidor, dentro de esta rama a mi local, utilizando `git fetch` (consulta) y `git pull` (Traerselo).
- [x] Crear mi propia rama de tipo `feature/*`.
- [ ] Abrir mi primer PULL REQUEST solicitando que la rama `feature/lead-magnets` se una a `develop`.

#### Al lío:

- [ ] Crear nueva ruta `lm/profit-calc-gp-001` en `routes.tsx` donde carguemos un componente 'dummy' como placeholder. Asegurarse de incluir `profit-cal-gp-001` como subruta de `lm`.
- [ ] `#feature/form-start`: Crear un nuevo componente por separado llamado `ProfitCalcGPLeadMagnetForm` con este código:
```
  <><Typography>AQUÍ IRÁ MI FORMULARIO PARA ESTE CASO DE USO (USE CASE)</Typography><>
```
- [ ] `#feature/form-steps`: He creado un componente `ProfitCalcGPLeadMagnetForm`, que contiene formulario básico de ejemplo que incluye 3 campos y navegación por etapas y he usado un `LeadMagnetFormLayout`.
  - Ver projecto `form-by-steps` como referencia, concretamente la **ruta** que carga el formulario de **AGREGAR STAFF** en `routes.tsx`, el `FormLayout` y el formulario que carga. Nótese como va incrustado como parámetro dentro de un componente algo más genérico llamado `FormLayout` que carga el mismo layout para todos los formularios que se le pasen como un hijo. Aplicar el mismo enfoque a nuestro caso de uso, ya que formularios para lead magnets habrá de distintos tipos en el futuro.
  - He abstraido las partes comunes a otros formularios a `LeadMagnetFormLayout` (inyectando `ProfitCalcGPLeadMagnetForm` dentro de `FormLayout` como parametro).
- [ ] `#feature/next-step-handler`: Agregar a la configuración de los pasos (steps) una función "onStepChanged" que contendrá un mensaje diferente de `console.log` para cada step (de ejemplo). Más adelante le agregaremos funcionalidad real. <!-- : Http Request a Notion como Database -->

### Más detalles e instrucciones serán provistas al terminar estas tareas.

<!--
NOTAS PARA FUTURAS INSTRUCCIONES:
- [ ] `#feature/dynamic-jump`: Haremos que bajo ciertas condiciones en ciertas etapas el formulario "salte" al uno de los múltiples finales (más instrucciones serán provistas)
- [ ] `#feature/finals-ui`: Más instrucciones serán provistas.
- [ ] `#feature/responsiveness`: Adaptar estilos CSS para que sea **responsive** y se vea bien en móviles y tablets.
- [ ] `#feature/field-colors`: Hacer que los campos sean blanco puro y el fondo del formulario #dedede u otro que quede bien.
- [ ] `#feature/validation`: Agregar/Comprobar validación de campos para que solo se pueda introducir la info esperada y no otro tipo de datos.
- [ ] `#feature/soft-testing`: Hacer comprobaciones de **edge cases** y solucionar defectos que vayan surgiendo. Revisar todos los comentarios que inician con `// TODO`.
- [ ] ¿Alguna mejora extra que quieras realizar? ¿Tal vez organizar mejor el código?
- [ ] `#feature/cookie-alert`: Investigar la mejor manera de agregar un aviso de cookies (GDPR) con React e implementarlo.
-->
