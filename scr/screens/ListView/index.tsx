import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../navigation/Navigation";
import { Colors, Images } from "../../shared";
import { DaysList } from "./components/DaysList";
import { styles } from "./styles";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type ListViewProps = NativeStackScreenProps<RootStackParamList, "ListView">;

export const ListView: React.FunctionComponent<ListViewProps> = ({
  navigation,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("MonthlyView")}
        >
          <TouchableOpacity
            style={styles.dot}
            onPress={() => navigation.navigate("ListView")}
          >
            <Images.GreenCircle />
          </TouchableOpacity>
          <Images.GreyNavigator />
        </TouchableOpacity>
        <DaysList />
      </View>
    </>
  );
};
