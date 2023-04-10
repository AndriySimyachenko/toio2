import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import {
  IDay,
  ITodo,
  useAppSelector,
  useAppDispatch,
  Images,
} from "../../../../shared";

import { styles } from "./styles";
import { useState } from "react";
import { DayItem } from "../DayItemMV";

export const MonthlyList = () => {
  const daysArr = useAppSelector((state) => state.daysList.days);

  const renderItem = ({ item }: { item: IDay }) => {
    return <DayItem day={item} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.pagination}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={styles.paginationText}> Apr 1 - Apr 30 </Text>
        <AntDesign name="right" size={24} color="white" />
      </View>
      <View style={styles.daysList}>
        <FlatList
          data={daysArr}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

//  const days = useAppSelector((state) => state.daysList.days);
//  const dispatch = useAppDispatch();
//  const [text, setText] = useState("");
//  const todoItem = ({ item }: { item: ITodo }) => {
//    return (
//      <Text
//        style={!item.isCompleted ? styles.todoText : styles.todoItemCompleted}
//      >
//        {item.text}
//      </Text>
//    );
//  };

//  const dayItem = ({ item }: { item: IDay }) => {
//    return (
//      <View style={styles.dayItem}>
//        <View style={styles.dayItemContainer}>
//  <View style={styles.dayHeader}>
//    <Text style={styles.dayHeaderTitle}>{item.date.format("dd")}</Text>
//    <Text style={styles.dayHeaderTitle}>{item.date.format("D.M")}</Text>
//  </View>

//          <View style={styles.todoList}>
//            <View style={styles.todoItem}>
//              <FlatList
//                data={item.todos}
//                renderItem={todoItem}
//                keyExtractor={(item) => `${item.id}`}
//              />
//            </View>
//          </View>
//        </View>
//      </View>
//    );
//  };
//  return (
//    <View style={styles.container}>
//      <View style={styles.pagination}>
//        <AntDesign name="left" size={24} color="white" />
//        <Text style={styles.paginationText}> Mar 1 - Mar 31 </Text>
//        <AntDesign name="right" size={24} color="white" />
//      </View>
//      <View style={styles.daysList}>
//        <FlatList
//          data={days}
//          renderItem={dayItem}
//          keyExtractor={(item) => `${item.id}`}
//        />
//      </View>
//    </View>
//  );
