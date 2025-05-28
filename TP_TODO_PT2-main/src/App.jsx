import { useState, useEffect } from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import './App.css';
import './index.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
              completedAt: !todo.completed ? Date.now() : null,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addQuickTask = () => {
    addTodo("Tarea rápida");
  };

  const clearAll = () => {
    if (confirm("¿Eliminar todas las tareas?")) {
      setTodos([]);
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const getFastestTask = () => {
    const completedTasks = todos.filter((t) => t.completed && t.completedAt);
    if (completedTasks.length === 0) {
      alert("No hay tareas completadas aún.");
      return;
    }
  
    const fastest = completedTasks.reduce((a, b) => {
      const durationA = a.completedAt - a.id;
      const durationB = b.completedAt - b.id;
      return durationA < durationB ? a : b;
    });
  
    alert(`La tarea completada más rápido fue: "${fastest.text}"`);
  };
  
  return (
    <div className="todo-app">
      <div className="container mt-5 p-4 shadow">
        <TodoForm onAdd={addTodo} />
  
        <FilterButtons
            current={filter}
            onFilterChange={setFilter}
            onQuickAdd={addQuickTask}
            onClearAll={clearAll}
            onFastest={getFastestTask}
        />
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleComplete}
          onDelete={deleteTodo}
        />
      </div>
    </div>
  );
  
}

export default App;
