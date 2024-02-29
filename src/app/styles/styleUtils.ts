import constants from './constants';

export const getMainHeight = () => {
  return `calc(100vh - ${constants.header.height} - ${constants.footer.height})`;
};
