# Documentación de Archivos en el Directorio `06-mis-custom-hooks`

Este directorio contiene una colección de custom hooks diseñados para reutilizar lógica específica en aplicaciones de React. Los custom hooks son funciones personalizadas que permiten encapsular y compartir lógica entre componentes de manera eficiente.

## Archivos Incluidos

### 1. `useCounter.js`
- **Descripción**: Este hook proporciona una serie de funciones que te permiten administrar un contador.
- **Uso**: Este hook proporciona funciones como: onDecrement que decrementar el contador, onIncrement para incrementa el contador, onSetCounter para modificar el contador, onReset para restaurar al valor por defecto del contador.

### 2. `useFech.js`
- **Descripción**: Este hook maneja el acceso a información consultada de forma asincrona, tambien maneja los diferentes estados al acceder a la información (cargando, error y la data en caso de exito).
- **Uso**: Este hook requiere de un parametro el cual permite tener acceso a la información, este retorna la data en caso de exito, el estado de la consulta con valor true o false donde true significa que esta cargando la información y false que significa que ya ha cargado y el error que nos debuelve un estatus que puede ser un codigo de error indicando la falla en la consulta.

### 3. `useForm.js`
- **Descripción**: Este hook facilita el uso de formularios proporcionando funcionalidades para obtener la infromación, modificación, estado y restauracion del mismo .
- **Uso**: Este hook es usado para obtener la información ingresada en un formulario.

### . `useTodo.js`
- **Descripción**: Este hook facilita la administración de tareas.
- **Uso**: Es usado para modificar, crear, eliminar, obtener las tareas segun estado.

## Notas
- Cada archivo contiene documentación interna que detalla los parámetros, valores de retorno y ejemplos de uso.
- Asegúrate de importar y utilizar los hooks únicamente en componentes funcionales de React.

