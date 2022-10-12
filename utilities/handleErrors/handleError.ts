import swal from 'sweetalert'

export const handleError = (message:string) => {
  swal('Ha ocurrido un error!', message, 'error')
}
