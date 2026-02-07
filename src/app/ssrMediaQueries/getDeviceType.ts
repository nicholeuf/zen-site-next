import Bowser from "bowser";
import { headers } from "next/headers";
import DeviceType from "types/DeviceType";

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
    if (platformType) {
      return platformType as DeviceType;
    }
  }

  return "desktop";
};

export default getDeviceType;
