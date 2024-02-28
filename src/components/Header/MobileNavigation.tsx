import React, { useState, forwardRef, Fragment } from 'react';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { usePathname } from 'next/navigation';

import MobileNavigationItem from './MobileNavigationItem';

import { mobileNavigationItems } from './constants';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface MobileNavigationProps {
  color: string;
  activeColor: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  color,
  activeColor,
}) => {
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
        <MenuIcon color="secondary" />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        sx={(theme) => ({
          '& .MuiDialog-paper': {
            backgroundColor: theme.palette.background.default,
          },
        })}
      >
        <AppBar
          color="secondary"
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              autoFocus
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List
          sx={{
            m: 1,
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
                color={color}
                activeColor={activeColor}
                onClick={handleClose}
              />
            );
          })}
        </List>
      </Dialog>
    </Fragment>
  );
};

export default MobileNavigation;
