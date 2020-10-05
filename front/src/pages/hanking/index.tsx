

import React,{ useEffect,useState } from 'react';
import Header from '../../components/header/header';
import { Container,Table,Titulo } from './style';
import api from '../../config/api';

interface JogoType{
    id: string;
    nome: string;
    email: string;
    idade: string;
    sexo: string;
    erros: string;
    pontuacao: string;
}


const Hanking: React.FC = () => {
    const [ jogos,setjogos ] = useState([]);

    const token = localStorage.getItem('@SmartText:token');

    useEffect(() => {
        api.get('/game',{
            headers:{
                authorization: token,
            }
        }).then(response => {
                    setjogos(response.data);
                })
    },[token]);

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
                    {   jogos.map( (jogo:JogoType) => (
                            <div className="row" key={ jogo.id }>
                                <div className="col">{ jogo.nome }</div>
                                <div className="col">{ jogo.email }</div>
                                <div className="col">{ jogo.idade }</div>
                                <div className="col">{ jogo.sexo }</div>
                                <div className="col">{ jogo.erros}</div>
                                <div className="col">{ jogo.pontuacao }</div>
                            </div>
                        ))
                    }
                        
    
                </Table>
            </Container>
            


        </>
    )
}

export default Hanking;