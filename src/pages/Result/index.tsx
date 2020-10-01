import React from 'react';
import history from "./../../utils/history";
import {useTranslation} from "react-i18next";

const Result = () => {

    const {t} = useTranslation();

    const path : string = history.location.pathname;

    const result : boolean = path === '/result/true'
        ? true
        : false;

    const titleTrue = '!Tu Password Manager ya está creado!';
    const titleFalse = 'Ha habido un error';

    const messageTrue = 'Hemos creado exitosamente tu gestor de contraseñas';
    const messageFalse = 'No hemos podido crear tu contraseña maestra. Inténtalo más tarde';

    return (
        <div className="container">

            <div className="container section-info">

                <div className="info" style={{width: "100"}}>
                    <div className="description-title">
                        <h3>{result ? titleTrue : titleFalse}</h3>
                    </div>
                    <div className="col-description">
                        <p>{result ? messageTrue : messageFalse}</p>
                    </div>

                    <div className="col-description" 
                    style={{justifyContent: 'flex-end',display: 'flex', cursor: 'pointer', height:'60px'}}
                    onClick={() => {history.push('/')}}
                    >
                        <p>Volver al password manager {`>`}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Result