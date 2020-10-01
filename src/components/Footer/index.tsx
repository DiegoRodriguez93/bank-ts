import React from 'react';

import handleCancel from '../../helper/handleCancel';
import handleNextStep1 from '../../helper/handleNextStep1';

export interface Props {
    step: string,
    previousButton: string
}

export default function Footer(props: Props) {

    const previousButton = props.previousButton;
    const step = props.step;

    return (
        <div className="section-footer">
            <div className="col-6 left">
                <span 
                className="button button-prev"
                style={{display: previousButton}} 
                onClick={handleCancel}>Cancelar</span>
            </div>
            <div className="col-6 right">
                <button 
                className="button button-next" 
                onClick={ step === 'step1' ? handleNextStep1 : undefined}
                >Siguiente {'>'}</button>
            </div>
        </div>
    )

}
