import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './Item.css'

const Item = ({ product }) => {
    const productURL = '/item/' + product.id
    return (
        <>
            <Card>
                {/*                 <div className="imageContainer">
                    <img className="image" src={product.image} alt={product.name} />
                </div> */}
                <div className="imageProductContainer">
                    <Card.Img className="imageProduct" src={product.image} />

                </div>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ${product.price}
                    </Card.Text>
                    <Link to={productURL}>
                        <Button variant="primary">Ver más detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
        </>
    )
}


export default Item