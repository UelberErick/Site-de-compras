import { useEffect, useState } from "react"

function Products () {
    const [data, setData] = useState([])

    useEffect(() => {

        
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setData(data) 
       
    }, [])})


return (
<>
<div>

<h1>Produtos</h1>
{data.map(product => (
    <div key={product.id}>
        <button> 
        <h1>{product.title}</h1>
        <img width='20%' src={product.image} alt={product.title} />
        <p>Valor: R$ {product.price}</p>
        </button> 
        <br /> 
        <button>Adicionar</button>
        <br /> <br /> <br />
    </div>
    
))}

</div>
</>
) }

export default Products