import { useState } from 'react'
import Rotas from './rotas/Rotas.jsx'
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import CardProduto from './componentes/CardProduto.jsx'
import CarrinhoProvider from './contextos/CarrinhoProvider.jsx'
import ProdutosProvider from './contextos/ProdutosProvider.jsx'

function App() {
  

  return (
    <>
      <h1>Aula 34</h1>
      
      <BrowserRouter>
      <ProdutosProvider>
        <CarrinhoProvider>
          <Rotas />
        </CarrinhoProvider>
      </ProdutosProvider>
        
      </BrowserRouter>
    </>
  )
}

export default App
