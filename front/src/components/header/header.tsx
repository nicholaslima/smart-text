

import React from 'react';
import { Container } from './style';
import { FiLogIn } from 'react-icons/fi';


 const header:React.FC = () => {
    return(
        <>
            <Container>

                <nav>
                    <div>conta</div>
                    <div>hanking</div>
                    <div>pontuações</div>
                    <div>configurações</div>
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