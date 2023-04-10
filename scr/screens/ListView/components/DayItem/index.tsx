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
import { styles } from "./style";
import React, { useState } from "react";
import { TodoItem } from "../TodoItem";

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
      <View style={styles.dayHeader}>
        <Text style={styles.dayHeaderTitle}>
          {`${day.date.format("ddd - MMMM D ")}`}
        </Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todoList}>
        <FlatList
          data={day.todos}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
        />
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
            color={Colors.addGreen}
          />
        </View>
      </Modal>
    </View>
  );
};

{
  /* <View>
  <Ionicons
    onPress={() => setIsModalVisible(true)}
    name="add"
    size={40}
    color={Colors.addGreen}
  />
</View>; */
}
