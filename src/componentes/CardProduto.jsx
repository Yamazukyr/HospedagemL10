import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function CardProduto({preco, nomeProduto, imagem}) {
  return (
    <Link to={`/produto/${id}`}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imagem} />
      <Card.Body>
        <Card.Title>{nomeProduto}</Card.Title>
        <Card.Text>
            R$ {preco}
        </Card.Text>
        <Button variant="primary">Adicionar ao Carrinho</Button>
      </Card.Body>
    </Card>
    </Link>
  );
}

export default CardProduto;