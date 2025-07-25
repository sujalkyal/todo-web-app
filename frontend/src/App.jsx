import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("localhost:3000/todos")
  // .then( async (response)=>{
  //   const json = await response.json();
  //   setTodos(json.todos);
  // });

  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos} />
    </div>
  )
}

export default App
