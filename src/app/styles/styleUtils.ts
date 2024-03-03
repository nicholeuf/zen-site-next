import constants from './constants';

export const getMainHeight = () => {
  return `calc(var(--viewport-height) - ${constants.header.height} - ${constants.footer.height})`;
};
