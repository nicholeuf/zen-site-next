import DeviceType from '@/types/DeviceType';
import { headers } from 'next/headers';
import parser from 'ua-parser-js';

const getDeviceType = (): DeviceType => {
  // Parse deviceType from user agent header on server
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  return userAgent
    ? ((parser(userAgent.toString()).device.type || 'desktop') as DeviceType)
    : 'desktop';
};

export default getDeviceType;
