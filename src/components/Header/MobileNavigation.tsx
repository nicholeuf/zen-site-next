'use client';

import { useState, forwardRef, Fragment, useRef, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
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
import VisuallyHidden from '../VisuallyHidden';

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
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // closeButtonRef is not available without a timeout
    const timeout = setTimeout(() => {
      // When the dialog opens, focus on the close button
      if (open && closeButtonRef.current) {
        closeButtonRef.current.focus();

        // When the dialog closes, focus on the open button
      } else if (!open && openButtonRef.current) {
        openButtonRef.current.focus();
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [open]);

  return (
    <Fragment>
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClickOpen}
          aria-label="Mobile Navigation Trigger"
          aria-expanded={open}
          ref={openButtonRef}
        >
          <MenuIcon color="secondary" fontSize="large" />
        </IconButton>
      </Box>
      <Dialog
        data-testid="mobile-navigation-dialog"
        aria-labelledby="mobile-navigation-dialog-title"
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
            component="section"
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
              onClick={handleClose}
              aria-label="Close Mobile Navigation"
              ref={closeButtonRef}
            >
              <CloseIcon fontSize="large" />
            </IconButton>
          </Toolbar>
          <DialogContent>
            <VisuallyHidden
              id="mobile-navigation-dialog-title"
              component={DialogTitle}
            >
              Main Navigation Dialog
            </VisuallyHidden>
            <nav aria-label="Main Navigation" role="navigation">
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
            </nav>
          </DialogContent>
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
              alt="Decorative lotus flower icon"
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
