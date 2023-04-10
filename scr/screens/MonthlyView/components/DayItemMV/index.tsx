import {
  FlatList,
  Text,
  View,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";

import {
  IDay,
  ITodo,
  Colors,
  useAppDispatch,
  addTodo,
} from "../../../../shared";

import { Ionicons, AntDesign } from "@expo/vector-icons";
import { styles } from "./styles";
import React, { useState } from "react";

export const TodoItem = ({ item, dayId }: { item: ITodo; dayId: number }) => {
  return (
    <>
      <Text
        style={!item.isCompleted ? styles.todoText : styles.todoItemCompleted}
      >
        {item.text}
      </Text>
    </>
  );
};

export const DayItem = ({ day }: { day: IDay }) => {
  const dispatch = useAppDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [text, setText] = useState("");
  const changeText = (value: string) => {
    setText(value);
  };

  const addTaskHandler = () => {
    if (text.length > 2) {
      dispatch(addTodo({ dayId: day.id, text }));
      setText("");
      setIsModalVisible(false);
    }
  };

  const renderItem = ({ item }: { item: ITodo }) => {
    return <TodoItem item={item} dayId={day.id} />;
  };

  return (
    <View style={styles.dayItem}>
      <View style={styles.dayItemContainer}>
        <View style={styles.dayHeader}>
          <Text style={styles.dayHeaderTitle}>{day.date.format("dd")}</Text>
          <Text style={styles.dayHeaderTitle}>{day.date.format("D.M")}</Text>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <View style={styles.todoItem}>
            <FlatList
              data={day.todos}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        style={styles.modal}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={(e) => changeText(e)}
            placeholder={`Add some task`}
          />
          <Ionicons
            onPress={addTaskHandler}
            name="add-circle"
            size={60}
            color={Colors.white}
          />
        </View>
      </Modal>
    </View>
  );
};
