import { Switch } from '@material-ui/core';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ERROR, INFO, SUCCESSFUL, WARNING } from '../constants';

toast.configure()

export const toastNotify = (message, toastType) => {
    switch (toastType) {
        case SUCCESSFUL:
            toast.success(message, { autoClose: 3000 });
            break;
        case WARNING:
            toast.warning(message, { autoClose: 3000 });
            break;
        case INFO:
            toast.info(message, { autoClose: 3000 });
            break;
        case ERROR:
            toast.error(message, { autoClose: 3000 });
            break;
        default:
            toast(message);
    }
}