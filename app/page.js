'use client'

import axios from 'axios'
import Card from './components/Card'
import { useEffect, useState } from 'react'




export default function Home() {

  const [todos, setTodos] = useState([]);

  const loadTask = async() => {
    const res = await axios.get('/api/todos');
    const tasks = res;
    console.log(res.data.tasks)
    setTodos(res.data.tasks);
  }


  useEffect(() => {
    loadTask();
  }, [])

  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-col text-center mt-8">
        {todos.length !== 0
          ? (
            todos.map(task => (
              <Card 
                key={task._id}
                task={task}
              />
            ))
          )
          : <p>No hay elementos</p>
        }
      </div>
    </>
  )
}


