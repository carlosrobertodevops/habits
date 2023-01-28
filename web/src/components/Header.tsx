import { Plus } from "phosphor-react"

import logoImage from '../assets/logo.svg'

import * as React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface State extends SnackbarOrigin {
  open: boolean;
}

export function Header() {

  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { open, vertical, horizontal } = state;

  const buttonClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };


  const buttonClose = ( event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setState({ ...state, open: false });

  };

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Habits" />

      <button
        type="button"
        onClick={buttonClick({vertical: 'top', horizontal: 'center'})}
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300">
        <Plus size={20} className="text-violet-500"/>
        Novo hábito
      </button>

      {/* snackbar */}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={1000}
        onClose={buttonClose}>

        {/* alerta de sucesso */}
        <Alert
          onClose={buttonClose}
          severity="success"
          sx={{ width: '100%' }}>
          Clicado com sucesso !!! !
        </Alert>
      </Snackbar>
    </div >
  )
}

