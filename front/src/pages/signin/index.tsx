


import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Form,Titulo,Input,Container} from './style';
import Header from '../../components/header/header';

const hanking:React.FC = () => {
    return(
        <>
            <Header></Header>
            <Container>
                
                <Form>
                        <Titulo>Entre em sua conta</Titulo>
                        <Input type="email" placeholder="insira seu email" />
                        <Input type="password" placeholder="insira sua senha" />
                        <button type="button" className="btnRoxo"><FiArrowRight></FiArrowRight> login</button>
                </Form>
            </Container>
        </>
    )


}

export default hanking;