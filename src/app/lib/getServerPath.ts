import { headers } from 'next/headers';

const getServerPath = async (): Promise<string> => {
  return (await headers()).get('x-next-pathname') || '/';
};

export default getServerPath;
