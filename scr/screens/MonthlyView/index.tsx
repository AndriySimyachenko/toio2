import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import { MonthlyList } from "./components/MonthlyList";
import { styles } from "./styles";
import { Colors, Images } from "../../shared";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Navigation";

type MonthlyViewProps = NativeStackScreenProps<
  RootStackParamList,
  "MonthlyView"
>;

export const MonthlyView: React.FunctionComponent<MonthlyViewProps> = ({
  navigation,
}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate("ListView")}
        >
          <TouchableOpacity
            style={styles.dot}
            onPress={() => navigation.navigate("ListView")}
          >
            <Images.GreyCircle />
          </TouchableOpacity>
          <Images.GreenNavigator />
        </TouchableOpacity>
        <MonthlyList />
      </View>
    </>
  );
};
