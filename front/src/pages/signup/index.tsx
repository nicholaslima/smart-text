
import React,{ useState } from 'react';
import { Input,Form,Titulo, Description,Container,BlockDescription,BtnVoltar } from './style';
import Header from '../../components/header/header';
import { FiArrowLeft,FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../config/api';


const Signup: React.FC = () => {

    const [ name,setName ] = useState('');
    const [ email,setEmail ] = useState('');
    const [ password,setPassword ] = useState('');
    const [ sexo,setSexo ] = useState('');
    const [ age,setAge] = useState('');

    async function handdleRegister(){
        const data = {
            nome: name,
            email: email,
            senha: password,
            sexo: sexo,
            idade: age
        }

       const resp = await api.post('/user/create',data);
       apagarForm();
    }

    function apagarForm(){
        setName('');
        setEmail('');
        setPassword('');
        setSexo('');
        setAge('');
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
                <Form>
                    <Titulo>Cadastre seu Acesso:</Titulo>
                    <Input type="text" placeholder="insira seu nome" value={ name } onChange={ e => setName(e.target.value) }/>
                    <Input type="email" placeholder="insira seu email" value={ email } onChange={ e => setEmail(e.target.value) }/>
                    <Input type="password" placeholder="insira sua senha" value={ password } onChange={ e => setPassword(e.target.value) }/>
                    <Input type="text" placeholder="insira sua idade" value={ age } onChange={ e => setAge(e.target.value) }/>
                    <Input type="text" placeholder="insira seu sexo" value={ sexo } onChange={ e => setSexo(e.target.value) }/>
                    <button type="button" className="btnRoxo" onClick={ handdleRegister }><FiBookOpen></FiBookOpen> cadastrar</button>
                </Form>
            </Container>
        </>
    )
}

export default Signup;