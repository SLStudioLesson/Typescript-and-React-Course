// DialogExample.tsx
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const DialogExample: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        ダイアログを開く
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>確認</DialogTitle>
        <DialogContent>
          <p>この操作を続行しますか？</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            キャンセル
          </Button>
          <Button onClick={handleClose} color="primary">
            確認
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogExample;