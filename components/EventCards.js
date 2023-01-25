import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const EventCards = ({
  title,
  date,
  countdown,
  randomColors1,
  randomColors2,
  hourDifference,
  minuteDifference,
  secondDifference,
}) => {
  return (
    <View className="pt-3 mb-5">
      <View className="p-3">
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
          className="p-3.5 rounded-t-lg h-28"
        >
          <Text className="text-white font-extrabold text-4xl mb-1">
            {title}
          </Text>
          <Text className="text-white text-lg">{date}</Text>

          <View className=" bg-gray-100 flex-row justify-between p-3 mx-1 rounded-2xl mt-2">
            <View className="flex-row items-center">
              <Text className="font-bold text-3xl">
                {countdown <= 9 ? `0${countdown}` : countdown}
              </Text>
              <Text className="font-bold text-lg"> days</Text>
            </View>
            <Text className="font-semibold text-2xl">
              {hourDifference}:{minuteDifference}:{secondDifference}
            </Text>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default EventCards;
