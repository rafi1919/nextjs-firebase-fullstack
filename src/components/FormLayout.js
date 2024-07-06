

const FormLayout=({children, title})=>{
    return(
        <div className="p-4 rounded-md bg-white text-black shadow-md shadow-rose-400">
            <div>
                <p className="text-center font-bold border-b-2 border-slate-400">{title}</p>
            </div>
            <div className="py-3">
            {children}
            </div>
        </div>
    )
}

export default FormLayout