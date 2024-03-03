import DeviceType from '@/types/DeviceType';

const getWidthByDeviceType = (deviceType: DeviceType): string => {
  switch (deviceType) {
    case 'mobile':
      return '0px';
    case 'tablet':
      return '768px';
    default:
      return '1024px';
  }
};

export default getWidthByDeviceType;
