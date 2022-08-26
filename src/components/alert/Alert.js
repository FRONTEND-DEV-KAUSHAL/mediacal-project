import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useSelector } from 'react-redux';
import { RESET_ALERT } from '../../redux/ActionTypes';
import { resetAlert } from '../../redux/action/Alert.action';

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const alert = useSelector(state => state.Alert)
    console.log(alert);
    
    useEffect (() => {
      if (alert.text !== '') {
        enqueueSnackbar(alert.text, {
          variant:alert.color,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        })

        setTimeout(() => {dispatch(resetAlert()),2000})
      }
    }, [alert.text])
    
    return (
        <div>

        </div>
    );
}

export default Alert;