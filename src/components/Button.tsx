type Props = {
    onClick(): void;
    title: string;
}

function Button({ title, onClick } : Props) {
    return(
        <>
            <button onClick={onClick} className="shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white">
                <span>{title}</span>
            </button>
        </>
        
    )
}

export default Button;