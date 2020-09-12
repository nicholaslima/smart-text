

import React from 'react';
import Header from '../../components/header/header';
import { Container,Table,Titulo } from './style';

const Hanking: React.FC = () => {
    return(
        <>
            <Header></Header>
            <Container>

                <Titulo>hanking de jogadores</Titulo>
                <Table>
                        <div className="row superior">
                            <div className="col">nome</div>
                            <div className="col">email</div>
                            <div className="col">idade</div>
                            <div className="col">sexo</div>
                            <div className="col">erros</div>
                            <div className="col">pontuação</div>
                        </div>
                        <div className="row">
                            <div className="col">nome</div>
                            <div className="col">email</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                        </div>
                        <div className="row">
                            <div className="col">nome</div>
                            <div className="col">email</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                        </div>

                        <div className="row">
                            <div className="col">nome</div>
                            <div className="col">email</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                            <div className="col">nome</div>
                        </div>
                </Table>
            </Container>
            


        </>
    )
}

export default Hanking;