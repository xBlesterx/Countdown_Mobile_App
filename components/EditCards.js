import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromEvent, selectevent } from "../features/eventSlice";
import { TrashIcon } from "react-native-heroicons/solid";
import { LinearGradient } from "expo-linear-gradient";

const EditCards = () => {
  const dispatch = useDispatch();

  const event = useSelector(selectevent);

  const handleRemoveEvent = (id) => {
    dispatch(removeFromEvent({ id }));
  };

  return (
    <View className="p-3">
      {event.map((events, index) => (
        <LinearGradient
          colors={[events.randomColors1, events.randomColors2]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 1,
          }}
          className=" rounded mb-3"
        >
          <View className="flex-row items-center justify-between px-3 pt-3">
            <Text className="text-white font-extrabold text-4xl">
              {events.title}
            </Text>
            <TouchableOpacity
              onPress={() => {
                handleRemoveEvent(events.id);
              }}
            >
              <TrashIcon size={20} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="px-3.5 pb-4 pt-2 text-white font-bold text-1xl">
            {events.date}
          </Text>
        </LinearGradient>
      ))}
    </View>
  );
};

export default EditCards;
