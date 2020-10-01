import React from 'react';
import { useTranslation } from "react-i18next";

export default function Title() {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="App-main-title">
                <h1>{t("Welcome to OpenClose")}</h1>
                <hr className="title-hr" />
            </div>
        </div>
    )

}