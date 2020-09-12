

import React from 'react';
import Header from '../../components/header/header';
import { Container,Titulo,Lista,Jogador } from './style';

const Pontuacoes:React.FC = () => {
    return(
        <>
            <Header></Header>
            <Container>
                <Titulo>pontuações do jogador</Titulo>

                <Jogador>
                    <div><span>nome:</span> jogador</div>
                    <div><span>email:</span> nc@email.com</div>
                </Jogador>

                <Lista>
                        <div className="row superior">
                            <div className="col">acertos</div>
                            <div className="col">erros</div>

                        </div>
                        <div className="row">
                            <div className="col">1257</div>
                            <div className="col">75577</div>
                        </div>

                        <div className="row">
                            <div className="col">563</div>
                            <div className="col">45</div>
                        </div>
                </Lista>
                
            </Container>
        </>
    )
}

export default Pontuacoes;