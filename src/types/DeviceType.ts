// https://docs.uaparser.dev/info/device/type.html
// desktop added as an option in addition to uaparser options
type DeviceType =
  | 'mobile'
  | 'tablet'
  | 'smarttv'
  | 'console'
  | 'wearable'
  | 'embedded'
  | 'xr'
  | 'desktop';

export default DeviceType;
