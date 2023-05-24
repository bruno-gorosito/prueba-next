

const Card = ({task}) => {
    return (
        <div className="flex w-100 justify-between mt-4 border border-gray-600 border-solid p-3 rounded-md items-center">
            <p>{task.title}</p>
            <button
                className="rounded-md bg-cyan-400 px-3 py-1 capitalize"
            >{task.status}</button>
        </div>
    )
}


export default Card;