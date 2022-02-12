import {Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');
let max;
if (width > height) {
  max = height;
} else {
  max = width;
}
let scale = max / 362;

export const deviceWidth = width;
export const deviceHeight = height;

export function px(size: number) {
  if (typeof size === 'number') {
    const newSize = size * scale;
    return newSize;
  } else {
    return size;
  }
}