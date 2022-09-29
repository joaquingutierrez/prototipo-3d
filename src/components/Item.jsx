import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './styles/Item.css'

const Item = ({ product }) => {
    const productURL = '/item/' + product.id
    return (
        <>
            <Card>
                <div className="imageProductContainer">
                    <Card.Img className="imageProduct" src={product.image} />

                </div>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Link to={productURL}>
                        <Button variant="success">Ver más detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}


export default Item