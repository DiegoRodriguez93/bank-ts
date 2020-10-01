import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {

    let location = useLocation();
    let path = location.pathname;

    return (
        <div className="App-header center-items">
            <div className="step-container center-items">
                <span style={path === '/' ? {backgroundColor:'#002b44'} : {} } className="step">1</span>
                <hr className="step-hr" />
                <span style={path === '/step2' ? {backgroundColor:'#002b44'} : {} } className="step">2</span>
                <hr className="step-hr" />
                <span style={path.indexOf('/result/') === 0 ? {backgroundColor:'#002b44'} : {} }  className="step">3</span>
            </div>
        </div>
    )

}