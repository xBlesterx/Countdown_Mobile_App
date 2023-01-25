import { View, Text, TouchableOpacity } from "react-native";
import { PlusCircleIcon, PencilIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const AddEvent = () => {
  const navigation = useNavigation();

  return (
    <View className=" bg-gray-200 absolute bottom-2 z-10 shadow-2xl shadow-black flex-row w-full items-center rounded-2xl">
      <View className=" items-center justify-center ml-44">
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <PlusCircleIcon size={70} color="#52afa0" />
        </TouchableOpacity>
      </View>
      <View className=" ml-32">
        <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
          <PencilIcon size={30} color="#52afa0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddEvent;
