


import React,{ useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Form,Titulo,Input,Container} from './style';
import Header from '../../components/header/header';
import api from '../../config/api';

interface Data{
    token: string;
}

interface authResp{
    data: Data;
}

const Hanking:React.FC = () => {

    const [ email,setEmail ] =  useState('');
    const [ password,setPassword ] =  useState('');

    const userdata = {
        email,
        senha: password
    }

    async function handdleAuth(){

            const resp: authResp = await api.post('user/auth',userdata);
            
            const token = resp.data.token;
            saveToken(token);
            limparForm();   
    }

    function limparForm(){
        setEmail('');
        setPassword('');
    }

    function saveToken(token: string){
        localStorage.setItem('jwt',token);
    }

    return(
        <>
            <Header></Header>
            <Container>
                
                <Form>
                        <Titulo>Entre em sua conta</Titulo>
                        <Input type="email" placeholder="insira seu email" value={ email } onChange={ (e) => setEmail(e.target.value)} />
                        <Input type="password" placeholder="insira sua senha"  value={ password } onChange={ (e) => setPassword(e.target.value)}/>
                        <button type="button" className="btnRoxo" onClick={ handdleAuth }><FiArrowRight></FiArrowRight> login</button>
                </Form>
            </Container>
        </>
    )


}

export default Hanking;