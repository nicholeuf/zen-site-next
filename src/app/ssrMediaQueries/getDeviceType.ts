import DeviceType from '@/types/DeviceType';
import { headers } from 'next/headers';
import { UAParser, IDevice } from 'ua-parser-js';

const getDeviceType = async (): Promise<DeviceType> => {
  // Parse deviceType from user agent header on server
  const userAgent = (await headers()).get('user-agent');
  return getDeviceTypeFromUserAgent(userAgent);
};

const getDeviceTypeFromUserAgent = (ua: string | null) => {
  if (ua) {
    const { device } = UAParser(ua);
    return device.type || 'desktop';
  }

  return 'desktop';
};

export default getDeviceType;
