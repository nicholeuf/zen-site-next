// Storybook automocking relies on exact file-name matches in __mocks__.
// Use explicit .ts extensions in imports (e.g. getPlaceholderImage.ts) so this mock is picked up.
const getPlaceholderImage = async () => {
  return "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
};

export default getPlaceholderImage;
