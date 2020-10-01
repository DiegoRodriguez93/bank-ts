import history from "./../utils/history";
import Swal from 'sweetalert2';

const handleCancel = () => {
    Swal.fire({
        title: 'Do you want go back and cancel process?',
        showCancelButton: true,
        confirmButtonText: `< Go back`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close();
          history.push('/')
        }
      })
}

export default handleCancel;