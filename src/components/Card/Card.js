import React from 'react';
import { Container } from './styles';

const Card = (props) => {
    return (
        <Container>
            
                <h1>{props.title}</h1>
                <h4>Nome: {props.name}</h4>
                <p>Idade: {props.age}</p>
                <p>Cidade: {props.city}</p>
                <p>Profissão: {props.career}</p>
            
        </Container>
    )
}

export default Card;
