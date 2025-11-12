import { useContext } from 'react';
import { ProdutosContext } from '../contextos/ProdutosContext';
import CardProduto from '../componentes/CardProduto';


function Home() {
    const {produtos} = useContext(ProdutosContext);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', border: '1px solid #ccc', padding: '10px' }}>
                {produtos.map((produto,index)=>{
                    return <CardProduto key={index} imagem={produto.image} nomeProduto={produto.title} preco={produto.price} id={produto.id}/>
                }
                )}
            </div>
        </div>
    );
}
export default Home;