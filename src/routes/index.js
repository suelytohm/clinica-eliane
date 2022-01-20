import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';
import Clientes from '../views/clientes';
import ClientesCadastro from '../views/ClientesCadastro';
import ClientesHistorico from '../views/ClientesHistorico';




export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/task" exact component={Task} />
                <Route path="/task/:id" exact component={Task} />

                <Route path="/clientes" exact component={Clientes} />
                <Route path="/clientesCadastro" exact component={ClientesCadastro} />
                <Route path="/clientes/:id" exact component={ClientesCadastro} />
                <Route path="/clientes/historico/:id" exact component={ClientesHistorico} />


            </Switch>
        </BrowserRouter>
    )
}