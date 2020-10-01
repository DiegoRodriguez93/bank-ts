import { NextStep1 } from '../pages/Step1/NextStep1';
import history from "./../utils/history";

    const handleNextStep1 = () => NextStep1().then((result: boolean) => {
        if (result) {
            history.push('/step2')
        }
    });

export default handleNextStep1;