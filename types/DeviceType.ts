// Bowser does not document all possible platform.type values.
// These values are based on UAParserJS device types plus Bowser heuristics, not a formal standard.
export const DEVICE_TYPES = [
  "mobile",
  "tablet",
  "tv",
  "bot",
  "desktop",
] as const;

type DeviceType = (typeof DEVICE_TYPES)[number];

export default DeviceType;
