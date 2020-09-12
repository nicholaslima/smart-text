

import React from 'react';
import Header from '../../components/header/header';
import { Container,Titulo,Jogador } from './style';

const Conta:React.FC = () => {
    return(
        <>
            <Header></Header>
            <Container>
                <Titulo>pontuações do jogador</Titulo>

                <Jogador>
                    <div><span>nome:</span> jogador</div>
                    <div><span>email:</span> nc@email.com</div>
                    <div><span>idade:</span> 45</div>
                    <div><span>sexo:</span> M</div>
                </Jogador>
                
            </Container>
        </>
    )
}

export default Conta;