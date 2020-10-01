import React from "react";
import {Switch, Route} from 'react-router-dom';

import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import './locale/'

import Header from './components/Header';
import Title from './components/Title';
import Step1 from './pages/Step1/';
import Step2 from './pages/Step2/';
import Result from './pages/Result/';

export default function App() {

    return (
        <div className="App">
            <Header/>
            <Title/>
            <Switch>
                <Route exact path="/">
                    <Step1/>
                </Route>
                <Route path="/step2">
                    <Step2/>
                </Route>
                <Route path="/result/:res">
                    <Result/>
                </Route>
            </Switch>
        </div>
    );
}
