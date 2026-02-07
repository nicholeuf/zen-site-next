// Bowser does not document all possible platform.type values.
// These values are based on UAParserJS device types plus Bowser heuristics, not a formal standard.
type DeviceType =
  | "mobile"
  | "tablet"
  | "tv"
  | "bot"
  | "console"
  | "wearable"
  | "embedded"
  | "xr"
  | "desktop";

export default DeviceType;
