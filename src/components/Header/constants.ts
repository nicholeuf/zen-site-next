import routes from '@/app/lib/routes';
import constants from '@/app/styles/constants';

const { home, work, about, contact } = routes;

export const navigationItems = [work, about, contact, home];
export const mobileNavigationItems = [work, about, contact, home];

export const DEFAULT_HEIGHT = constants.header.height;
export const DEFAULT_COLOR = constants.colors.carob;
export const DEFAULT_ACTIVE_COLOR = constants.colors.guava;
