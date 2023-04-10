import * as Font from "expo-font";

export const loadFonts = () => {
  return Font.loadAsync({
    "ubuntu-regular": require("./Ubuntu-Regular.ttf"),
    "ubuntu-bold": require("./Ubuntu-Bold.ttf"),
  });
};
