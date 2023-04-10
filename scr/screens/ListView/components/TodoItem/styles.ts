import { scale, Colors } from "../../../../shared";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontFamily: "ubuntu-bold",
  },
  modal: {
    justifyContent: "flex-start",
  },
  modalContainer: {
    height: scale(135),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: `${Colors.mainDarkGreen}`,
    padding: scale(20),
    borderRadius: scale(32),
    borderColor: "#193225",
    justifyContent: "space-evenly",
    borderWidth: scale(2),
  },
  textInput: {
    borderWidth: scale(2),
    borderColor: "#193225",
    backgroundColor: `${Colors.white}`,
    padding: scale(20),
    width: "80%",
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
    borderBottomRightRadius: scale(32),
    borderBottomLeftRadius: scale(32),
  },
  deleteButton: {
    width: scale(100),
    height: scale(64),
    backgroundColor: "#d96868",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(16),
    borderWidth: scale(1),
  },
  doneButton: {
    borderWidth: scale(1),
    width: scale(136),
    borderRadius: scale(16),
    height: scale(64),
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: scale(10),
  },
  todoItemCompleted: {
    fontSize: scale(24),
    padding: scale(12),
    textDecorationLine: "line-through",
    fontFamily: "ubuntu-bold",
  },
  editTodoButton: {
    width: scale(100),
    height: scale(64),
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(16),
    borderWidth: scale(1),
  },
});
