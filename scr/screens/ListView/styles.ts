import { StyleSheet } from "react-native";
import { scale, Colors } from "../../shared";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainDarkGreen,
    marginTop: scale(27),
    position: "relative",
  },
  navButton: {
    position: "absolute",
    top: scale(12),
    right: 0,
    zIndex: 999,
  },
  dot: {
    top: scale(41),
    left: scale(12),
    zIndex: 2,
  },
});
