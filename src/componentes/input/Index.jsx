import './style.css'

export default function({searchValue,handleChange}){
    return (

        <input onChange={handleChange} value={searchValue} placeholder="O que você Procura" />
    )
}