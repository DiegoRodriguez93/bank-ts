import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import Swal from 'sweetalert2';
import Footer from '../../components/Footer';
import {NextStep2} from '../../components/Footer/NextStep2';
import history from "./../../utils/history";
/* import Swal from 'sweetalert2'; */

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye}/>;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash}/>;

type Profile = {
    password: string,
    password2: string,
    pista: string
}

export default function Step2() {

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown
            ? false
            : true);
    };

    const togglePasswordVisiblity2 = () => {
        setPasswordShown2(passwordShown2
            ? false
            : true);
    };

    const {watch, handleSubmit, register, errors} = useForm < Profile > ();
    const onSubmit = handleSubmit((data : any) => {
        NextStep2(data.password, data.password2, data.pista).then((result : any) => {
            Swal.close();
            history.push('/result/' + result.result)
        }).catch((error) => Swal.fire('Error!', 'No se ha podido procesar la solicitud!', 'error'));
    });

    const step : string = 'step2';
    const previousButton : string = 'flex';

    return ( <> <div className="container section-info">

        <div className="info">
            <div className="col-description">
                <p>En primer lugar, debes crear una contraseña diferente para sus pertenencias
                    electrónicas. No podrás recuperar tu contraseña, así que recuérdala bien.</p>
            </div>
        </div>
    </div> < form id = "form" onSubmit = {onSubmit} >
         <div className="container container-form">
          <div className="row info">
            <div className="col-lg-6 sm-12">
                <label>Crea tu contraseña maestra</label>
                <input
                    type={passwordShown
                    ? "text"
                    : "password"}
                    name="password"
                    className="input-master-password"
                    placeholder="Tu contraseña maestra"
                    ref={register({
                    required: "Ingrese su contraseña",
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                        message: "Contraseña inválida, la contraseña debe contener al menos 1 número, 1 mayúscula " +
                                "y un mínimo de 8 caracteres"
                    }
                })}/>
                <i onClick={togglePasswordVisiblity}>{passwordShown
                        ? eyeSlash
                        : eye}</i>

                <div className="error-input">{errors.password && errors.password.message}</div>
            </div>
            <div className="col-lg-6 sm-12">
                <label>Repite tu contraseña maestra</label>
                <input
                    type={passwordShown2
                    ? "text"
                    : "password"}
                    name="password2"
                    className="input-master-password"
                    placeholder="Repite tu contraseña"
                    ref={register({
                    required: "Repita su contraseña",
                    validate: (value) => value === watch('password') || "Passwords don't match."
                })}/>
                <i onClick={togglePasswordVisiblity2}>{passwordShown2
                        ? eyeSlash
                        : eye}</i>
                <div className="error-input">{errors.password2 && errors.password2.message}</div>
            </div>
        </div>

        <div className="info">
            <div className="col-description">
                <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p>
            </div>
        </div>

        <div className="row info">
            <div className="col-lg-8 sm-12">
                <label>Crea tu pista para recordar tu contraña (Opcional)</label>
                <input
                    type="text"
                    name="pista"
                    id="pista"
                    className="input-master-forget-clue"
                    placeholder=""
                    ref={register({
                        validate: (value) => value !== watch('password') || value === '' || "La pista no puede ser igual a la contraseña."
                    })}/>
                    <div className="error-input">{errors.pista && errors.pista.message}</div>
            </div>
        </div>
    </div> < Footer previousButton = {previousButton} step = {step} /> 
    </form> </>)


}