

import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './RouteAuth';
import Jogo from '../pages/jogo';
import Signup from '../pages/signup';
import Signin from '../pages/signin';
import Hanking from '../pages/hanking';
import Pontuacoes from '../pages/pontuacoes';
import Conta from '../pages/conta';

const Routes: React.FC = () => {
    return(
        <>
            <Switch>
                <Route path='/' exact component={ Signin }></Route>
                <Route path='/jogar'  component={ Jogo } isPrivate></Route>
                <Route path='/signup' component={ Signup }></Route>
                <Route path='/hanking' component={ Hanking } isPrivate></Route>
                <Route path='/pontuacoes' component={ Pontuacoes } isPrivate></Route>
                <Route path='/conta' component={ Conta } isPrivate></Route>
            </Switch>
        </>
    )
}

export default Routes;