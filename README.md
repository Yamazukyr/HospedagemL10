# Aula de Revisão

- Objetivos: Revisar os conteúdos anteriores
- UseState : Controle de estado
- UseEffect : Aplicação de efeito colateral ( no consumo de API)
- CreateContext e  UseContext : Criação e uso de contexto pela aplicação
- React-router-DOM : Navegação entre muitas páginas no contexto do single page application 
- UseParams : Permite captar parâmetros da rota

## Qual a estrutura do projeto:

Página Home : Mostrará todos os produtos em cards ( React Bootstrap) dos produtos da Fake Story API
Página Detalhe de produto: Usará o Hook useParams para captar o parâmetro id da rota e exibir apenas o produto com o id na URL
Página Carrinho: mostrará todos os produtos adicionados ao carrinho, podendo retirar produtos específicos. Mostrará o total a ser pago na compra. 

## Como iniciar o projeto:

- Instalação das depedências : 
    - React-router-dom
    - Bootstrap 
    - React-bootstrap

```
npm install react-router-dom bootstrap react-bootstrap 
```

- Estruturação das pastas
    - Componentes:
        -- BarraNavegação.jsx
    - Paginas
        -- Home.jsx
        -- DetalheProduto.jsx
        -- Carrinho.jsx
        -- PaginaNaoEncontrada.jsx
    - Contextos
        -- CarrinhoContext.jsx
        -- CarrinhoProvider.jsx
        -- ProdutosContext.jsx
        -- ProdutosProvider.jsx
    - Rotas
        --Rotas.jsx