

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/index';
import Signup from '../pages/signup/index';
import Signin from '../pages/signin/index';
import Hanking from '../pages/hanking';
import Pontuacoes from '../pages/pontuacoes';
import Conta from '../pages/conta';

const Routes: React.FC = () => {
    return(
        <>
            <Switch>
                <Route path='/' exact component={ Index }></Route>
                <Route path='/signup' component={ Signup }></Route>
                <Route path='/signin' component={ Signin }></Route>
                <Route path='/hanking' component={ Hanking }></Route>
                <Route path='/pontuacoes' component={ Pontuacoes }></Route>
                <Route path='/conta' component={ Conta }></Route>
            </Switch>
        </>
    )
}

export default Routes;