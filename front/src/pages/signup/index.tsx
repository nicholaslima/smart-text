
import React,{ useRef } from 'react';
import { Titulo, Description,Container,BlockDescription,BtnVoltar } from './style';
import Header from '../../components/header/header';
import { FiArrowLeft,FiBookOpen,FiLock,FiMail,FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import * as yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../components/input';
import validationError from  '../../utils/validationErrors';

const Signup: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    async function handdleRegister(data: Object){
        try{
            const schema = yup.object().shape({
                nome: yup.string().required('nome é obrigatório'),
                email: yup.string().required('email é obrigatório').email('digite um email válido'),
                senha: yup.string().min(6,'no minimo 6 digitos'),
                idade: yup.string().required('a idade é obrigatória'),
                sexo: yup.string().required('o sexo é obrigatório')
            });

            await schema.validate(data,{ abortEarly: false });
            
            //await api.post('/user/create',data);
        }catch(err){
            const errors = validationError(err);
            formRef.current?.setErrors(errors);
        }
    }


    return(
        <>
        <Header></Header>
            <Container>
                <BlockDescription>
                    <Titulo>smart text</Titulo>
                    <Description>cadastre-se e tenha acesso ao nosso app para testar suas habilidades de escrita</Description>
                    <BtnVoltar><FiArrowLeft style={{ marginRight: '5px'}}></FiArrowLeft><Link to='/'>voltar</Link></BtnVoltar>
                </BlockDescription>
                <Form ref={ formRef } className="" onSubmit={ handdleRegister }>
                    <Titulo>Cadastre seu Acesso:</Titulo>
                    <Input icon={ FiUser } name="nome" type="text" placeholder="insira seu nome"/>
                    <Input icon={ FiMail } name="email" type="text" placeholder="insira seu email"/>
                    <Input icon={ FiLock } name="senha" type="password" placeholder="insira sua senha"/>
                    <Input name="idade" type="text" placeholder="insira sua idade"/>
                    <Input name="sexo" type="text" placeholder="insira seu sexo"/>
                    <button type="submit" className="btnRoxo" ><FiBookOpen></FiBookOpen> cadastrar</button>
                </Form>
            </Container>
        </>
    )
}

export default Signup;