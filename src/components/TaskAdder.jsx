import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TaskView } from './TaskView';

export const TaskAdder = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addTask = () => {
    <TaskView />
    setOpen(false);
  };

  return (
    <div>
      <Button p={2} m={2} flex={5} variant="outlined" onClick={handleClickOpen}>
        Add new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a tesk, define the values for completing if with half credit or full credit.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="halfCredit"
            label="Half Credit"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="fullCredit"
            label="Full Credit"
            fullWidth
            variant="standard"
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addTask}>Add Task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}