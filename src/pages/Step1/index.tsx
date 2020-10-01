import React from 'react';
import { useTranslation } from "react-i18next";

import description1 from './img/description1.jpeg';
import description2 from './img/description2.jpeg';

import Footer from '../../components/Footer';

/* export interface Props {
    step: string;
  } */

export default function Step1() {

    const { t } = useTranslation();

    const step : string = 'step1';
    const previousButton : string = 'none';
 

    return (<>

        <div className="container">

            <div className="row">

                <div className="col-lg-6 sm-12">
                    <img src={description1} alt="description1 Step1"/>
                    <div className="col-description">
                        {t("Save here all your passwords, data or any information, forget paper notes and unprotected applications")}
                    </div>
                </div>
                <div className="col-lg-6 sm-12">
                    <img src={description2} alt="description2 Step1"/>
                    <div className="col-description">
                        {t("Create your master key, only you can access your secrets with it.")}
                    </div>
                </div>

            </div>

        </div>

        <div className="container section-info">

            <div className="info" style={{ width: "100" }}>
                <div className="description-title"><h3> {t("How does it work?")}</h3></div>
                <div className="col-description"><p> {t("First, you need to create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.")} </p></div>
            </div>

            <div className="info">
                <div className="description-title"><h3> {t("What data can you save?")} </h3></div>
                <div className="col-description"><p> {t("For example, the number of your card, the PIN and PUK of your mobile phone, the serial number of one of your devices or any information that you need to have in a safe place.")} </p></div>
            </div>

        </div>

        <Footer previousButton={previousButton} step={step} />

    </>)

}