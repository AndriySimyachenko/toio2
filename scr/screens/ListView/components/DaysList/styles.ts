import { scale, Colors } from "../../../../shared";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  daysList: {
    flex: 1,
    marginTop: scale(40),
    marginBottom: scale(28),
    marginHorizontal: scale(20),
  },
  dayItem: {},
  dayHeader: {
    flexDirection: "row",
    marginBottom: scale(12),
    alignContent: "center",
    justifyContent: "flex-start",
  },
  dayHeaderTitle: {
    fontSize: scale(24),
    color: "white",
    fontWeight: "700",
  },
  todoList: {
    marginBottom: scale(32),
  },
  todoItem: {
    height: scale(92),
    width: scale(335),
    backgroundColor: Colors.lightGreen,
    borderRadius: scale(16),
    justifyContent: "center",
    marginBottom: scale(16),
  },
  todoText: {
    fontSize: scale(24),
    padding: scale(12),
  },
  modal: {
    justifyContent: "flex-start",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: scale(135),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${Colors.mainDarkGreen}`,
    padding: scale(20),
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
    borderBottomRightRadius: scale(32),
    borderBottomLeftRadius: scale(32),
    borderWidth: scale(2),
    borderColor: "#193225",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#193225",
    fontSize: 40,
    backgroundColor: `${Colors.warmYellow}`,
    padding: scale(10),
    margin: scale(10),
    width: "80%",
  },
});
