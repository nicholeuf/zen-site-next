import mediaQuery from "css-mediaquery";

// Inspiration; https://www.js-howto.com/test-responsive-design-using-jest-and-react-testing-library/

export const createMatchMedia = (width: unknown) => {
  return (query: string) => {
    return {
      matches: mediaQuery.match(query, { width }),
      media: "",
      addListener: () => {},
      removeListener: () => {},
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    };
  };
};

export const resizeScreenSize = (width: unknown) => {
  window.matchMedia = createMatchMedia(width);
};

export const MOBILE_WIDTH = 400;
export const TABLET_WIDTH = 600;
export const DESKTOP_WIDTH = 900;
export const WIDE_DESKTOP_WIDTH = 1200;
