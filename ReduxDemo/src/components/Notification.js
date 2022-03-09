import React from 'react'
import {Alert} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice';


const Notification = ({type, message}) => {
    const dispatch = useDispatch();
   // const open = useSelector(state=>state.ui.notification)
    const notification = useSelector(state=>state.ui.notification);
    const handleClose = ()=>{
        dispatch(uiActions.showNotification({
            open: false,
			message: "closed",
            type: 'success+'
          }))
    }
  return (
    <div>
       {notification.open &&  <Alert onClose={handleClose} severity={type} > {message}</Alert> }
    </div>
  )
}

export default Notification;