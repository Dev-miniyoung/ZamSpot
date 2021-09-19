import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 720;
export const unit = value => PixelRatio.roundToNearestPixel(value * 2 * scale);

export const getHitSlop = (top, right, bottom, left) => {
  const size = {
    top: unit(top),
    right: unit(right),
    bottom: unit(bottom),
    left: unit(left),
  };
  const hitSlop = StyleSheet.create({ size });

  return hitSlop.size;
};
