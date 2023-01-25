import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import EditCards from "../components/EditCards";

const EditScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={style.mainView}>
      <View className="flex-row w-full ml-44 p-2 mt-3 items-center">
        <Text className="text-4xl font-extrabold">Edit</Text>
        <TouchableOpacity
          className=" ml-28"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-lg font-extrabold">Close</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="mt-2" showsHorizontalScrollIndicator={false}>
        <EditCards />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight,
  },
});

export default EditScreen;
