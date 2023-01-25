import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import EventCards from "../components/EventCards";
import AddEvent from "../components/AddEvent";
import { useSelector } from "react-redux";
import { selectevent } from "../features/eventSlice";
import { PencilIcon, PlusCircleIcon } from "react-native-heroicons/solid";

const HomeScreen = () => {
  const event = useSelector(selectevent);

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View style={style.mainView} className="bg-gray-200 flex-1">
      <AddEvent />
      <View className="mt-4 items-center justify-center">
        <Text className="text-4xl font-extrabold">Countdown</Text>
      </View>
      <View className="flex-1">
        <ScrollView showsHorizontalScrollIndicator={false}>
          {event.map((events, index) => (
            <EventCards
              title={events.title}
              date={events.date}
              countdown={events.dayDifference}
              randomColors1={events.randomColors1}
              randomColors2={events.randomColors2}
              hourDifference={events.hourDifference}
              minuteDifference={events.minuteDifference}
              secondDifference={events.secondDifference}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;
