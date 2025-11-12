import {ProdutosContext} from './ProdutosContext.jsx'
import { useEffect, useState } from 'react'


function ProdutosProvider({children}) {
    const [produtos, setProdutos] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response=>response.json())
        .then(dados=>setProdutos(dados))
        .catch(erro=>console.log(erro))
    } ,[])
    return (
        <ProdutosContext.Provider value={{produtos}}>
            {children}
        </ProdutosContext.Provider>
    )
}

export default ProdutosProvider