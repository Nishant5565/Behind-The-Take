import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  featured: boolean;
}

const FeaturedJobCard = ({ title, company, location, salary, featured }: Job) => {
  return (
    <View className="p-6 mt-6  rounded-[16px] bg-violet-500 mb-4 shadow-lg">

      <View className="flex justify-between items-center rounded-ful px-2 py-1">
        <Image
          source={{ uri: "https://picsum.photos/200/300" }}
          className="rounded-full h-16  w-16 mr-2 border-4 border-white bg-or"
        />
      </View>

      <Text className="text-lg -bold text-white"
        style={{ fontFamily: "Poppins_400Regular" }}
      >{title}</Text>
      <Text className="text-sm text-white">{company}</Text>
      <Text className="text-sm text-white">{location}</Text>
      <Text className="text-sm font-semibold text-white">{salary}</Text>
      <TouchableOpacity className="mt-4 bg-white py-2 rounded">
        <Text className="text-center text-purple-700">Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FeaturedJobCard;
