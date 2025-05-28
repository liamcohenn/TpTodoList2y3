En lugar de crear un componente TodoApp.jsx, centralicé la estructura principal en el archivo App.jsx, y distribuí la interfaz en componentes reutilizables.

src/
├── components/
│   ├── TodoForm.jsx        → Input para crear nuevas tareas
│   ├── TodoList.jsx        → Lista completa de tareas
│   ├── TodoItem.jsx        → Representación visual de una sola tarea
│   ├── FilterButtons.jsx   → Filtros visuales + botón eliminar completadas y calcular rápida
└── App.jsx                 → Componente principal que organiza la estructura

- TodoForm.jsx: representa el formulario para crear tareas. Incluye el input de texto, pero el botón de añadir se separó en el componente Button.jsx para reutilización.

- TodoList.jsx: Renderiza una lista de TodoItems, recibe como prop la lista de tareas hardcodeadas.

- TodoItem.jsx: Muestra una tarea con su estado (pendiente o completada) y sus fechas.

- FilterButtons.jsx: Contiene los botones de filtros ("Todas", "Pendientes", "Completadas") y los botones de "Eliminar completadas" y "Calcular tarea más rápida". Es un bloque visual, no funcional.

- App.jsx: tiene la estructura global de la app, organiza y distribuye los componentes. Simula los datos (tareas) mediante variables hardcodeadas.

¿Por qué no usé TodoApp.jsx?
- La estructura del proyecto es simple y no necesita encapsular más de lo que ya está en App.jsx.
- Preferí tener un codigo mas claro y simple, dejando App.jsx como el centro de la interfaz.
