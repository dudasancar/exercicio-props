import React from 'react';
import {Btn} from './styles';

const Button = (props) => {
    
    return (
        <div>
            <Btn onClick={props.handleClick}>Clique aqui</Btn>
        </div>
    )
}

export default Button;
