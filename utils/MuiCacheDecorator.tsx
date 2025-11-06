import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Decorator } from '@storybook/nextjs-vite';

// Emotion cache provider ensures MUI styles are injected in the right order
const MuiCacheDecorator: Decorator = (Story) => {
  const muiCache = createCache({ key: 'mui', prepend: true });
  return (
    <CacheProvider value={muiCache}>
      <Story />
    </CacheProvider>
  );
};

export default MuiCacheDecorator;
