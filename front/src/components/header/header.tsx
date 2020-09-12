

import React from 'react';
import { Container } from './style';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';


 const header:React.FC = () => {
    return(
        <>
            <Container>

                <nav>
                    <Link to="/">jogar</Link>
                    <Link to="/conta">conta</Link>
                    <Link to="/hanking">hanking</Link>
                    <Link to="/pontuacoes">pontuações</Link>
                    <Link to="/signup">sign up</Link>
                    <Link to="/signin">sign in</Link>
                    <div className='btnSair'>
                        <FiLogIn style={{  marginRight: '10px'}}/>
                        <p>sair</p>
                    </div>
                </nav>

             </Container>
        </>
    )
}

export default header;