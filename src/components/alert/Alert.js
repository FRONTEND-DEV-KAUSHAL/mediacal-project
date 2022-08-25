import React from 'react';
import { useSnackbar } from 'notistack';

function Alert(props) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const Alert = useSelector(state => (state.Alert))
    enqueueSnackbar(message,
        {
            variant: 'success',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'left'
            }
        }
    )
    return (
        <div>

        </div>
    );
}

export default Alert;