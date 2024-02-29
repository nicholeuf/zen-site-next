import React, { useState, forwardRef, Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { CldImage } from 'next-cloudinary';
import { usePathname } from 'next/navigation';

import MobileNavigationItem from './MobileNavigationItem';
import { mobileNavigationItems } from './constants';
import constants from '@/app/styles/constants';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface MobileNavigationProps {
  activeColor: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeColor }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClickOpen}
        aria-label="open"
      >
        <MenuIcon color="secondary" fontSize="large" />
      </IconButton>
      <Dialog
        data-testid="mobile-navigation-dialog"
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: 'secondary.main',
          },
        }}
      >
        <Box
          sx={{
            height: '100%',
            width: '100%',
            position: 'relative',
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: constants.header.height,
              color: 'background.default',
              px: 1,
            }}
          >
            <Box
              sx={{
                width: constants.header.height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="sacramento"
                sx={{
                  fontSize: '30px',
                  fontWeight: 'bold',
                }}
              >
                nf
              </Typography>
            </Box>
            <IconButton
              edge="start"
              color="inherit"
              autoFocus
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
          <List
            sx={{
              mt: '10vh',
              ml: '20vw',
            }}
          >
            {mobileNavigationItems.map(({ href, name }) => {
              const isActive = pathname === href;
              return (
                <MobileNavigationItem
                  key={name}
                  href={href}
                  name={name}
                  isActive={isActive}
                  activeColor={activeColor}
                  onClick={handleClose}
                />
              );
            })}
          </List>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CldImage
              src="zensite/icons8-lotus"
              width={40}
              height={40}
              crop="fill"
              alt=""
            />
            <Typography
              color="background.default"
              variant="h5"
              component="p"
              sx={{
                mr: 3,
                ml: 1,
                my: 3,
              }}
            >
              thecodingyogi.me
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Fragment>
  );
};

export default MobileNavigation;
