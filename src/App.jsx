import { useState } from 'react'

import Todo from './componentes/Todo';
import './App.css'
import TodoForm from './componentes/TodoForm';
import Search from './componentes/Search';
import Footer from './componentes/Footer';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      enunTarefa: "Criar funcionalidade para o Quiz.",
      categoria: "Trabalho",
      completado: false,
    },
    {
      id: 2,
      enunTarefa: "Passear com o cachorro.",
      categoria: "Doméstico",
      completado: false,
    },
    {
      id: 3,
      enunTarefa: "Momento da leitura.",
      categoria: "Pessoal",
      completado: false,
    },
    {
      id: 4,
      enunTarefa: "Ir ao banco.",
      categoria: "Doméstico",
      completado: false,
    },


  ]);

  const addTodo = (enunTarefa, categoria) => {
    const newTodo = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100),
        enunTarefa,
        categoria,
        completado: false
      },
    ];
    setTodos(newTodo)
  }

  const removTarefa = (id) => {
    const newTodo = [...todos];
    const tarefasfiltradas = newTodo.filter((todo) =>
      todo.id !== id ? todo : null);
    setTodos(tarefasfiltradas);
  };

  const estaCompleta = (id) => {
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id == id ? todo.completado = !todo.completado : todo)
    setTodos(newTodo);
  }

  const [search, setSearch] = useState("");

  return (
    <section className='app'>
      <h1>Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <container className='lstarefas-box'>
        {
          todos.filter((todo) => todo.enunTarefa.toLowerCase().includes(search.toLowerCase()))
            .map((todo) => (
              <Todo key={todo.id} todo={todo} removTarefa={removTarefa} estaCompleta={estaCompleta} />
            ))}
      </container>
      <TodoForm addTodo={addTodo} />
      <Footer />
    </section>
  );
}

export default App
