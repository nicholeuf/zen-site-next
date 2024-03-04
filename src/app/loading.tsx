import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { getMainHeight } from '@/app/styles/styleUtils';

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: getMainHeight(),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
