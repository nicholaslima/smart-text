

import React,{ } from 'react';
import { Player,Pontuacao,BlockBtns,TextoAluno,TextoApi,TextBlock,TextoTeste,Item,ItemTempo } from './style';
import Header from '../../components/header/header';
import { FiCheckCircle,FiRefreshCw,FiTrash } from 'react-icons/fi';

const Index: React.FC = () => {
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
                            <TextoTeste></TextoTeste>
                            
                            <button className='btnPreto'>trocar texto</button>
                        </TextBlock>
                        
                    </TextoApi>
                    <TextoAluno id="textoAluno" ></TextoAluno>
                </Player>
                
                <BlockBtns>
                    <button  id="reiniciar" className='btnPreto' style={{ marginRight: '10px' }}><FiRefreshCw size='22px'/></button>
                    <button  id="enviar" className='btnPreto' style={{ marginRight: '10px' }}><FiCheckCircle size='22px'/></button>
                    <button className='btnPreto' style={{ marginRight: '10px' }}><FiTrash size='22px' /></button>
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