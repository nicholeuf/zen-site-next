import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import Credits from './Credits';

const CreditsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const titleId = 'credits-modal-title';
  const descriptionId = 'credits-modal-description';

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          color: 'inherit',
          fontSize: 'inherit',
          p: 0,
        }}
        size="small"
      >
        View Credits
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <Box
          sx={(theme) => ({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            width: {
              xs: '90vw',
              sm: theme.breakpoints.values.sm,
            },
          })}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <IconButton
              aria-label="close"
              size="large"
              sx={{ position: 'absolute', top: 0, right: 0, p: 0 }}
              onClick={handleClose}
            >
              <CloseOutlinedIcon fontSize="inherit" />
            </IconButton>
            <Credits titleId={titleId} descriptionId={descriptionId} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CreditsModal;
