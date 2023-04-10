import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;

const scale = (size: number) =>
  PixelRatio.roundToNearestPixel((shortDimension / guidelineBaseWidth) * size);

const moderateScale = (size: number, factor = 1) => {
  size + (scale(size) - size) * factor;
};

export { height, moderateScale, scale, width };
