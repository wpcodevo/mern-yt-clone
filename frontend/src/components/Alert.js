import { store } from 'react-notifications-component'

const Alert = ({ title, message, type }) => {
  return store.addNotification({
    title,
    message,
    type,
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  })
}

export default Alert
