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

    // Map Bowser's platform types to our DeviceType
    // Bowser supports: mobile, tablet, desktop, tv, bot
    if (platformType === "tv") {
      return "smarttv";
    }

    // Return the platform type if it matches DeviceType, otherwise default to desktop
    // platformType can be: mobile, tablet, desktop, bot, or undefined
    if (
      platformType === "mobile" ||
      platformType === "tablet" ||
      platformType === "desktop"
    ) {
      return platformType;
    }
  }

  return "desktop";
};

export default getDeviceType;
