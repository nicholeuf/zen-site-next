const routes = {
  home: {
    href: "/",
    name: "Home",
    priority: 1,
  },
  about: {
    href: "/about",
    name: "About",
    priority: 0.8,
  },
  work: {
    href: "/work",
    name: "Work",
    priority: 0.8,
  },
  contact: {
    href: "/contact",
    name: "Contact",
    priority: 0.5,
  },
};

export const URLS = Object.values(routes).map((route) => route.href);

export default routes;
