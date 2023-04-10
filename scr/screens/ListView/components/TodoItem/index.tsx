import { Text, View, Modal, TextInput, TouchableOpacity } from "react-native";

import {
  ITodo,
  useAppDispatch,
  removeTodo,
  toggleCompletedTodo,
  editTodo,
  Colors,
} from "../../../../shared";

import { Ionicons, AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import React, { useState } from "react";

export const TodoItem = ({ item, dayId }: { item: ITodo; dayId: number }) => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleND, setIsModalVisibleND] = useState(false);

  const [text, setText] = useState(item.text);
  const changeText = (value: string) => {
    setText(value);
  };

  const deleteTodoHandler = () => {
    dispatch(removeTodo({ dayId: dayId, todoId: item.id }));

    setIsModalVisible(false);
  };

  const doneTodoHandler = () => {
    dispatch(toggleCompletedTodo({ dayId: dayId, todoId: item.id }));

    setIsModalVisible(false);
  };

  const editTaskHandler = () => {
    if (text.length > 2) {
      dispatch(editTodo({ dayId: dayId, todoId: item.id, text }));
      setText("");
      setIsModalVisibleND(false);
    }
  };

  const editModalOpener = () => {
    setIsModalVisible(false);
    setIsModalVisibleND(true);
  };

  return (
    <>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={deleteTodoHandler}>
            <View style={styles.deleteButton}>
              <Text>Delete</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={editModalOpener}>
            <View style={styles.editTodoButton}>
              <Text>Edit</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={doneTodoHandler}>
            <View style={styles.doneButton}>
              <Text>Done</Text>
              <Ionicons name="checkmark" size={24} />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        transparent={true}
        visible={isModalVisibleND}
        animationType="slide"
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(e) => changeText(e)}
            placeholder={`${item.text}`}
          />
          <Ionicons
            onPress={editTaskHandler}
            name="add-circle"
            size={60}
            color={Colors.addGreen}
          />
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <View style={styles.todoItem}>
          <Text
            style={
              !item.isCompleted ? styles.todoText : styles.todoItemCompleted
            }
          >
            {item.text}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
