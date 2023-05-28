import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation';


const Card = ({task}) => {

    const searchParams = useSearchParams();


    const handleStatus = async() => {
        let status = task.status.toLowerCase() === 'incompleted' ?  'completed' : 'incompleted'
        task.status = status;
        const res = await axios.put('/api/todos', {id: task._id, task: {status}})
    }

    const deleteTask = async() => {
        const params = new URLSearchParams(searchParams);
        params.set('id', task._id)
        const api = params.toString();
        const res = await axios.delete(`/api/todos?${api}`)
    }

    return (
        <div 
            className="flex w-100 justify-between mt-4 border border-gray-600 border-solid p-3 rounded-md items-center">
            <p>{task.title}</p>
            <div>
                <button
                    className="rounded-md px-3 py-1 bg-red-500 bg-c text-white capitalize select-none mx-2"
                    onClick={deleteTask}
                >Eliminar</button>
                <button
                    onClick={handleStatus}
                    className={`rounded-md w-36 px-3 select-none text-white py-1 capitalize mx-2 bg-opacity-75 ${task.status === 'incompleted' ? "bg-red-500" : "bg-green-500"}`}
                >{task.status}</button>
            </div>
        </div>
    )
}


export default Card;