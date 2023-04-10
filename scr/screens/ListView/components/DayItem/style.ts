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
    marginHorizontal: scale(20),
  },
  dayItem: {},
  dayHeader: {
    flexDirection: "row",
    marginBottom: scale(12),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  addButton: {
    fontSize: scale(34),
    color: Colors.addGreen,
  },
  dayHeaderTitle: {
    fontSize: scale(24),
    color: "white",
    fontFamily: "ubuntu-bold",
  },
  todoList: {
    marginBottom: 32,
  },
  modal: {
    justifyContent: "flex-start",
  },
  modalContainer: {
    height: scale(135),
    flexDirection: "row",
    backgroundColor: `${Colors.mainDarkGreen}`,
    padding: scale(20),
    borderTopLeftRadius: scale(32),
    borderTopRightRadius: scale(32),
    borderBottomRightRadius: scale(32),
    borderBottomLeftRadius: scale(32),
    borderWidth: scale(2),
    borderColor: "#193225",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInput: {
    borderWidth: scale(1),
    borderColor: "#193225",
    backgroundColor: `${Colors.white}`,
    borderRadius: scale(16),
    padding: scale(20),
    margin: scale(10),
    width: "80%",
  },
});
