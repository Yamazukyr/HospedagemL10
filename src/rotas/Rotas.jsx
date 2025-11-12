import Home from "../paginas/Home";
import DetalheProduto from "../paginas/DetalheProduto";
import PaginaNaoEncontrada from "../paginas/PaginaNaoEncontrada";
import Carrinho from "../paginas/Carrinho";

import {Routes, Route} from "react-router-dom";

function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos/:id" element={<DetalheProduto />} />
            <Route path="/carrinho" element={<Carrinho />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
    )
}

export default Rotas;