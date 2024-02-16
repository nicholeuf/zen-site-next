import { constants } from './theme';

export const getMainHeight = () => {
  return `calc(100vh - ${constants.header.height} - ${constants.footer.height})`;
};
