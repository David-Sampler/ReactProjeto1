import './style.css'

let Botao = (props) =>{
     return(

         <button disabled={props.disabled} className='btn' onClick={props.detalhe} >{props.text}</button>
     )
}

export default Botao