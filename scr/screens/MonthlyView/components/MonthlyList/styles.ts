import { scale, Colors } from "../../../../shared";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  daysList: {
    flex: 1,
    marginTop: scale(28),
    marginBottom: scale(28),
    marginHorizontal: scale(8),
  },
  dayItem: {},
  dayItemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dayHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: scale(12),
    width: scale(32),
  },
  dayHeaderTitle: {
    fontSize: scale(16),
    color: "white",
    fontWeight: "700",
  },
  todoList: {},
  todoItem: {
    width: scale(296),
    backgroundColor: Colors.warmYellow,
    borderRadius: scale(12),
    justifyContent: "center",
    marginBottom: scale(16),
    padding: scale(12),
  },
  todoText: {
    fontSize: scale(14),
    padding: scale(4),
    fontFamily: "ubuntu-regular",
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
    backgroundColor: `${Colors.white}`,
    padding: scale(10),
    margin: scale(10),
    width: "80%",
  },
  pagination: {
    flexDirection: "row",
    marginTop: scale(42),
    alignItems: "center",
    justifyContent: "center",
  },
  paginationText: {
    flexDirection: "row",
    fontFamily: "ubuntu-bold",
    color: Colors.white,
    fontSize: scale(24),
    paddingHorizontal: scale(10),
  },
  todoItemCompleted: {
    textDecorationLine: "line-through",
  },
});
