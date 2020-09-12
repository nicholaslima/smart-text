
import React from 'react';
import { Input,Form,Titulo, Description,Container,BlockDescription,BtnVoltar } from './style';
import Header from '../../components/header/header';
import { FiArrowLeft,FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
    return(
        <>
        <Header></Header>
            <Container>
                <BlockDescription>
                    <Titulo>smart text</Titulo>
                    <Description>cadastre-se e tenha acesso ao nosso app para testar suas habilidades de escrita</Description>
                    <BtnVoltar><FiArrowLeft style={{ marginRight: '5px'}}></FiArrowLeft><Link to='/'>voltar</Link></BtnVoltar>
                </BlockDescription>
                <Form>
                    <Titulo>Cadastre seu Acesso:</Titulo>
                    <Input type="text" placeholder="insira seu nome" />
                    <Input type="email" placeholder="insira seu email" />
                    <Input type="password" placeholder="insira sua senha" />
                    <button type="button" className="btnRoxo"><FiBookOpen></FiBookOpen> cadastrar</button>
                </Form>
            </Container>
        </>
    )
}

export default Signup;