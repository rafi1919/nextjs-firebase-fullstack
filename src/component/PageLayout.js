

const PageLayout=({children})=>{
    return(
        <div className="w-full h-[100vh] bg-slate-300 flex justify-center items-center">
            <div className="flex justify-center items-center">
            {children}
            </div>
        </div>
    )
}

export default PageLayout