import routes from '@/app/lib/routes';

const { home, work, about, contact } = routes;

export const navigationItems = [work, about, contact];
export const mobileNavigationItems = [work, about, contact, home];
