

const Card = ({task}) => {
    return (
        <form 
            className="flex w-100 justify-between mt-4 border border-gray-600 border-solid p-3 rounded-md items-center">
            <p>{task.title}</p>
            <button
                className={`rounded-md px-3 select-none text-white py-1 capitalize ${task.status === 'incompleted' ? "bg-red-500" : "bg-green-500"}`}
            >{task.status}</button>
        </form>
    )
}


export default Card;