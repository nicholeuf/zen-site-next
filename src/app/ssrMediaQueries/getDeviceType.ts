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
    try {
      const parsedUA = Bowser.parse(ua);
      const platformType = parsedUA?.platform?.type;

      // Return the platform type if present, otherwise default to desktop
      // Bowser supports: mobile, tablet, desktop, tv, bot
      if (isDeviceType(platformType)) {
        return platformType;
      }
    } catch {
      // fall through to default
    }
  }

  return "desktop";
};

const DEVICE_TYPE_VALUES = DEVICE_TYPES as readonly string[];

const isDeviceType = (value: unknown): value is DeviceType =>
  typeof value === "string" && DEVICE_TYPE_VALUES.includes(value);

export default getDeviceType;
