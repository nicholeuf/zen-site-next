import Bowser from "bowser";
import { headers } from "next/headers";
import DeviceType, { DEVICE_TYPES } from "types/DeviceType";

const getDeviceType = async (): Promise<DeviceType> => {
  // Parse deviceType from user agent header on server
  const userAgent = (await headers()).get("user-agent");
  return getDeviceTypeFromUserAgent(userAgent);
};

const getDeviceTypeFromUserAgent = (ua: string | null): DeviceType => {
  if (ua) {
    const parsedUA = Bowser.parse(ua);
    const platformType = parsedUA.platform.type;

    // Return the platform type if present, otherwise default to desktop
    // Bowser supports: mobile, tablet, desktop, tv, bot
    if (platformType && isDeviceType(platformType)) {
      return platformType;
    }
  }

  return "desktop";
};

const isDeviceType = (value: string): value is DeviceType =>
  DEVICE_TYPES.includes(value as DeviceType);

export default getDeviceType;
