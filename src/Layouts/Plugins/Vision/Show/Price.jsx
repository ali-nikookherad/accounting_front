import React from 'react';
import { ListGroup, Badge } from 'react-bootstrap';

export function Price(props) {
    return (
        <ListGroup.Item as="li">
            <Badge bg='primary' className='text-nowrap'>    
                {props.price.title}
            </Badge>
            <p className='opacity-5'>
                {props.price.description}
            </p>
        </ListGroup.Item>
    );
}

// export default PriceLi;