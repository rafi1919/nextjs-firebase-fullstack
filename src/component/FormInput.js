

const FormInput=({value, onChange, type, name, id, placeholder})=>{
    return(
        <input className="text-black " value={value} onChange={onChange} required type={type} name={name} id={id} placeholder={placeholder}/>
    )
}
export default FormInput