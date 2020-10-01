import Swal from 'sweetalert2';
const PRUEBA_KO = 'pruebaKO123';

const RESPONSE_OK = {status: 200};
const RESPONSE_KO = {status: 401};

const NextStep2 = (pass: string, repass: string, optionalQuestion: string) => 
	new Promise<object>((resolve, reject) =>
	{   
            Swal.fire({
                title: 'Creando almacén de contraseñas...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                Swal.showLoading();
                }
            })

        if(pass !== repass){
            reject({ 
                response : RESPONSE_KO,
                result : false
            });
        }
            
        setTimeout(() => 
        pass !== PRUEBA_KO
        ? resolve({
            response : RESPONSE_OK,
            result : true
        })
        : reject(RESPONSE_KO)
    , 3000)   

    }
)

export {
	NextStep2
}