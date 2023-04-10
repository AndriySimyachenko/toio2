import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDarkGrey,
    marginTop: scale(27),
    position: "relative",
  },
  navButton: {
    position: "absolute",
    top: scale(10),
    zIndex: 1,
  },
  dot: {
    top: scale(40),
    left: scale(27),
    zIndex: 2,
  },
});
