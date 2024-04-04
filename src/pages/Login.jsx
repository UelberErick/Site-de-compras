import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login () {
const navigate = useNavigate()
const [email, setEmail] = useState ([])
const [senha, setSenha] = useState ([])
const [valid, setValid] = useState (true)


 const handleOnchange = (event) => {
    const { value } = event.target
    setEmail(value)


const emailEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
setValid (emailEX.test(value))
 } 


 const handleClick = () => {
    if (senha.length >= 8 ) {
        navigate('/products')
    }
 }


return (
    <>
    <h2>Login</h2>
    <label htmlFor=""> Email:
    <input type="text" value={email} onChange={handleOnchange}  /> 
    </label>  
    {! valid && <p>Por favor digite um email valido!</p> }
    <br />


   <label htmlFor=""> Senha:
   <input type="password" onChange={({target:{value} }) =>setSenha (value) } />
    </label> 
    <br /> <br />
    <button disabled = {!(senha.length >= 8 )} onClick={handleClick} >
    Enviar
    </button>
    </>
    
)

}
export default Login