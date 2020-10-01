import Swal from 'sweetalert2';

const NextStep1 = () => new Promise < boolean > ((resolve, reject) => {

    Swal.fire({
        title: 'Terms and conditions',
        input: 'checkbox',
        html: '<div class="tosBox">Contrary to popular belief, Lorem Ipsum is not simply random' +
                ' text. It has roots in a piece of classical Latin literature from 45 BC, making ' +
                'it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney ' +
                'College in Virginia, looked up one of the more obscure Latin words, consectetur,' +
                ' from a Lorem Ipsum passage, and going through the cites of the word in classica' +
                'l literature, discovered the undoubtable source. Lorem Ipsum comes from sections' +
                ' 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good an' +
                'd Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of et' +
                'hics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem' +
                ' ipsum dolor sit amet..", comes from a line in section 1.10.32</div>',
        inputPlaceholder: 'I agree to terms and conditions',
        allowEscapeKey: false,
        allowOutsideClick: false,
        showCancelButton: true,
        preConfirm: () => {
            let checkbox : boolean = (document.getElementById('swal2-checkbox')as HTMLInputElement).checked;
            if (!checkbox) {
                Swal.showValidationMessage('You must agree the terms and conditions')
            }
        }
    })
        .then(function (result) {
            if (result.value) {
                resolve(true);
            }
        })

})

export {NextStep1}