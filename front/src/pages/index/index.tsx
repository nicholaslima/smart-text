

import React,{ useEffect,useState } from 'react';
import { Player,Pontuacao,BlockBtns,TextoAluno,TextoApi,TextBlock,TextoTeste,Item,ItemTempo,BtnReiniciar,BtnEnviar,BtnExcluir,BtnTrocar } from './style';
import Header from '../../components/header/header';
import { FiCheckCircle,FiRefreshCw,FiTrash } from 'react-icons/fi';
import api from '../../config/api';


const Index: React.FC = () => {

    
interface Texto{
    id: number;
    conteudo: string;
    titulo: string;
    dificuldade: string;
}

    const [ textos,setTexto ] = useState<Texto[]>([]);
    const [ TextoAtual, setTextoAtual ] = useState(0);
  


    useEffect(() => {
        api.get('/texts/')
            .then(response => {
                setTexto(response.data);
            });
        
    });

    function textoItem(){

        if(textos[TextoAtual] !== undefined ){ 
            return textos[TextoAtual].conteudo; 
        }
    }

    return(
        <>
            <Header></Header>
            <ItemTempo>
                <p className="subTitle" style={{ marginRight: '10px' }}>tempo:</p>
                <p id="tempo">0</p>
            </ItemTempo>
                <Player>
                    <TextoApi>
                        <p className='Title'>titulo</p>
                        <TextBlock>
                            <TextoTeste>
                                { textoItem() }
                            </TextoTeste>
                            
                            <BtnTrocar className='btnPreto'  onClick={ () => {
                                var value = TextoAtual;
                                if(textos[TextoAtual] === undefined){
                                    setTextoAtual(0);
                                    return;
                                }
                                value++;
                                setTextoAtual(value);
                            }}>trocar texto</BtnTrocar>
                        </TextBlock>
                        
                    </TextoApi>
                    <TextoAluno id="textoAluno" ></TextoAluno>
                </Player>
                
                <BlockBtns>
                    <BtnReiniciar  id="reiniciar" className='btnPreto' style={{ marginRight: '10px' }}><FiRefreshCw size='22px'/></BtnReiniciar>
                    <BtnEnviar  id="enviar" className='btnPreto' style={{ marginRight: '10px' }}><FiCheckCircle size='22px'/></BtnEnviar>
                    <BtnExcluir className='btnPreto' style={{ marginRight: '10px' }}><FiTrash size='22px' /></BtnExcluir>
                </BlockBtns>    

                <Pontuacao>
                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>acertos:</p>
                        <p id="acertos">0</p>
                    </Item>

                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>erros:</p>
                        <p id="erros">0</p>
                    </Item>

                    <Item>
                        <p className="subTitle" style={{ marginRight: '10px' }}>textos:</p>
                        <p id="textos">0</p>
                    </Item>
                </Pontuacao>

        </>
    )
}

export default Index;