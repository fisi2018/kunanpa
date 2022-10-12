import swal from 'sweetalert'

export const handleSuccess = (message:string) => {
  swal('Listo!', message, 'success')
}
