import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch, useSelector } from "react-redux";
import { selectevent, setevent } from "../features/eventSlice";

const CreateEvent = () => {
  const dispatch = useDispatch();
  const brightColors = [
    "#ffd700",
    "#ffc0cb",
    "#8a2be2",
    "#00008b",
    "#ffa07a",
    "#daa520",
    "#6a5acd",
    "#f0e68c",
    "#9b30ff",
    "#0000cd",
    "#ffb6c1",
    "#ffa500",
    "#9400d3",
    "#48d1cc",
    "#87ceeb",
    "#00bfff",
  ];
  const [Randomcolor1, Randomcolor2] = [
    brightColors[Math.floor(Math.random() * brightColors.length)],
    brightColors[Math.floor(Math.random() * brightColors.length)],
  ];
  const [selectedDate, setSelectedDate] = useState();
  const [randomColors1, setRandomColors1] = useState(Randomcolor1);
  const [randomColors2, setRandomColors2] = useState(Randomcolor2);
  const [inputTitle, setInputTitle] = useState("");
  const [dateDiffereance, setDateDifferance] = useState("");
  const event = useSelector(selectevent);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  function findDateTimeDifference() {
    const currentDate = new Date();
    const selectedDateAsDate = new Date(selectedDate);
    const timeDiff = Math.abs(
      currentDate.getTime() - selectedDateAsDate.getTime()
    );
    const dayDifference = Math.floor(timeDiff / (1000 * 3600 * 24));
    const hourDifference = Math.floor(
      (timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)
    );
    const minuteDifference = Math.floor(
      (timeDiff % (1000 * 3600)) / (1000 * 60)
    );
    const secondDifference = Math.floor((timeDiff % (1000 * 60)) / 1000);
    return {
      dayDifference,
      hourDifference,
      minuteDifference,
      secondDifference,
    };
  }

  return (
    <View style={style.mainView} className="flex-1 bg-white">
      <View className="mt-4 items-center justify-center">
        <Text className="text-4xl font-extrabold">Create Event</Text>
      </View>
      <View className="p-4 mt-5 flex-1 justify-center">
        <View className="mb-5">
          <Text className="font-bold text-gray-500 text-lg mb-2">
            What's the name of the event?
          </Text>
          <TextInput
            className=" border-b-2 border-gray-300 text-lg"
            cursorColor="black"
            onChangeText={(text) => {
              setInputTitle(text);
            }}
          />
        </View>
        <View>
          <Text className="font-bold text-gray-500 text-lg mb-2">
            When is this event?
          </Text>

          <View className=" relative mb-60">
            <LinearGradient
              colors={[randomColors1, randomColors2]}
              start={{
                x: 0,
                y: 0,
              }}
              end={{
                x: 1,
                y: 1,
              }}
              className="p-4 rounded-lg h-24"
            >
              <Calendar
                onDayPress={(day) => {
                  setSelectedDate(day.dateString);
                  setDateDifferance(findDateTimeDifference());
                }}
                markedDates={{
                  [selectedDate]: { selected: true, marked: true },
                }}
                className="mx-5 right-5 w-full rounded-lg"
              />
            </LinearGradient>
          </View>
        </View>
      </View>
      <View className=" bottom-20 flex-row px-6 justify-between">
        <View>
          <TouchableOpacity
            style={{ backgroundColor: "gray" }}
            className="rounded-xl p-2 items-center  w-32"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text className="text-3xl shadow-lg">Cancel</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              const dayTimeDifferance = findDateTimeDifference();
              if (!isNaN(dayTimeDifferance.dayDifference) && inputTitle != "") {
                dispatch(
                  setevent({
                    id: event.length,
                    title: inputTitle,
                    date: selectedDate,
                    dayDifference: dayTimeDifferance.dayDifference,
                    randomColors1: randomColors1,
                    randomColors2: randomColors2,
                    hourDifference: dayTimeDifferance.hourDifference,
                    minuteDifference: dayTimeDifferance.minuteDifference,
                    secondDifference: dayTimeDifferance.secondDifference,
                  })
                );
                navigation.navigate("Home");
              } else
                alert(
                  "Please select a date after the current date and the title is not empty"
                );
            }}
            style={{ backgroundColor: Randomcolor1 }}
            className="rounded-xl p-2 items-center  w-32"
          >
            <Text className="text-3xl shadow-lg text-white font-semibold">
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {
    marginTop: StatusBar.currentHeight,
  },
});

export default CreateEvent;
