'use client'

import axios from 'axios'
import Card from './components/Card'
import { useEffect, useState } from 'react'
import Link from 'next/link';




export default function Home() {

  const [todos, setTodos] = useState([]);

  const loadTask = async() => {
    const res = await axios.get('/api/todos');
    const tasks = res;
    setTodos(res.data.tasks);
  }


  useEffect(() => {
    loadTask();
  }, [todos])

  return (
    <>
      <div className="max-w-5xl mx-auto flex flex-col px-4 text-center mt-8 mb-4 ">
      <Link
            href="/new-task"
            className="w-auto bg-cyan-500 py-2 px-4 rounded text-white"
            >Añadir nueva tarea</Link>
        {todos.length !== 0
          ? (
            todos.map(task => (
              <Card 
                key={task._id}
                task={task}
              />
            ))
          )
          : <p className='mt-4'>No hay elementos</p>
        }
      </div>
    </>
  )
}


