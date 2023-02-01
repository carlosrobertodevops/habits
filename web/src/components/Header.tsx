import { Plus, X } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog';

import logoImage from '../assets/logo.svg'
import { NewHabitForm } from "./NewHabitForm";

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

      <Dialog.Root>

        <Dialog.Trigger
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
        >
          <Plus size={20} className="text-violet-500"/>
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0 " />

          <Dialog.Content className="absolute p-10 bg-zinc-900 /*border border-zinc-300*/ rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight front-extrabold">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm />

          </Dialog.Content>
        </Dialog.Portal>

      </Dialog.Root>

      {/* <button
        type="button"
        onClick={buttonClick({vertical: 'top', horizontal: 'center'})}
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300">
        <Plus size={20} className="text-violet-500"/>
        Novo hábito
      </button> */}

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

