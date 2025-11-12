import {CarrinhoContext} from '../contextos/CarrinhoContex'
import { useState } from 'react'

function CarrinhoProvider({children}) {
    const [carrinho, setCarrinho] = useState([])
    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    )
}

export default CarrinhoProvider