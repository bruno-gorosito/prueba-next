'use client';

import axios from "axios";
import Error from "next/error";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



const Page = () => {

    const router = useRouter();


    const [newTask, setNewTask] = useState({
        title: '', 
        status: ''
    })



    const sendNewTask = async(e) => {
        e.preventDefault();
        newTask.title.trim() === '' ? Error : null;
        await axios.post('/api/todos', newTask)
        router.push('/')
    }

    const handleChange = e => {
        setNewTask({
            ...newTask,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
        <div className="max-w-5xl mx-auto mt-8 lg:px-2 relative">
            
            <form
                className="flex flex-row flex-wrap"
                onSubmit={sendNewTask}
            >
                <Link
                href="/"
                className="w-auto bg-cyan-500 py-2 px-4 rounded text-white"
                >Volver</Link>
                <div className="my-4 px-2 w-full md:w-1/2">
                    <label className="block mb-2">
                        Tarea: 
                    </label>
                    <input 
                        type="text"
                        required
                        name="title"
                        onChange={e => handleChange(e)}
                        placeholder="Ingrese la tarea"
                        className="border border-cyan-500 rounded py-2 pl-4 w-full"
                    />
                </div>
                <div className="my-4 px-2 w-full md:w-1/2">
                    <label className="block mb-2">
                        Estado: 
                    </label>
                    <select 
                        className="border border-cyan-500 rounded py-2 px-4 w-full"
                        name="status"
                        onChange={e => handleChange(e)}>
                        <option disabled selected value="">Seleccione una opcion</option>
                        <option value='completed'>Completed</option>
                        <option value='incompleted'>Incompleted</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="border rounded border-cyan-900 text-white font-bold py-2 px-4 mx-2 w-full bg-cyan-500 ease-linear transition-all hover:bg-cyan-800"
                >Añadir tarea</button>
            </form>
        </div>
        </>
    )
}

export default Page;