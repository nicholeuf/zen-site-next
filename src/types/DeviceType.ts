//https://docs.uaparser.js.org/v2/api/ua-parser-js/get-device.html#type-string
// desktop added as an option in addition to uaparser options
type DeviceType =
  | 'mobile'
  | 'tablet'
  | 'smarttv'
  | 'console'
  | 'wearable'
  | 'embedded'
  | 'desktop';

export default DeviceType;
