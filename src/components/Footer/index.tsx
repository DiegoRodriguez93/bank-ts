import React from 'react';
import { useTranslation } from "react-i18next";

import handleCancel from '../../helper/handleCancel';
import handleNextStep1 from '../../helper/handleNextStep1';

export interface Props {
    step: string,
    previousButton: string
}

export default function Footer(props: Props) {

    const { t } = useTranslation();

    const previousButton = props.previousButton;
    const step = props.step;

    return (
        <div className="section-footer">
            <div className="col-6 left">
                <span 
                className="button button-prev"
                style={{display: previousButton}} 
                onClick={handleCancel}>{t("Cancel")}</span>
            </div>
            <div className="col-6 right">
                <button 
                className="button button-next" 
                onClick={ step === 'step1' ? handleNextStep1 : undefined}
                >{t("Next")} {'>'}</button>
            </div>
        </div>
    )

}
