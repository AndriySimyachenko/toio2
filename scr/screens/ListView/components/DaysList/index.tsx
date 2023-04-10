import { FlatList, View, TouchableOpacity } from "react-native";
import { IDay, useAppSelector, Images } from "../../../../shared";
import { DayItem } from "../DayItem";
import { styles } from "./styles";

export const DaysList: React.FC = () => {
  const daysArr = useAppSelector((state) => state.daysList.days);

  const renderItem = ({ item }: { item: IDay }) => {
    return <DayItem day={item} />;
  };

  return (
    <View style={styles.container}>
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
