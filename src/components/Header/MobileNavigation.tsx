'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { TransitionProps } from '@mui/material/transitions';
import { usePathname } from 'next/navigation';
import { CldImage } from 'next-cloudinary';
import {
  type ForwardedRef,
  Fragment,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import constants from '@/app/styles/constants';
import VisuallyHidden from '../VisuallyHidden';
import { mobileNavigationItems } from './constants';
import MobileNavigationItem from './MobileNavigationItem';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: ForwardedRef<HTMLDivElement>
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

  // Instead of a timeout, use the transition lifecycle. We'll pass handlers
  // to the transition via Dialog's `slotProps` so focus happens when the
  // Slide transition finishes (onEntered/onExited). This is more reliable
  // than setTimeout and maps cleanly for coverage/source-maps.

  useEffect(() => {
    // Ensure the open button is focused on initial mount for keyboard users.
    // Previously we used a timeout to return focus after transitions; the
    // transition lifecycle now handles focus on open/close, but on initial
    // render we still want the trigger to be focusable and focused.
    if (openButtonRef.current) {
      openButtonRef.current.focus();
    }
  }, []);
  return (
    <Fragment>
      <Box
        component="section"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          width: constants.header.height,
          height: constants.header.height,
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClickOpen}
          aria-label="Mobile Navigation Trigger"
          aria-expanded={open}
          ref={openButtonRef}
          sx={{
            width: '100%',
            height: '100%',
            ml: 0,
          }}
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
        slots={{ transition: Transition }}
        slotProps={{
          transition: {
            onEntered: () => {
              // When the dialog opens and the transition finishes, focus the close button
              if (closeButtonRef.current) closeButtonRef.current.focus();
            },
            onExited: () => {
              // When the dialog has fully closed, return focus to the open button
              if (openButtonRef.current) openButtonRef.current.focus();
            },
          },
        }}
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
              px: 0,
            }}
          >
            <Box
              sx={{
                width: constants.header.height,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 1,
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
            <Box
              sx={{
                p: 1,
                width: constants.header.height,
                height: constants.header.height,
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="Close Mobile Navigation"
                ref={closeButtonRef}
                sx={{
                  height: '100%',
                  width: '100%',
                  ml: 0,
                }}
              >
                <CloseIcon fontSize="large" />
              </IconButton>
            </Box>
          </Toolbar>
          <DialogContent>
            <VisuallyHidden
              id="mobile-navigation-dialog-title"
              component={DialogTitle}
            >
              Main Navigation Dialog
            </VisuallyHidden>
            <nav aria-label="Main Navigation">
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
